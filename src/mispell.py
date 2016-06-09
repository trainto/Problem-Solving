numberOfTestCases = int(input())
testCases = []
for i in range(numberOfTestCases):
    testCases.append(input())

for i in range(len(testCases)):
    m, word = testCases[i].split(' ')
    m = int(m)
    print(str(i + 1) + " " + word[:m-1] + word[m:])
