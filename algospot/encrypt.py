numberOfTestCases = int(input())
testCases = []
for i in range(numberOfTestCases):
    testCases.append(input())

for plain in testCases:
    encrypted_even = ""
    encrypted_odd = ""
    for i in range(len(plain)):
        if i % 2 == 0:
            encrypted_even += plain[i]
        else:
            encrypted_odd += plain[i]
    print(encrypted_even + encrypted_odd)
