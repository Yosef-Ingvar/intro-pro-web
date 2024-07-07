const dev = {
  name: 'Igor',
  age: 24,
  technology: [
    { name: 'C++', specialty: 'Desktop' },
    { name: 'Python', specialty: 'Data Science' },
    { name: 'JavaScript', specialty: 'Web/Mobile' }
  ]
}

console.log(`O usuário ${dev.name} tem ${dev.age} anos e usa a tecnologia ${dev.technology[0].name} com especialidade em ${dev.technology[0].specialty}.`)