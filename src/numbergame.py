def startGame(left, right):
    if left == right:
        return numbers[left]
    elif right - left == 1:
        if numbers[left] > numbers[right]:
            return numbers[left] - numbers[right]
        else:
            return numbers[right] - numbers[left]
    elif memo[left][right] != float('-inf'):
        return memo[left][right]
    else:
        possible = [0 for _ in range(4)]
        possible[0] = numbers[left] - startGame(left + 1, right)
        possible[1] = numbers[right] - startGame(left, right - 1)
        possible[2] = 0 - startGame(left + 2, right)
        possible[3] = 0 - startGame(left, right - 2)
        memo[left][right] = max(possible)
    return memo[left][right]


for _ in range(int(input())):
    n = int(input())
    numbers = list(map(int, input().split()))
    memo = [[float('-inf') for _ in range(n)] for _ in range(n)]
    print(startGame(0, n-1))
