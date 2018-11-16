# 循环
nameList = ['terry','jack','angel']
for name in nameList:
    print(name)

# range(5)生成的序列是从0开始小于5的整数：
for x in list(range(5)):
    print(x) #0 1 2 3 4

# while循环

sum = 0
num = 100
while num > 0:
    sum += num
    num -= 1
print(sum)  #5050


# break语句可以提前退出循环
n = 1
while n <= 100:
    if n > 10: # 当n = 11时，条件满足，执行break语句
        break # break语句会结束当前循环
    print(n)
    n = n + 1
print('END')
# continue语句，跳过当前的这次循环，直接开始下一次循环

n = 0
while n < 10:
    n = n + 1
    if n % 2 == 0: # 如果n是偶数，执行continue语句
        continue # continue语句会直接继续下一轮循环，后续的print()语句不会执行
    print(n)

# break语句可以在循环过程中直接退出循环，而continue语句可以提前结束本轮循环，
# 并直接开始下一轮循环。这两个语句通常都必须配合if语句使用。