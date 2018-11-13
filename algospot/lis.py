import sys

data = []
memo = []

rl = lambda: sys.stdin.readline()

def lis(start):
    if memo[start] != -1:
        return memo[start]
    memo[start] = 1
    for i in range(start + 1, len(data)):
        if data[start] < data[i]:
            memo[start] = max(memo[start], lis(i) + 1)
    return memo[start]

for _ in range(int(rl())):
    n = int(rl())
    data = list(map(int, rl().split()))
    memo = [-1 for _ in range(len(data))]
    result = 0
    for i in range(len(data)):
        result = max(result, lis(i))
    print(result)
