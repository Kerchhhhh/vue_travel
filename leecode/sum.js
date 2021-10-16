var twoSum = function(nums, target) {
	const map = new  Map()
	for(let i =0; i <= nums.length; i++) {
			const cmp = target - nums[i]
			if(map.has(cmp)) {
					return [map.get(cmp), i]
			}
			else
					map.set(nums[i], i)
	}
};