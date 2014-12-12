# print out fibonacci sequence up to the given number

# sample 1 1 2 3 5 8 


def fibonacci(number)
  starter = [1,1]
  return 1 if number < 2

  i = 0
  while i != number
    next_number = starter[i] + starter[i+1]
    starter.push(next_number)
    puts starter[i] + starter[i+1]
    i += 1
  end

end

fibonacci 10