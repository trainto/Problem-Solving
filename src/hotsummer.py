testCases = []
for i in range(int(input())):
    target = int(input())
    usage = input().split(' ')
    targetAndUsage = [target]
    for i in usage:
        targetAndUsage.append(i)
    testCases.append(targetAndUsage[:])

for data in testCases:
    totalUsage = 0
    for i in range(1, len(data)):
        totalUsage += int(data[i])
    if totalUsage > int(data[0]):
        print("NO")
    else:
        print("YES")
