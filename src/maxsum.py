testCases = []
for i in range(int(input())):
    input()
    testCases.append(list(map(int, input().split())))

for numberSet in testCases:
    maxSum = 0; pSum = 0
    for i in range(len(numberSet)):
        pSum = max(pSum, 0) + numberSet[i]
        maxSum = max(pSum, maxSum)
    print(maxSum)
