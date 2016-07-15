for i in range(int(input())):
    n = int(input())
    men = list(map(lambda x: int(x), input().strip().split(' ')))
    wemen = list(map(lambda x: int(x), input().strip().split(' ')))
    men.sort()
    wemen.sort()
    total = 0
    for i in range(n):
        total = total + (men[i] - wemen[i])
    print(abs(total))
