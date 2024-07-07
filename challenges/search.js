const developers = [
  { name: "Carlos", technology: ["HTML", "CSS"] },
  { name: "Jasmine", technology: ["JavaScript", "CSS"] },
  { name: "Tuane", technology: ["HTML", "Node.js"]}
]

function search(properties) {
  let skills = properties.technology
  for(skill of skills) {
    if(skill === "CSS") {
      return properties.name   
    }
  }
}

for(i = 0; i < developers.length; i++) {
  let dev = search(developers[i])
  if(dev) {
    console.log(`${dev} trabalha com CSS.`);
  }
}