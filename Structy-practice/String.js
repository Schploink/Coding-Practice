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