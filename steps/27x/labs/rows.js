// Testdaten für das Labor: n Zeilen, immer dieselben.
export function makeRows(n) {
  const rows = []
  for (let i = 0; i < n; i++) {
    rows.push({
      id: i,
      text: `Eintrag ${i}`,
      prio: (i * 7919) % 100,
      tags: [{ name: 'a' }, { name: 'b' }],
    })
  }
  return rows
}
