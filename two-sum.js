/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let search_value = 0
    let second_index = 0
    for (let i=0; i < nums.length; i++) {
        search_value = target - nums[i]
        console.log(search_value)
        if (nums.includes(search_value, i+1)) {
            console.log("inside loop")
            let new_array = nums.slice(i+1)
            console.log(new_array)
            console.log(i)
            second_index = new_array.findIndex((num)=>num === search_value) + i + 1
            return [i,second_index]
        }
    }
    
};


let test_nums = [3,3]
let target = 6;
console.log("test")
console.log(test_nums)
let result = twoSum(test_nums,target)
console.log("result:")
console.log(result)