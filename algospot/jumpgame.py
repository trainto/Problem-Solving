import sys

rl = lambda: sys.stdin.readline()

def startGame(grid, x=0, y=0):
    if visited[x][y]:
        return
    else:
        visited[x][y] = True
        if grid[x][y] + x < len(grid[x]):
            startGame(grid, grid[x][y] + x, y)
        if grid[x][y] + y < len(grid):
            startGame(grid, x, grid[x][y] + y)

    return visited[len(grid) - 1][len(grid[0]) - 1]



for _ in range(int(rl())):
    size = int(rl())
    grid = []
    for _ in range(size):
        grid.append(list(map(int, rl().split())))

    visited = [[False for _ in range(len(grid[0]))] for _ in range(len(grid))]

    if startGame(grid):
        print("YES")
    else:
        print("NO")
