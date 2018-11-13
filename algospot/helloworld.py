import sys

rl = lambda: sys.stdin.readline()
for _ in range(int(rl())):
  print("Hello,", rl().strip() + "!")