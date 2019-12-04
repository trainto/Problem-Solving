from typing import List  # For local run


class Solution:
    def maxArea(self, height: List[int]) -> int:
        ret = 0

        ''' Brute force
        for i in range(len(height)):
            for j in range(i + 1, len(height)):
                shorter = height[i] if height[i] < height[j] else height[j]
                water = shorter * (j - i)
                if water > ret:
                    ret = water
        '''

        i, j = 0, len(height) - 1

        while i != j:
            shorter = height[i] if height[i] < height[j] else height[j]
            water = shorter * (j - i)
            ret = water if water > ret else ret

            if height[i] < height[j]:
                i += 1
            else:
                j -= 1

        return ret


# Locla test
solution = Solution()

input = [1, 8, 6, 2, 5, 4, 8, 3, 7]
print(solution.maxArea(input))
