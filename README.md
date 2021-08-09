# Orago Chat Client

Desktop JS IRC client. :3

Focused on providing an interface that users of newer chat services are happy with. Reuses UI conventions from newer chat services and defines new protocol extensions to make those experiences possible on smaller, self-contained servers.

Here's our WIP Functional Specification Document: https://docs.google.com/document/d/1l3RfiPBsYYGJNMM2Mvy_Cmzw7Jm00NadOHjUxlaR01Q/view

## Project Setup

```
npm install
npm run dev
```

## Linting

```
npm run lint:script
npm run lint:style
npm run lint:markup
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"
