def array123(nums):
  f = False
  for i in range(len(nums)-2):
    if nums[i:i+3] == [1,2,3]:
      f = True
  return f
