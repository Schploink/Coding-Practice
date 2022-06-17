const tribonacci = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n <= 1) return 0
  if (n === 2) return 1
  
  memo[n] = tribonacci(n-1, memo) + tribonacci(n-2, memo) + tribonacci(n-3, memo)
  return memo[n]
};

// memoization - runtime O(n)
// without memoization - runtime O(3^n)

const sumPossible = (amount, numbers, memo = {}) => {
  if (amount in memo) return memo[amount]
  if (amount === 0) return true
  if (amount < 0) return false
  
  for (let num of numbers){
    if (sumPossible(amount - num, numbers, memo) === true) {
      memo[amount] = true
      return true
    }  
  }
  
  memo[amount] = false
  return false
};


// memoization - runtime O(a * n)
// memoize at return statement

const minChange = (amount, coins) => {
  let answer = _minChange(amount, coins)
  
  if (answer === Infinity) {
    return -1
  } else {
    return answer
  }
}

const _minChange = (amount, coins, memo = {}) => {
  if (amount === 0) return 0
  if (amount < 0) return Infinity
  if (amount in memo) return memo[amount]
  
  let minCoins = Infinity
  
  for (let coin of coins) {
    let numCoins = 1 + _minChange(amount - coin, coins, memo)
    minCoins = Math.min(numCoins, minCoins)
  }
  
  memo[amount] = minCoins
  return minCoins
};

// use helper function to define logic if no minimum found