function twoSum(nums, target) {
  const numbers = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (numbers[diff] || numbers[diff] === 0) return [numbers[diff], i];
    numbers[nums[i]] = i;
  }
  console.log("no solution");
}
