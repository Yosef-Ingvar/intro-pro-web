const name = "Igor"
const sex = "F"
const age = 55
const contribution = 29

if (((sex === "M") && (contribution >= 35)) || ((sex === "F") && (contribution >= 30))) {
  if (((sex === "M") && ((contribution + age) >= 95)) || ((sex === "F") && ((contribution + age) >= 85))) {
    console.log(`${name}, você pode se aposentar!`)
  } else {
    console.log(`${name}, você ainda não pode se aposentar!`)
  }
} else {
  console.log(`${name}, você ainda não pode se aposentar!`)
}