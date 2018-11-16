# 条件判断

# 小明身高1.75，体重80.5kg。请根据BMI公式（体重除以身高的平方）帮小明计算他的BMI指数，并根据BMI指数：

# 低于18.5：过轻
# 18.5-25：正常
# 25-28：过重
# 28-32：肥胖
# 高于32：严重肥胖
# 体质指数（BMI）=体重（kg）÷身高^2（m）

import math   # 导入 math 模块
def getBMI(high,weight):
    return weight / math.pow(high,2)
    # print ("返回x的y次方 : ",  math.pow(3, 2))
BMI = getBMI(175,80.5)
# BMI = 29
if BMI > 32:
    print('严重肥胖')
elif 28< BMI <=32:
    print('肥胖')
elif 25< BMI <=28:
    print('过重')
elif 18.5 < BMI <= 25:
    print('正常')
else:
    print('过轻')