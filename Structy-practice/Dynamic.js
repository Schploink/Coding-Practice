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