
import glob
import string   #引用glob
import numpy as np   #引用numpy
from openpyxl import Workbook   #引用openpyxl的Workbook
 
flist = glob.glob('*temperature.txt')   #读取当前文件夹所有txt，并存入列表
# print(flist)
wb = Workbook()     #工作簿
ws = wb.active      #打开要保存数据的sheet
i=1                 #序数，用来将从txt提取的数据存储到excel的不同列
 
for filename in flist:   #利用for循环逐个读取txt文件
    array = np.loadtxt(filename,dtype=np.str,skiprows=1)   #将当前读取的txt文件数据存储矩阵
                                                           #delimiter默认为空格
    number_row = array.shape[0]   #获取数据矩阵行数
    for j in range(number_row):   
        ws.cell(j+1, i).value = str(array[j][4])   #将需要用的第五列数据以字符串形式存储在excel中
    i = i+1   
    
wb.save('data.xlsx')   #保存excel文件并退出