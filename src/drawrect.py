numberOfTestCases = int(input())
testCases = []
for i in range(numberOfTestCases):
    testCase = []
    for i in range(3):
        x, y = input().split(' ')
        testCase.append([int(x), int(y)])
    testCases.append(testCase[:])

for i in testCases:
    xSet = {i[0][0], i[1][0], i[2][0]}
    ySet = {i[0][1], i[1][1], i[2][1]}

    targetX = sum(xSet) * 2 - i[0][0] - i[1][0] - i[2][0]
    targetY = sum(ySet) * 2 - i[0][1] - i[1][1] - i[2][1]

    print(targetX, targetY)
