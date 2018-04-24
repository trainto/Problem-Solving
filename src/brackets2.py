def isOpen(ch):
    if (ch == '(' or ch == '{' or ch == '['):
        return True
    return False

def isMatched(pair):
    if (pair == '()' or pair == '{}' or pair == '[]'):
        return True
    return False

for i in range(int(input())):
    data = input()
    stack = []
    isFailed = False
    for j in range(len(data)):
        if isOpen(data[j]):
            stack.append(data[j])
        else:
            if len(stack) != 0 and isMatched(stack.pop() + data[j]):
                continue
            else:
                isFailed = True
                break
    if len(stack) == 0 and not(isFailed):
        print('YES')
    else:
        print('NO')
