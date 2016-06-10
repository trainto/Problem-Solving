import time

class Node:
    def __init__(self, val, depth, isLeft):
        self.val = val
        self.depth = depth
        self.isLeft = isLeft
    def addLeft(self, node):
        self.left = node
    def addRight(self, node):
        self.right = node

def isWeird(divisors, num):
    root = Node(0, 0, False)
    stack = []
    stack.append(root)
    while len(stack) != 0:
        cur = stack.pop()
        if (cur.val == num):
            return False
        elif cur.val > num:
            if cur.isLeft:
                stack.pop()
            continue
        else:
            if cur.depth + 1 > len(divisors):
                continue
            cur.addLeft(Node(cur.val + divisors[cur.depth], cur.depth + 1, True))
            cur.addRight(Node(cur.val, cur.depth + 1, False))
            stack.append(cur.right)
            stack.append(cur.left)
    return True

for i in range(int(input())):
    num = int(input())
    start = time.time()
    divisors = list(filter(lambda x: num % x == 0, range(1, num)))
    if sum(divisors) > num: # first condition
        if isWeird(divisors, num):
            print("weird")
            continue
    print("not weird")
    print(time.time() - start)
