numberOfTestCases = int(input())
testCases = []
for i in range(numberOfTestCases):
    testCases.append(input())

def decoder(rawUri):
    result = ""
    result = rawUri.replace("%20", " ")
    result = result.replace("%21", "!")
    result = result.replace("%24", "$")
    result = result.replace("%28", "(")
    result = result.replace("%29", ")")
    result = result.replace("%2a", "*")
    result = result.replace("%25", "%")
    return result

for i in testCases:
    print(decoder(i))
