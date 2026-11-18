// Kopiert den Stand eines Kapitels nach src/:  npm run step -- 04
// Ohne Nummer: listet die Stände. `npm run step -- all` baut jeden Stand einmal (Prüfung).
// Stände mit x (11x, 24x …) sind die Fehler-Varianten aus den Videos.
import { cpSync, readdirSync, rmSync, existsSync } from 'node:fs'
import { execSync } from 'node:child_process'

const DIRS = ['components', 'composables', 'stores', 'router', 'views', 'plugins', 'labs']
const steps = readdirSync('steps').filter(d => /^\d\dx?$/.test(d)).sort()
const arg = process.argv[2]

function apply(step) {
  for (const dir of DIRS) {
    if (existsSync(`src/${dir}`)) rmSync(`src/${dir}`, { recursive: true })
  }
  // Stände ohne eigene main.js (Video 1) bekommen die einfache Fassung zurück.
  cpSync('tools/main.base.js', 'src/main.js')
  cpSync(`steps/${step}`, 'src', { recursive: true })
}

if (arg === 'all') {
  for (const step of steps) {
    apply(step)
    execSync('npx vite build --logLevel warn', { stdio: 'inherit' })
    console.log(`Stand ${step}: Build ok`)
  }
  apply('06')
  console.log('Stand 06 liegt wieder in src/ (die Tests gehören zu diesem Stand).')
} else if (steps.includes(arg)) {
  apply(arg)
  console.log(`Stand ${arg} liegt in src/ – weiter mit: npm run dev`)
} else {
  console.log(`Stände: ${steps.join(', ')}  →  npm run step -- 04`)
}
