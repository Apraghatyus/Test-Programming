#Exercise 1. What is a function?
# A function is a reusable block of code that performs a specific task. It can take input parameters, execute a series of statements, and return a value. Functions help to organize code, improve readability, and promote code reusability. */

#EXERCISE 2: Kind of functions in Python
"""There are several kinds of functions in Python:"""
#1. Named functions
    #Function wihout parameters and return type
def greet():
    print("Hello, World!")
greet()
    #Function with parameters and return type
def add(a, b):
    return a + b
print(add(5, 3))
#2. Anonymous functions (lambda functions)
    #Lambda function with parameters and return type
square = lambda x: x * x
print(square(5))
#3. Built-in functions
    #Using the built-in function len() to get the length of a string
print(len("Hello, World!"))
#4. Recursive functions
    #A recursive function to calculate the factorial of a number
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
print(factorial(5))

#5. Default arguments
def greetDefault(name="Guest"):
    print(f"Hello {name}")

greetDefault()
greetDefault("Apraghatyus")

#6. Variable with keyword arguments
def greetKey(name, prog):
    print(f"Hello {name}, welcome to {prog}")

greetKey(prog="Python", name="Tulio")

#7. Variable with variable-length arguments (*args)
def greet_all(*names):
    for name in names:
        print(f"Hello {name}")

greet_all("A", "B", "C")

#8. Variable with variable-length keyword arguments (**kwargs)
def print_user(**data):
    for key, value in data.items():
        print(key, value)

print_user(name="Tulio", role="Dev")


#9. Higher-order functions
def apply_function(func, value):
    return func(value)

print(apply_function(square, 5))

# 10. Nested functions
def outer():
    def inner():
        print("Inside inner")
    inner()

outer()

# 11. Decorators
def decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper

@decorator
def greer():
    print("Hello!")
greer()

#EXERCISE 3: FizzBuzz with functions
""" Make a function that counts from 1 to 100 and prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both. """
def count(Fisrt, Second):
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print(f"{i}: {Fisrt+Second}")
        elif i % 3 == 0:
            print(f"{i}: {Fisrt}")
        elif i % 5 == 0:
            print(f"{i}: {Second}")
        
count("Pandebono", "Caliente")