if __name__ == '__main__':
    students = []
    
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])
    
    scores = sorted(set(s for _, s in students))
    second = scores[1]
    res = sorted(name for name, score in students if score == second)
    
    for name in res:
        print(name)