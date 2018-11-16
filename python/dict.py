# 字典

# 判断字典key是否存在
d = {
    'name':'terry',
    'age':18
}
print('name' in d)#True


# get()方法，如果key不存在，可以返回None
print(d.get('sex')) #None

# 要删除一个key，用pop(key)方法，对应的value也会从dict中删除：
d.pop('age')
print(d)

# 和list比较，dict有以下几个特点：

# 查找和插入的速度极快，不会随着key的增加而变慢；
# 需要占用大量的内存，内存浪费多。
# 而list相反：

# 查找和插入的时间随着元素的增加而增加；
# 占用空间小，浪费内存很少。



# set
# set和dict类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在set中，没有重复的key。

# 要创建一个set，需要提供一个list作为输入集合：
s = Set([1,2,3])