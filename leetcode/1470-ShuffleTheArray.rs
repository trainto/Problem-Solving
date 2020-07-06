pub fn shuffle(nums: Vec<i32>, n: i32) -> Vec<i32> {
    let mut ret: Vec<i32> = vec![];

    let len = nums.len();
    let mut index = 0;
    while index < len {
        let target_index = if index % 2 == 0 {
            (index / 2) as i32
        } else {
            n + ((index / 2) as i32)
        };

        ret.push(nums[target_index as usize]);
        index += 1;
    }

    return ret;
}
