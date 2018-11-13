for i in range(int(input())):
    n = int(input())
    men = list(map(lambda x: int(x), input().strip().split(' ')))
    women = list(map(lambda x: int(x), input().strip().split(' ')))
    men.sort()
    women.sort()
    total = 0
    for i in range(n):
        total = total + abs((men[i] - women[i]))
    print(total)
