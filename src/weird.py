import time
import random

def isWeird(num, subTotal, depth = 0):
    if depth <= divisorsN:
        if subTotal > num:
            return True
        if subTotal == num:
            return False
        if depth == divisorsN:
            return True

    ret1 = isWeird(num, subTotal + divisors[depth], depth + 1)
    if subTotal + divisors[depth] > num:
        return True
    ret2 = isWeird(num, subTotal, depth + 1)

    if not ret1 or not ret2:
        return False
    else:
        return True

def isWeird2(n):
    bitmask = [False for _ in range(1000001)]
    canMake = [0 for _ in range(n + 10)]

    divisors = list(filter(lambda x: num % x == 0, range(1, int(num/2) + 1)))
    if sum(divisors) <= n:
        return False

    bitmask[0] = True
    canMake.append(0)
    for i in range(len(divisors)):
        for j in range(len(canMake) - 1, -1, -1):
            k = canMake[j] + divisors[i]
            if not bitmask[k] and k <= n:
                if k == n:
                    return False
                bitmask[k] = True
                canMake.append(k)
    return True

# for i in range(int(input())):
start = time.time()
for _ in range(10):
    # num = int(input())
    # num = random.randrange(2, 500000)
    num = 426270
    # num = 70
    divisors = list(filter(lambda x: num % x == 0, range(1, int(num/2) + 1)))
    divisorsN = len(divisors)
    # print(num, len(divisors))
    # print(len(divisors))
    # print(divisors)
    total = sum(divisors)
    # if total > num and isWeird(divisors, num): # first condition
    if sum(divisors) > num and isWeird(num, 0):
        print("weird")
    else:
        print("not weird")


    # if isWeird2(num):
        # print("weird")
    # else:
        # print("not weird")
print(time.time() - start)
