import sys
import math

def tsp(start, N):
    if n == 1:

    if memo[start][N]:
        return memo[start][N]


rl = lambda: sys.stdin.readline()
# for tc in range(int(rl())):
for tc in range(1):
    # distances = []
    # for city in range(int(rl())):
        # distances.append(list(map(float, rl().split())))
    # distances.insert(0, [])
    distances = [
        [],
        [0.0000000000, 611.6157225201, 648.7500617289],
        [611.6157225201, 0.0000000000, 743.8557967501],
        [648.7500617289,743.8557967501,0.0000000000]
    ]

    memo = [
        [0 for _ in range(2 ** (len(distances) - 2))] for _ in range(len(distances))
    ]

    answer = math.inf
    for start in range(1, len(distances)):
        candidateAnswer = tsp(start, 2 ** (len(distances) - 2))
        answer = min(candidateAnswer, answer)

    print("{:.10f}".format(answer))
