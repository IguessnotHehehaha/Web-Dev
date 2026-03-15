import  math as m

a = int(input())
b = int(input())

for i in range(a, b + 1):
    tmp = int(m.sqrt(i))
    if tmp * tmp == i:
        print(i, end = ' ')