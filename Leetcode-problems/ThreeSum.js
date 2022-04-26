var threeSum = function(nums) {
    if (nums.length < 3) return []
    let numarr = nums.sort((a, b) => a - b) 
    let result = []
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) continue
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                while (nums[j] === nums[j + 1]) {
                    j++
                }        
                while (nums[k] === nums[k - 1]) {
                    k--
                }
                result.push([nums[i], nums[j], nums[k]])
                k -= 1
                j += 1
            } else if (nums[i] + nums[j] + nums[k] > 0){
                k -= 1
            } else {
                j += 1
            }
            
        }
    }
  }