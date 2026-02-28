## EXERCISE 1: Operators
#arithmetic operators: +, -, *, /, %
"""Create a exaple for each arithmetic operator"""
a: int = 8
b: int = 4
suma: int = a + b
rest: int = a - b
prod: int = a * b
div: float = a / b
mod: int = a % b
poten: int = a ** b

"""Python doesn't have increment (++) or decrement (--) operators, but you can achieve the same effect with += and -=."""
incre: int = a + 1  
decre: int = a - 1 

#logical operators: &&, ||, !
"""create a example for each logical operator"""
v: bool = True
f: bool = False
and_result: bool = v and f  # False, because both operands need to be True for the result to be True
or_result: bool = v or f  # True, because at least one operand is True
not_result: bool = not v  # False, because v is True and not operator negates it

#comparison operators: ==, !=, >, <, >=, <=, ===, !==
""" create a example for each comparison operator"""
x: int = 10
y: int = 20
equal: bool = x == y  # False, because 10 is not equal to 20
not_equal: bool = x != y  # True, because 10 is not equal to 20
greater: bool = x > y  # False, because 10 is not greater than 20
less: bool = x < y  # True, because 10 is less than 20
greater_equal: bool = x >= y  # False, because 10 is not greater than or equal to 20
less_equal: bool = x <= y  # True, because 10 is less than or equal to 20

#assignment operators: =, +=, -=, *=, /=, %=
""" create a example for each assignment operator """
c: int = 10
c += 5 # equivalent to c = c + 5, c is 15
c -= 3 # equivalent to c = c - 3, c is now 12
c *= 2 # equivalent to c = c * 2, c is now 24
c %= 3 # equivalent to c = c % 3, c is now 0
""" Python need to kwon what type of variable is, so we can't use c /= 2 because c is now 0 and it is an int, but we can use c = c / 2 and it will be a float """
d: float = 10
d /= 4 # equivalent to d = d / 4, d is now 2.5

# membership operators: in, instanceof
""" create a example for each membership operator """
arr: list[int] = [1, 2, 3, 4, 5]
is_in_array: bool = 3 in arr  # True, because 3 is an element of the array
is_not_in_array: bool = 6 not in arr  # True, because 6 is not an element of the array

# bitwise operators: &, |, ^, ~, <<, >>
"""Create an example for each bitwise operator"""
num1: int = 5  # binary: 0101
num2: int = 3  # binary: 0011
and_bitwise: int = num1 & num2 # 1 (0001)
or_bitwise: int = num1 | num2 # 7  (0111)
xor_bitwise: int = num1 ^ num2 # 6 (0110)
not_bitwise: int = ~num1  # -6
left_shift: int = num1 << 1 # 10 (1010)
right_shift: int = num1 >> 1 # 2 (0010)

# identity operators: ===, !==, in, instanceof
""" create a example for each identity operator """
obj1: dict[str, str] = { "name": "Alice" }
obj2: dict[str, str] = { "name": "Alice" }
obj3: dict[str, str] = obj1
is_same_reference: bool = obj1 is obj2  # False, because obj1 and
is_same_value: bool = obj1["name"] == obj2["name"]  # True, because the name property of both objects has the same value
is_same_reference2: bool = obj1 is obj3  # True, because obj1 and obj3 reference the same object in memory
has_name_key: bool = "name" in obj1  # True, because "name" is a key in obj1
is_array: bool = isinstance(arr, list)  # True, because arr is a list

# Nullish coalescing + optional chaining: ??, ?.
""" create a example for each nullish coalescing and optional chaining operator """
value: str | None = None
default_value: str = "Default Value"
safe_value: str = value if value is not None else default_value  # safe_value will be "Default Value" because value is None

# type of operator: typeof
""" create a example for type of operator """
num: int = 42
type_of_value: str = type(num).__name__  # "int"

# EXERCESE 2: Control structures
# if statement
""" create a example of an if statement """
age:int = 18
if (age >17):
    print("You are an adult.")
else:
    print("You are a minor.")

#switch statement
""" create a example of a switch statement """
day: str = "Thusday"
match day:
    case "Monday":
        print("Today is Monday.")
    case "Tuesday":
        print("Today is Tuesday.")
    case "Wednesday":
        print("Today is Wednesday.")
    case "Thursday":
        print("Today is Thursday.")
    case "Friday":
        print("Today is Friday.")
    case "Saturday":
        print("Today is Saturday.")
    case "Sunday":
        print("Today is Sunday.")
        
#for loop
""" create a example of a for loop """
for i in range(5):
    print(i)

#while loop
""" create a example of a while loop """
i: int = 0
while i < 5:
    print(i)
    i += 1  

#do-while loop
""" create a example of a do-while loop """
i: int = 0
while True:
    print(i)
    i += 1
    if i >= 5:
        break

# EXERCESE 3: test your knowledge
# create a function that print numbers between 10 and 55 (incluide), that are even, and that are neither 16 or multiples of 3.
def print_numbers():
    for num in range(10, 56):
        if num % 2 == 0 and num != 16 and num % 3 != 0:
            print(num)
        else:
            continue
        
