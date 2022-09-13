// Bugs Bunny loves eating carrots. There are n bundles of carrots. The ith bundle has bundles[i] carrots. Elmer Fudd the hunter has left and will be back in h hours.
// Bugs Bunny can decide his carrots-per-hour eating speed k. Each hour, he chooses a bundle of carrots and eats k carrots from the bundle. If the bundle has less than k bananas, he will eat all of them and not eat anymore during that hour.
// Bugs Bunny prefers to eat slowly but wants to finish eating before Elmer Fudd returns.
// Return the minimum integer k such that he can eat all the carrots within h hours.
// Examples will be under this thread. (edited) 

// Example 1
// Input: bundles = [11, 6, 7, 3], h = 8
// Output: 4
// Example 2
// Input: bundles = [20, 11, 30, 23], h = 5
// Output: 30
// Example 3
// Input: bundles = [11, 23, 4, 30], h = 5
// Output: 23

const chomper = (arr, time) => {
  let max = Math.max(...arr)
  for (let i = 1; i <= max; i++) {
    let mins = arr.map((ele) => {
      let divis = Math.floor(ele/i)
      if (ele % i > 0) divis += 1
      return divis
    })
    let sum = mins.reduce((prev, curr) => prev + curr, 0)
    if (sum === time) return i
  }
}

console.log(chomper([11, 6, 7, 3], 8))
console.log(chomper([20, 11, 30, 23], 5))
console.log(chomper([11, 23, 4, 30], 5))
// divide each arr element by i - save number as variable - if modulo remainder, add 1
// compare to time
// if time exceeded, go to next iteration
// if time not exceeded, return i