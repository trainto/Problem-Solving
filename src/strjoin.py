for i in range(int(input())):
    input()
    length = list(map(lambda x: int(x), input().strip().split()))
    cost = 0
    # Why the fuck doesn't it work??
    """while len(length) > 1:
        length.sort()
        tempList = []
        for i in range(0, len(length), 2):
            if i == len(length) - 1:
                tempList.append(length[i])
                break
            subSum = length[i] + length[i+1]
            cost = cost + subSum
            tempList.append(subSum)
        length = tempList"""
    while len(length) > 1:
        length.sort()
        subCost = length[0] + length[1]
        cost = cost + subCost
        length = length[2:]
        length.append(subCost)
    print(cost)
