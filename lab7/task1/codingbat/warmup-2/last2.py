def last2(str):
  if (len(str) < 2):
    return 0
    
  n = len(str)
  rem = str[n-2:]
  ans = 0
  
  for i in range(n-2):
    if str[i:i+2] == rem:
      ans += 1
  return ans
