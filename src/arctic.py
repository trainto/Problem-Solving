import sys
import math

def getDistance(a, b):
    return math.sqrt(pow(a[0] - b[0], 2) + pow(a[1] - b[1], 2))

rl = lambda: sys.stdin.readline()
for _ in range(int(rl())):
    stations = []
    for _ in range(int(rl())):
        stations.append(list(map(float, rl().split())))
    visited = [False] * len(stations)
    memo = [[-1 for col in range(len(stations))] for row in range(len(stations))]

    maxFrequency = 0
    visited[0] = True
    while False in visited:
        distance = 0xffffffff
        selectedStation = 0
        for curStation in (list(filter(lambda x: visited[x] == True, range(len(visited))))):
            for candidate in (list(filter(lambda x: visited[x] == False, range(len(visited))))):
                if memo[curStation][candidate] != -1:
                    candidateDistance = memo[curStation][candidate]
                else:
                    candidateDistance = getDistance(stations[curStation], stations[candidate])
                    memo[curStation][candidate] = candidateDistance
                    memo[candidate][curStation] = candidateDistance
                if candidateDistance < distance:
                    distance = candidateDistance
                    selectedStation = candidate
                    visited[selectedStation] = True
            if distance > maxFrequency:
                maxFrequency = distance

    print("%0.2f" % maxFrequency)
