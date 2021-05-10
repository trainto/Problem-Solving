/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const ret = [intervals[0]];
  for (let i = 1; i < intervals.length; i += 1) {
    let cur = ret[ret.length - 1];
    if (cur[1] >= intervals[i][0]) {
      if (intervals[i][1] > cur[1]) {
        cur[1] = intervals[i][1];
      }
    } else {
      ret.push(intervals[i]);
    }
  }

  return ret;
};

// test
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
