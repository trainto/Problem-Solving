pub fn running_sum(nums: Vec<i32>) -> Vec<i32> {
    let mut ret: Vec<i32> = vec![];

    let mut index = 0;
    while index < nums.len() {
        if ret.len() == 0 {
            ret.push(nums[index]);
        } else {
            ret.push(ret[index - 1] + nums[index]);
        }
        index += 1;
    }

    return ret;
}
