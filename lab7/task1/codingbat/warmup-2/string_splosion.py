def string_splosion(str):
  ans = ''
  for i in range(len(str)):
    ans += str[0:i+1]
  return ans
