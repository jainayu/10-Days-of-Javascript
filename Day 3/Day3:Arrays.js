

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var max = nums[0];
    var secMax = nums[0];
    nums.sort((x,y)=> x>y);

    nums.forEach(function(n, i, array){
        if(max < n){
            secMax = max;
            max = n;
        }
    });
    return secMax;
}


