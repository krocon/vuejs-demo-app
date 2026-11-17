// Kopiert den Stand eines Kapitels nach src/:  npm run step -- 04
// Ohne Nummer: listet die Stände. `npm run step -- all` baut jeden Stand einmal (Prüfung).
import { cpSync, readdirSync, rmSync, existsSync } from 'node:fs'
import { execSync } from 'node:child_process'

const steps = readdirSync('steps').filter(d => /^\d\d$/.test(d)).sort()
const arg = process.argv[2]

function apply(step) {
  for (const dir of ['src/components', 'src/composables']) {
    if (existsSync(dir)) rmSync(dir, { recursive: true })
  }
  cpSync(`steps/${step}`, 'src', { recursive: true })
}

if (arg === 'all') {
  for (const step of steps) {
    apply(step)
    execSync('npx vite build --logLevel warn', { stdio: 'inherit' })
    console.log(`Stand ${step}: Build ok`)
  }
} else if (steps.includes(arg)) {
  apply(arg)
  console.log(`Stand ${arg} liegt in src/ – weiter mit: npm run dev`)
} else {
  console.log(`Stände: ${steps.join(', ')}  →  npm run step -- 04`)
}
