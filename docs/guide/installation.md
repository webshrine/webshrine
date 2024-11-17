# Installation

```sh
npm i @webshrine/stdlib # types, core // [!=npm auto]
npm i -D @webshrine/stdtyp # types // [!=npm auto]
```
<!-- npm i @webshrine/stdlib @webshrine/stddom # types, core, DOM -->

<!-- ```mermaid
erDiagram
stdtyp ||--|| stdlib : "Fully reexports"
stdtyp ||--|| stddom : "Partially uses"
stdtyp ||--|| "Use types" : ""
stdlib ||--|| "Use types, core logics" : ""
stdlib ||--|| "Use types, core logics, DOM helpers" : ""
stddom ||--|| "Use types, core logics, DOM helpers" : ""
stddom ||--|| "Use types, core logics, DOM helpers" : ""
"Use types" ||--|| "Your project" : ""
"Use types, core logics" ||--|| "Your project" : ""
"Use types, core logics, DOM helpers" ||--|| "Your project" : ""
``` -->
