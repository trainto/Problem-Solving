import sys
import collections

rl = lambda: sys.stdin.readline()
for _ in range(int(rl())):
    jumpCapa = int(rl()) ** 2
    start = list(map(int, rl().split()))
    end = list(map(int, rl().split()))
    stoneBridge = []
    for _ in range(int(rl())):
        stoneBridge.append(list(map(int, rl().split())))
    stoneBridge.append(end)

    reachable = [False for _ in range(len(stoneBridge))]
    deque = collections.deque()
    deque.append(start)
    while len(deque):
        current = deque.popleft()
        for candidate in range(len(reachable)):
            if reachable[candidate]:
                continue
            if ((current[0] - stoneBridge[candidate][0]) ** 2 +
                (current[1] - stoneBridge[candidate][1]) ** 2) <= jumpCapa:
                    deque.append(stoneBridge[candidate])
                    reachable[candidate] = True
        if reachable[-1]:
            break
    if reachable[-1]:
        print("YES")
    else:
        print("NO")
