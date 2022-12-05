from sympy import *

# variable x
x = symbols("x")

p = 2 * x + 2  # our polynomial p(x)

m = x**2 + x + 2  # m(x)

# calculates the quotient q(x) and the remainder r(x) in the expression p(x)^2 = k(x)*q(x) + r(x) in Z_3
# and returns the result as a tuple. r(x) is the second element of that tuple.
remainder = div(p**2, m, modulus=3)[1]

print(f"The remainder is {remainder}")
