nameList = ['小明','terry','angel']


# 1.长度
print(len(nameList))#3

#索引取值

print(nameList[1])#terry

# 追加元素到末尾：

nameList.append('jerry')
print(nameList)#['小明','terry','angel','jerry']

# 把元素插入到指定的位置
nameList.insert(1,'Jack')
print(nameList)#['小明','Jack','terry','angel','jerry']


# 删除list末尾的元素 pop
nameList.pop()
print(nameList)#['小明','Jack','terry','angel']

# 要删除指定位置的元素，用pop(i)方法，其中i是索引位置
nameList.pop(1)
print(nameList)#['小明','terry','angel']


