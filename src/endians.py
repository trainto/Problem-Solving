numberOfTestCases = int(input())
testCases = []
for i in range(numberOfTestCases):
    testCases.append(int(input()))

for i in testCases:
    binary = bin(i)[2:]
    binary = '0' * (32 - len(binary)) + binary
    temp = binary[24:] + binary[16:24] + binary[8:16] + binary[:8]
    print(int(temp, 2))
