import sys

curRoot = 0;

def trace(preOrder, inOrder):
    global curRoot

    if len(inOrder) == 0:
        return
    if len(inOrder) == 1:
        curRoot += 1
        return inOrder

    rootIndex = inOrder.index(preOrder[curRoot])
    curRoot += 1
    ret = []

    left = trace(preOrder, inOrder[:rootIndex])
    if left != None:
        ret += left

    right = trace(preOrder, inOrder[rootIndex+1:])
    if right != None:
        ret += right

    ret.append(inOrder[rootIndex])

    return ret


rl = lambda: sys.stdin.readline()
for _ in range(int(rl())):
    rl()
    preOrder = list(map(int, rl().split()))
    inOrder = list(map(int, rl().split()))
    curRoot = 0
    for i in trace(preOrder, inOrder):
        print("%d " % i, end="")
    print()
