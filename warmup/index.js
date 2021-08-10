function main () {
	
}


function fizz_buzz () {
  for (i=1; i<101; i++) {
    if (i%3==0 && i%5 == 0) {
      console.log("FizzBuzz");
    } else if (i%3==0) {
      console.log("Fizz");
    } else if (i%5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}


//leetcode 560
// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
//Input:nums = [1,1,1], k = 2
//Output: 2
var subarraySum = function(nums, k) {
      let [sum, result, map] = [0, 0, new Map()];
      map.set(0,1)
      for (i=0; i< nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)){
            result += map.get(sum-k);
        }
        if (map.has(sum)){
            map.set(sum, map.get(sum)+1);
        } else {
            map.set(sum, 1);
        }
      }
      return result
};


//Input: [1,2,3,4,5] , 2
//Output: [3,4,5,1,2]
//needs array 2 or longer.
function left_rotation(arr, r) {
  let result = arr;
  let temp = [];
  for (rot=0; rot<r;rot++){
    for(i=1; i<result.length; i++){
      temp.push(result[i]);
    }
    temp.push(result[0]);
    result = temp;
    temp = [];
  }
  
  return result;
}


main();