a = int(input())

for i in range(2, 300001):
    if i % a == 0:
        print(i, end = ' ')