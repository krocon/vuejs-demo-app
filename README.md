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

### Video 2 – Pinia und Vue Router

| Kapitel | Stand | Thema | Dateien |
|---|---|---|---|
| 9 – Zwei Komponenten, zwei Listen | `steps/09` | das Problem: jeder Aufruf von `useTodos()` hat eine eigene Liste | `components/AppHeader.vue` |
| 10 – Ein Store mit Pinia | `steps/10` | `createPinia()`, `defineStore()` als Setup-Store | `main.js`, `stores/todos.js` |
| 11 – Store benutzen | `steps/11` (`11x` = Store zerlegt, Zähler steht) | `useTodosStore()`, `storeToRefs()` | `App.vue`, `components/AppHeader.vue` |
| 12 – Zwei Seiten | `steps/12` | `createRouter()`, `RouterView`, `RouterLink` | `router/index.js`, `views/ListView.vue`, `views/DoneView.vue` |
| 13 – Detailseite | `steps/13` | Parameter `:id`, `props: true`, benannte Route, `router.push()` | `views/DetailView.vue`, `components/TodoItem.vue` |
| 14 – Lazy Loading und 404 | `steps/14` | `() => import(…)`, Auffang-Route | `router/index.js`, `views/NotFound.vue` |

### Video 3 – Vuetify

| Kapitel | Stand | Thema | Dateien |
|---|---|---|---|
| 17 – Vuetify einbauen | `steps/17` | `createVuetify()`, `v-app`, `v-app-bar` | `plugins/vuetify.js`, `main.js`, `App.vue` |
| 18 – Formular | `steps/18` | `v-text-field`, `v-btn`, Hilfsklassen | `views/ListView.vue` |
| 19 – Tabelle | `steps/19` | `v-data-table`: Spalten, Slots, Suche | `views/ListView.vue` |
| 20 – Dialog und Snackbar | `steps/20` | `v-dialog`, `v-snackbar` | `views/ListView.vue` |
| 21 – Eigenes Design | `steps/21` | Theme, `defaults`, Deutsch, hell/dunkel | `plugins/vuetify.js`, `components/AppHeader.vue` |

Ab Stand 17 wird `src/assets/main.css` nicht mehr geladen.

### Video 4 – Sechs Fallen

Das Labor liegt unter `/labor` (`src/labs/`). Der Stand mit `x` zeigt den Fehler, der ohne `x` die Lösung.

| Kapitel | Stand | Falle | Datei |
|---|---|---|---|
| 24 | `steps/24x` → `24` | `reactive` zerlegt → `toRefs()` | `labs/Falle1.vue` |
| 25 | `steps/25x` → `25` | Index als `key` → echte ID | `labs/Falle2.vue` |
| 26 | `steps/26x` → `26` | Methode im Template → `computed` | `labs/Falle3.vue` |
| 27 | `steps/27x` → `27` | 100 000 Zeilen tief reaktiv → `shallowRef` | `labs/Falle4.vue` |
| 28 | `steps/28x` → `28` | alle Kinder rendern neu → stabile Props | `labs/Falle5.vue`, `labs/LabRow.vue` |
| 29 | `steps/29x` → `29` | 20 000 Elemente im DOM → `v-virtual-scroll` | `labs/Falle6.vue` |

`src/` und die Tests bleiben vorerst auf Stand 06 (Video 1).

## Prüfen

```bash
npm test             # Vitest: useTodos, TodoItem, App
npm run step -- all  # baut jeden Stand einmal, auch die Fehler-Varianten (danach liegt Stand 06 in src/)
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
