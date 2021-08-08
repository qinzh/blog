var removeDuplicates = function (nums) {
  let count = 0;
  nums.forEach((v, i) => {
    if (nums[i+1]> nums[i]) {
      count ++;
      nums[count] = nums[i+1];
    }
  });
  return (count + 1);
};