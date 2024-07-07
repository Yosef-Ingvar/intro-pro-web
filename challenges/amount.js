const users = [
  {
    nome: "Salvio",
    revenues: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    revenues: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    revenues: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
  },
  {
    nome: "Igor",
    revenues: [0],
    expenses: [0]
  }
]

function amount(profits, losses) {
  let amount = profits - losses
  amount = parseFloat(amount.toFixed(2))
  
  users[i].profisTotal = profits
  users[i].lossesTotal = losses
  users[i].amountTotal = amount
}

function sum(numbers){
  total = 0
  for(number of numbers) {
    total = total + number
  }
  return  parseFloat(total.toFixed(2))
}

for(i = 0; i < users.length; i++) {
  let revenues = users[i].revenues
  let expenses = users[i].expenses

  let profisTotal = sum(revenues)
  let lossesTotal = sum(expenses)

  amount(profisTotal, lossesTotal)

  if(users[i].amountTotal > 0) {
    console.log(`${users[i].nome} você possui saldo POSITIVO de: ${users[i].amountTotal}`)    
  } else if(users[i].amountTotal === 0) {
    console.log(`${users[i].nome} você NÃO possui saldo em conta: ${users[i].amountTotal}`)
  } else {
    console.log(`${users[i].nome} você possui saldo NEGATIVO de: ${users[i].amountTotal}`)
  }
}