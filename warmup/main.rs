fn main() {
  
}

fn fizz_buzz () {
  for i in 1..101 {
    match (i%3, i%5) {
      (0,0) => println!("FizzBuzz"),
      (0, _) => println!("Fizz"),
      (_, 0) => println!("Buzz"),
      (_, _) => println!("{}", i)
    }
  }
}


//leetcode 560
// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
//Input:nums = [1,1,1], k = 2
//Output: 2
pub fn subarray_sum(nums: Vec<i32>, k: i32) -> i32 {
	use std::collections::HashMap;
	let mut sum = 0;
	let mut result = 0;
	let mut map: HashMap<i32, i32> = HashMap::new();
	map.insert(0, 1);
	for i in nums {
		sum += i;
		result += map.get(&(sum-k)).unwrap_or(&0);
		map.insert(sum, map.get(&sum).unwrap_or(&0) + 1);
	}
	result
}

