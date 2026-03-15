cnt0 = 0
cntPos = 0
cntNeg = 0

n = int(input())
for i in range(n):
    a = int(input())
    if a == 0:
        cnt0 += 1
    elif a > 0:
        cntPos += 1
    elif a < 0:
        cntNeg += 1
    
print(cnt0, end = ' ')
print(cntPos, end = ' ')
print(cntNeg)