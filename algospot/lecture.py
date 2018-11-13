numberOfTestCases = int(input())
testCases = []
for i in range(numberOfTestCases):
    testCases.append(input())

for item in testCases:
    slicedList = []
    for i in range(0, len(item), 2):
        slicedList.append(item[i:i+2])
    slicedList.sort()
    print(''.join(slicedList))
