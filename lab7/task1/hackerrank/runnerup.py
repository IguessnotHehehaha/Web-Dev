if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    arr = list(arr)
    arr.sort()
    arr.reverse()
    mx = arr[0]
    for i in arr:
        if i != mx:
            print(i)
            break