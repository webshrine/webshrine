import type { JSDocableNode } from 'ts-morph'
import * as path from 'node:path'
import consola from 'consola'
import { Project, SyntaxKind } from 'ts-morph'
import { PACKAGES } from './constants'
import { capitalize } from './helpers/helpers'

const project = new Project()

project.addSourceFilesAtPaths([
  ...PACKAGES.map(({ name }) => `./packages/${name}/src/**/*.ts`),
  '!./packages/**/*.test.ts',
] as const)

const kindsToCategorize = [
  SyntaxKind.FunctionDeclaration,
  SyntaxKind.ClassDeclaration,
  SyntaxKind.InterfaceDeclaration,
  SyntaxKind.TypeAliasDeclaration,
  SyntaxKind.EnumDeclaration,
  SyntaxKind.VariableStatement,
  SyntaxKind.VariableDeclaration,
]

function isJSDocableNode(node: any): node is JSDocableNode {
  return kindsToCategorize.includes(node.getKind())
}

function setJSDocTag(node: JSDocableNode, tagName: string, text: string) {
  const jsDocs = node.getJsDocs()
  if (jsDocs.length > 0) {
    jsDocs.forEach((doc) => {
      doc.getTags().find(tag => tag.getTagName() === tagName)?.remove()
    })

    jsDocs[0].addTag({ tagName, text })
  }
  else {
    node.addJsDoc({ tags: [{ tagName, text }] })
  }
}

project.getSourceFiles().forEach((sourceFile) => {
  const category = capitalize(path.basename(path.dirname(sourceFile.getFilePath())))

  sourceFile.forEachChild((node) => {
    if (isJSDocableNode(node))
      setJSDocTag(node, 'category', category)
  })

  sourceFile.saveSync()
})

consola.success('JSDoc @category tags updated')
