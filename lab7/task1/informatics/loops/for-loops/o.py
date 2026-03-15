f = False
n = int(input())

for i in range(n):
    s = int(input())
    if(s == 0):
        f = True

if(f):
    print("YES")    
else:
    print("NO")