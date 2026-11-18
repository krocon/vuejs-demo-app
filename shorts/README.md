# Beispiele zu den Shorts

| Short | Thema | Datei |
|---|---|---|
| 3 Fehler, die deine Vue-App aufblähen | Komponente · Composable · Props runter, Events rauf | die Merkliste selbst: `steps/05` (Komponente), `steps/06` (Composable) |
| Eine Komponente, viele Fälle | Slots · geprüfte Props | `shorts/AppButton.vue`, `shorts/AppLink.vue` |

`npm test` prüft beide Komponenten (`shorts/shorts.spec.js`): Slots füllen die Lücken, eine Zahl als `href` löst die Vue-Warnung aus.
