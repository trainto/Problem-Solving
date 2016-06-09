from functools import reduce

numtc = int(input())

def isWeird(divisors, num):
    # BackTracking

for i in range(numtc):
    num = int(input())
    divisors = list(filter(lambda x: num % x == 0, range(1, num)))
    if sum(divisors) > num: # first condition
        if isWeird(divisors, num):
            print("weird")
            continue
    print("not weird")
