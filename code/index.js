const classA = [
  {
    name: "Igor",
    grade: 6
  },
  {
    name: "Mayk",
    grade: 5
  },
  {
    name: "Diego",
    grade: 5
  }
]

const classB = [
  {
    name: "Jasmine",
    grade: 5
  },
  {
    name: "Victória",
    grade: 10
  },
  {
    name: "Aldriele",
    grade: 8
  }
]

function calculateAverage(students) {
  let sum = 0;

  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade
  }

  const average = sum / students.length
  return average
}

function sendMessage(average, classroom) {
  average = parseFloat(average.toFixed(1))

  if (average >= 6) {
    console.log(`${classroom}: ${average} points. Congrats!`)
  } else {
    console.log(`${classroom}: ${average} points. Sorry!`)
  }
}

function markAsFlunked(student) {
  student.flunked = false

  if(student.grade <= 5) {
    student.flunked = true
  }
}

function sendMessageFlunked(student) {
  if(student.flunked) {
    console.log(`${student.name} disapproved.`)
  }
}

function studentsFlunked(students) {
  for(let student of students) {
    markAsFlunked(student)
    sendMessageFlunked(student)
  }
}

const averageA = calculateAverage(classA)
const averageB = calculateAverage(classB)

sendMessage(averageA, "class A")
sendMessage(averageB, "class B")

studentsFlunked(classA)
studentsFlunked(classB)