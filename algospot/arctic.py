import sys

rl = lambda: sys.stdin.readline()
for _ in range(int(rl())):
    stations = []
    for _ in range(int(rl())):
        stations.append(list(map(float, rl().split())))
    # For test case
    # stations = [[1.0, 1.0], [30.91, 8.0], [4.0, 7.64], [21.12, 6.0], [11.39, 3.0], [5.31, 11.0]]
    # for _ in range(100):
        # x = random.random() * 100
        # y = random.random() * 100
        # stations.append([x, y])

    visited = [False] * len(stations)
    memo = [[[-1, -1] for _ in range(len(stations))] for _ in range(len(stations))]
    # Cal all distances and sort memo[][] = [to what station, distance]
    for row in range(len(stations) - 1):
        for col in range(row + 1, len(stations)):
            distance = (stations[row][0] - stations[col][0]) ** 2 + (stations[row][1] - stations[col][1]) ** 2
            memo[row][col][0] = col
            memo[row][col][1] = distance
            memo[col][row][0] = row
            memo[col][row][1] = distance
    for row in range(len(stations)):
        memo[row].sort(key=lambda x: x[1])
        memo[row].pop(0) # Remove [-1, -1] which is initial value for distance to themselves

    maxFrequency = 0
    visited[0] = True
    while False in visited:
        minDistance = 0xffffffff
        selectedStation = 0
        for curStation in (list(filter(lambda x: visited[x] == True, range(len(visited))))):
            if visited[memo[curStation][0][0]]:
                memo[curStation].pop(0)
            if minDistance > memo[curStation][0][1]:
                minDistance = memo[curStation][0][1]
                selectedStation = memo[curStation][0][0]
        visited[int(selectedStation)] = True
        if maxFrequency < minDistance:
            maxFrequency = minDistance

    print("{:.2f}".format(round(maxFrequency ** 0.5, 2)))
