var canJump = function(nums) {
    let highestConfirm = nums.length - 1
    for (let i = nums.length -1; i > -1; i--){
        if (nums[i] >= highestConfirm - i){
            highestConfirm = i
            console.log(nums[i], highestConfirm, i)
        }      
    }
    if (highestConfirm === 0) { 
        return true 
    } else {
        return false
    }
    
};
// jumpgame 1
// jumpgame 2