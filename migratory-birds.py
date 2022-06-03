#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the migratoryBirds function below.
def migratoryBirds(arr):
  type_of_bird_list = {1:0, 2:0, 3:0, 4:0, 5:0}
  list_1 = []
  list_2 = []
  list_3 = []
  list_4 = []
  list_5 = []
  for i in arr:
    if i == 1:
      list_1.append(1)
    if i == 2:
      list_2.append(2)
    if i == 3:
      list_3.append(3)
    if i == 4:
      list_4.append(4)
    if i == 5:
      list_5.append(5)
  type_of_bird_list.update({1: len(list_1), 2: len(list_2), 3: len(list_3), 4: len(list_4), 5: len(list_5)})
  x = max(type_of_bird_list, key=type_of_bird_list.get)
  result = x
  return result
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr_count = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    result = migratoryBirds(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
