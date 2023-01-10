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

def knapsack(n,capacity,weights,prices):
    if(n==0 or capacity==0):
        return 0

    if (weights[n-1] > capacity):
        return knapsack(n-1,capacity,weights,prices)
   
    else:
        return max(prices[n-1] + knapsack(n-1,capacity-weights[n-1],weights,prices),
                   knapsack(n-1,capacity,weights,prices))
 

n = 4
capacity = 100
 
print(knapsack(n,capacity,weights,prices))