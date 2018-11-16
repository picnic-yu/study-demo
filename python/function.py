def sum(x,y):
    return x+y
print(sum(3,4))#7


# 函数默认参数
def power(x, n=2):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s

print(power(3))
print(power(3,3))


# 可变参数，传入的参数为数组或者对象

# 关键字参数
# 可变参数允许你传入0个或任意个参数，这些可变参数在函数调用时自动组装为一个tuple。而关键字参数允许你传入0个或任意个含参数名的参数，这些关键字参数在函数内部自动组装为一个dict。请看示例：

def person(name, age, **kw):
    print('name:', name, 'age:', age, 'other:', kw)

    # 要注意定义可变参数和关键字参数的语法：

# *args是可变参数，args接收的是一个tuple；

# **kw是关键字参数，kw接收的是一个dict。