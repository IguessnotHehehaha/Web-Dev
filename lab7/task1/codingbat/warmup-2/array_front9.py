def array_front9(nums):
  f = False
  for i in range(min(4, len(nums))):
    if nums[i] == 9:
      f = True
  return f
