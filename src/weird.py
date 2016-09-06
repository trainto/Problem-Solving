import time
import random

def isWerid(divisorSubset, num, subTotal, depth = 0):
    if depth <= divisorsN:
        if subTotal > num:
            return True
        if subTotal == num:
            return False
        if depth == divisorsN:
            return True

    divisorSubset.append(divisors[depth])
    ret1 = isWerid(divisorSubset[:], num, subTotal + divisors[depth], depth + 1)
    if subTotal + divisors[depth] > num:
        return True
    divisorSubset.pop()
    ret2 = isWerid(divisorSubset[:], num, subTotal, depth + 1)

    if not ret1 or not ret2:
        return False
    else:
        return True

# for i in range(int(input())):
start = time.time()
for _ in range(50):
    # num = int(input())
    num = random.randrange(2, 500000)
    # num = 426270
    # num = 12
    divisors = list(filter(lambda x: num % x == 0, range(1, int(num/2) + 1)))
    divisorsN = len(divisors)
    print(num, len(divisors))
    # print(len(divisors))
    # print(divisors)
    # total = sum(divisors)
    # if total > num and isWeird(divisors, num): # first condition
    if sum(divisors) > num and isWerid([], num, 0):
        print("weird")
    else:
        print("not weird")

print(time.time() - start)
