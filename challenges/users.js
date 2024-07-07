const users = [
  { name: "Carlos", technology: ["HTML", "CSS"] },
  { name: "Jasmine", technology: ["JavaScript", "CSS"] },
  { name: "Tuane", technology: ["HTML", "Node.js"]}
]

for (let i = 0; i < users.length; i++) {
  console.log(`${users[i].name} trabalha com ${users[i].technology}.`)
}