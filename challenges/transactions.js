/* Introdução */

const user = {
  name: "Yosef Ingvar",
  transactions: [],
  balance: 0
}

/* Adicionar transações */

function createTransaction(transaction) {
  if(transaction.type === "credit") {
    user.balance = user.balance + transaction.value
    user.transactions.push(transaction)
  } else {
    user.balance = user.balance - transaction.value
    user.transactions.push(transaction)
  }
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 30 });

/* Relatórios */

function getHigherTransactionByType(type) {
  let plusTransaction = ""; let plusValue = 0

  for(let transaction of user.transactions) {
    if((transaction.value > plusValue) && (transaction.type === type)){
      plusValue = transaction.value
      plusTransaction = transaction
    }
  }

  return plusTransaction
}

function getAverageTransactionValue() { 
  let average = 0

  for(let transaction of user.transactions) {
    average = average + transaction.value
  }

  return average = average / user.transactions.length
}

function getTransactionsCount() {
  let counter = { credit: 0, debit: 0 } 

  for(let transaction of user.transactions) {
    if(transaction.type === "debit") {
      counter.debit = counter.debit + 1
    }else {
      counter.credit = counter.credit + 1
    }
  }

  return counter
}

console.log(user.balance);                        // 60
console.log(getAverageTransactionValue())         // 70
console.log(getHigherTransactionByType("debit")); // { type: 'debit', value: 80 }
console.log(getHigherTransactionByType("credit")) // { type: 'credit', value: 120 }
console.log(getTransactionsCount())               // { credit: 2, debit: 2 }