import csv
import os

weights = []
prices = []

os.chdir(r'C:\Users\serge\OneDrive\Рабочий стол\Magistr\Анализ и разработка алгоритмов\Рюкзак')
with open('input.csv') as csvfile:
    readCSV = csv.reader(csvfile, delimiter=',')
    for row in readCSV:
        if row[0] == 'id':
            continue
        weights.append(int(row[1]))
        prices.append(int(row[2]))

n = 4
capacity = 100

def fractional_knapsack(value, weight, capacity):
    # индекс = [0, 1, 2, ..., n - 1] для n элементов
    index = list(range(len(value)))
    # содержит отношения значений к весу
    ratio = [v/w for v, w in zip(value, weight)]
    # индекс сортируется по соотношению стоимости к весу в порядке убывания
    index.sort(key=lambda i: ratio[i], reverse=True)
 
    max_value = 0
    for i in index:
        if weight[i] <= capacity:
            max_value += value[i]
            capacity -= weight[i]
        else:
            max_value += value[i]*capacity/weight[i]
            break
 
    return max_value
 
 
 
max_value = fractional_knapsack(prices, weights, capacity)
print('Максимальная стоимость предметов, которые можно перевозить:', int(max_value))