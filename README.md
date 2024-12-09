# ⛩️ Webshrine
### [📚Go to documentation](https://webshrine.org)

### 💿 Usage

<details><summary>Usage variants graph</summary>

```mermaid
erDiagram
stdtyp ||--|| stdlib : "Fully reexports"
stdtyp ||--|| "Use types" : ""
stdlib ||--|| "Use types, core logics" : ""
"Use types" ||--|| "Your project" : ""
"Use types, core logics" ||--|| "Your project" : ""
```
<!-- stdtyp ||--|| stddom : "Partially uses"
stddom ||--|| "Use types, core logics, DOM helpers" : ""
stddom ||--|| "Use types, core logics, DOM helpers" : ""
stdlib ||--|| "Use types, core logics, DOM helpers" : ""
"Use types, core logics, DOM helpers" ||--|| "Your project" : "" -->

</details>

```bash
pnpm i @webshrine/stdlib # types, core logics
pnpm i -D @webshrine/stdtyp # only types
```
<!-- pnpm i @webshrine/stdlib @webshrine/stddom # types, core, DOM -->
<details><summary>Other package managers</summary>

#### NPM
```bash
npm i @webshrine/stdlib # types, core logics
npm i -D @webshrine/stdtyp # only types
```
<!-- npm i @webshrine/stdlib @webshrine/stddom # types, core, DOM -->

#### Yarn
```bash
yarn add @webshrine/stdlib # types, core logics
yarn add -D @webshrine/stdtyp # only types
```
<!-- yarn add @webshrine/stdlib @webshrine/stddom # types, core, DOM -->
</details>

### 📦 Used packages
- [lodash](https://www.npmjs.com/package/lodash) - famous utils lib
- [utility-types](https://www.npmjs.com/package/utility-types) - famous type utils lib
- [klona](https://www.npmjs.com/package/klona) - fastest lodash.cloneDeep util
- [defu](https://www.npmjs.com/package/defu) - merge objects with defaults
- [fast-deep-equal](https://www.npmjs.com/package/fast-deep-equal) - merge objects with defaults
- [perfect-debounce](https://www.npmjs.com/package/perfect-debounce) - merge objects with defaults
- [throttleit](https://www.npmjs.com/package/throttleit) - merge objects with defaults
<!-- - [eventemitter3](https://www.npmjs.com/package/eventemitter3) - well-known EventEmitter -->
<!-- - [clsx](https://www.npmjs.com/package/clsx) - CSS class merging helper -->
