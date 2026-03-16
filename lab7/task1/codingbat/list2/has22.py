def has22(nums):
  ans = False
  for i in range(0, len(nums)-1):
    if nums[i] == 2 and nums[i+1] == 2:
      ans = True
  return ans
