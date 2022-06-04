#!/bin/python3

# A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. Given an integer, , rotate the array that many steps left and return the result.

# Example


# After  rotations, .

# Function Description

# Complete the rotateLeft function in the editor below.

# rotateLeft has the following parameters:

# int d: the amount to rotate by
# int arr[n]: the array to rotate
# Returns

# int[n]: the rotated array
# Input Format

# The first line contains two space-separated integers that denote , the number of integers, and , the number of left rotations to perform.
# The second line contains  space-separated integers that describe .

# Constraints

# Sample Input

# 5 4
# 1 2 3 4 5
# Sample Output

# 5 1 2 3 4
# Explanation

# To perform  left rotations, the array undergoes the following sequence of changes:

import math
import os
import random
import re
import sys

def rotation(d,a):
  for i in range(d):
    x = a.pop(0)
    a.append(x)
  print(' '.join(map(str, a)))

if __name__ == '__main__':
    nd = input().split()

    n = int(nd[0])

    d = int(nd[1])

    a = list(map(int, input().rstrip().split()))
    
    answer = rotation(d, a)
