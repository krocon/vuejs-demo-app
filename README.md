# vuejs-demo-app – Merkliste

Demo zum Video **„Vue.js in 8 Minuten: von null zur kleinen App“**.
Eine kleine Merkliste: Einträge hinzufügen, abhaken, löschen – und sie überlebt einen Reload.

## Schnellstart

```bash
git clone https://github.com/krocon/vuejs-demo-app.git
cd vuejs-demo-app
npm install
npm run dev        # http://localhost:5173
```

Voraussetzung: Node.js 22.18+ oder 24.12+.

## Schritt für Schritt nachmachen

`src/` enthält den Endstand. Jeder Zwischenstand aus dem Video liegt in `steps/<NN>/`:

```bash
npm run step -- 03   # kopiert den Stand von Kapitel 3 nach src/
npm run dev
```

| Kapitel | Stand | Thema | Dateien |
|---|---|---|---|
| 2 – Projekt starten | `steps/02` | `npm create vue@latest`, `index.html` → `main.js` → `App.vue` | `App.vue` |
| 3 – Die erste Komponente | `steps/03` | Single-File Component, `ref`, `{{ }}`, `@click` | `App.vue` |
| 4 – Liste und Formular | `steps/04` | `v-model`, `v-for` + `:key`, `v-if`/`v-else`, `computed` | `App.vue` |
| 5 – Eigene Komponente | `steps/05` | `defineProps`, `defineEmits`, `:class`, `<style scoped>` | `App.vue`, `components/TodoItem.vue` |
| 6 – Composable | `steps/06` | `useTodos()`, `watch`, localStorage | `App.vue`, `composables/useTodos.js` |

Das Styling (`src/assets/main.css`) ist fertig und wird im Video nicht getippt.

## Prüfen

```bash
npm test             # Vitest: useTodos, TodoItem, App
npm run step -- all  # baut jeden Stand einmal (danach liegt Stand 06 in src/)
npm run build
```

## So ist das Projekt entstanden

```bash
npm create vue@latest vuejs-demo-app   # alle Extras abgewählt, außer Vitest
```

Danach: `App.vue` geleert, `main.css`, `steps/` und `tools/step.mjs` ergänzt.

## Wie geht's weiter? Bausteine für echte Projekte

| Aufgabe | Baustein |
|---|---|
| Mehrere Seiten, Navigation | [Vue Router](https://router.vuejs.org/) |
| Zustand über viele Komponenten | [Pinia](https://pinia.vuejs.org/) |
| Typen | [TypeScript mit Vue](https://vuejs.org/guide/typescript/overview.html), `vue-tsc`, Editor-Erweiterung „Vue – Official“ |
| Fertige Composables | [VueUse](https://vueuse.org/) – z. B. `useLocalStorage` statt `useTodos`-Eigenbau |
| Unit- und Komponententests | [Vitest](https://vitest.dev/) + [Vue Test Utils](https://test-utils.vuejs.org/) |
| End-to-End-Tests | [Playwright](https://playwright.dev/) oder [Cypress](https://www.cypress.io/) |
| Debugging | [Vue DevTools](https://devtools.vuejs.org/) |
| Code-Qualität | ESLint mit [eslint-plugin-vue](https://eslint.vuejs.org/), Prettier |
| UI-Komponenten | z. B. [PrimeVue](https://primevue.org/), [Vuetify](https://vuetifyjs.com/), [Quasar](https://quasar.dev/) |
| Server-Rendering, SEO, Fullstack | [Nuxt](https://nuxt.com/) |

Doku: https://vuejs.org/guide/introduction.html
