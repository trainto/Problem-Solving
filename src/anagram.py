numberOfTestCases = int(input())
testCases = []
for i in range(numberOfTestCases):
    device, passwd = input().split(' ')
    testCases.append([device, passwd])

def passwd_verifier(device, passwd):
    if len(device) != len(passwd):
        return False
    elif device == passwd:
        return False

    for c in device:
        passwd = passwd.replace(c, "", 1)

    if len(passwd) == 0:
        return True

    return False

for item in testCases:
    if passwd_verifier(item[0], item[1]):
        print("Yes")
    else:
        print("No.")
