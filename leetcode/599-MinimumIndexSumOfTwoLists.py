from typing import List  #For local run

class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        memo = {}
        for i in range(len(list1)):
            memo[list1[i]] = i

        i = 0
        length = len(list2)
        minIndexSum = float('inf')
        ret = []
        while i <= minIndexSum and i < length:
            exist = memo.get(list2[i])
            if exist != None:
                if exist + i < minIndexSum:
                    ret = [list2[i]]
                    minIndexSum = exist + i
                elif exist + i == minIndexSum:
                    ret.append(list2[i])
                    minIndexSum = exist + i

            i += 1

        return ret
