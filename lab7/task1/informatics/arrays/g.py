n = int(input())
a = list(map(int, input().split()))
b = a[::-1]
for i in range(n):
    print(b[i], end = ' ')