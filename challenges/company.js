const user = {
  name: "Igor",
  company: {
    name: "Rocketseat",
    color: "Roxo",
    focus: "Programação",
    address: {
      road: "Rua Guilherme Gembala",
      number: 260
    }
  }
}

console.log(`A empresa ${user.company.name} está localizada na ${user.company.address.road}, ${user.company.address.number}`)