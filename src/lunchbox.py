for i in range(int(input())):
    n = int(input())
    m = list(map(lambda x: int(x), input().strip().split()))
    e = list(map(lambda x: int(x), input().strip().split()))
    paired = list(map(lambda x:[m[x], e[x]], range(n)))
    paired = sorted(paired, reverse=True, key=lambda x: x[1])
    micro, left = 0, 0
    for i in range(n):
        micro = micro + paired[i][0]
        left = max(left - paired[i][0], paired[i][1])
    print(micro + left)
