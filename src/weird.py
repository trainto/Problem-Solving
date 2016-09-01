import time
import random

class Node:
    def __init__(self, val, depth, isLeft):
        self.val = val
        self.depth = depth
        self.isLeft = isLeft
        self.left = None
        self.right = None
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
            del root
            del stack
            return False
        elif cur.val > num:
            if cur.isLeft:
                temp = stack.pop()
                del temp
            continue
        else:
            if cur.depth + 1 > len(divisors):
                continue
            cur.addLeft(Node(cur.val + divisors[cur.depth], cur.depth + 1, True))
            cur.addRight(Node(cur.val, cur.depth + 1, False))
            stack.append(cur.right)
            stack.append(cur.left)

    del root
    del stack
    return True

# for i in range(int(input())):
start = time.time()
for _ in range(50):
    # num = int(input())
    # num = random.randrange(2, 500000)
    num = 426270
    divisors = list(filter(lambda x: num % x == 0, range(1, int(num/2) + 1)))
    print(len(divisors))
    print(divisors)
    total = sum(divisors)
    if total > num and isWeird(divisors, num): # first condition
        print("weird")
    else:
        print("not weird")

print(time.time() - start)
