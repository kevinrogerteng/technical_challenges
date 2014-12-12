# print all prime numbers up to given number

# A prime number is a number that is that is greater than one and has no positive numbers, meaning 
# should not return 0 in modulus

# ruby code
def is_prime?(n)
  (2..n-1).each do |x|
    return false if n % x == 0
  end
  return true
end

def print_prime(number)
  (0..number).each do |x|
    puts x if is_prime?(x)
  end
end


print_prime 11