const name = "Igor"
const weight = 70
const height = 1.8

const imc = weight / (height * height)

if ( (imc === 29.9) || (imc >= 30) ) {
  console.log(`${name} você está acima do peso.`)
} else {
  console.log(`${name} você não está acima do peso.`)
}