const uncompress = (s) => {
  
  let nums = "0123456789"
  let j = 0
  let result = []
  
  for (let i = 0; i < s.length; i ++) {
    
    if ( !nums.includes(s[i]) ) {
      let num = s.slice(j, i)
      console.log(num)
      for (let count = 0; count < num; count += 1) {
        result.push(s[i])
      }
      j = i + 1
    }
  }
  
  return result.join("")
}


const compress = (s) => {
  let i = 0
  let j = 0
  let result = []
  
  while (j <= s.length) {
    if (s[i] === s[j]) {
      j += 1
    } else {
      let char = s[i]
      let cut = s.slice(i, j)
      let num = cut.length 
      if ( num === 1 ) {
        result.push(char)
      } else {
        result.push(num)
        result.push(char)
      }
      i = j 
      j += 1
    }
  }
  
  return result.join("")
  // one pointer iterates string 
  // second pointer denotes position to slice
  // if num > 1 add num and character 
  // if num === 1 - only character 
  // returns string
};