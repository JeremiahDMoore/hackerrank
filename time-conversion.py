#!/bin/python3

import os
import sys

#
# Complete the timeConversion function below.
#
def timeConversion(s):
  hour = s.split(':', 1)
  meridian = s[-2]
  time = s[:-2]
  if hour[0] == '12' and meridian == 'P':
    return str(time)
  if hour[0] == '12' and meridian == 'A':
    hour[0] = '00'
    return str(':'.join(hour)[:-2])
  if hour[0] != '12' and meridian == 'P':
    hour[0] = str(int(hour[0]) + 12)
    return str(':'.join(hour)[:-2])
  if hour[0] != '12' and meridian == 'A':
    return str(time)

if __name__ == '__main__':
    f = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    f.write(result)

    f.close()
