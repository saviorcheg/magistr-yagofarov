import os

os.chdir(r'C:\Users\serge\OneDrive\Рабочий стол\Magistr\Анализ и разработка алгоритмов\Лабиринт')

def get_lab(file_name):
    with open(file_name) as f:
        lines = f.readlines()
    return [[int(x) for x in s.split(',')] for s in lines]


def find_ways(x, y, v, string1, s): 
    if x == rx-1 and y == ry-1:  # точка останова        
        price_ways.append(v)
        print('Маршрут с ценой ' + str(v) + ':')
        string1 += s
        print(string1)
    else:  # шаги рекурсии  
        if x < rx-1:            
            find_ways(x+1,y,v+lab[y][x+1], string1, s + 'x')
        if y < ry-1:            
            find_ways(x,y+1,v+lab[y+1][x], string1, s + 'y')
    
string = ''     
lab = get_lab('./ways/ways3.txt')
print('Лабиринт')
for row in lab:
    print(*row)
rx, ry = len(lab[0]), len(lab)
price_ways = []
find_ways(0, 0, lab[0][0], string, '')
print('Минимальная цена маршрута = ', min(price_ways))
print('Макимальная цена маршрута = ', max(price_ways))