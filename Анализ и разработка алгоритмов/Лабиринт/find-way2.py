import time
import os

os.chdir(r'C:\Users\serge\OneDrive\Рабочий стол\Magistr\Анализ и разработка алгоритмов\Лабиринт')
f = open('ways.txt', 'r')
lines = f.readlines()
f.close()

tab = []
row, col = map(int, lines[0].split())
for r in range(1, row+1):
	tab.append(list(map(int, lines[r].split())))

def get_naiv(row, col):
	class Point():
		def __init__(self,d,r,c):
			self.d = d
			self.r = r
			self.c = c

	ways = [Point(tab[0][0],0,0)]

	for pos in range(row+col-2):
		count_ways = len(ways)
		for num in range(count_ways):
			way = ways[num]
			if way.r+1 < row:
				ways.append(Point(way.d+tab[way.r+1][way.c],way.r+1,way.c))
			if way.c+1 < col:
				ways.append(Point(way.d+tab[way.r][way.c+1],way.r,way.c+1))
		ways = ways[count_ways:]

	return min([x.d for x in ways])


start = time.monotonic()
# result = get_naiv(2, 2)
result = get_naiv(row, col)
finish = time.monotonic()
dif = finish - start

print(result)
print(dif)