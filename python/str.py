#len()

name = 'xiaoming'
print(len(name))#8


# 格式化
# %d	整数
# %f	浮点数
# %s	字符串
# %x	十六进制整数
# %s永远起作用，它会把任何数据类型转换为字符串
# 一个变量可以不用括号，直接在后面
print('hello,%s'%'word')  

print('my name is %s,age is %d'%('xz',18)) 
# my name is xz,age is 18



# format()格式化
print('Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125))
# 'Hello, 小明, 成绩提升了 17.1%'