
#  STRING OPERATIONS IN PYTHON
word = "Hello, World!"

""" 1. Access specific characters"""
first_char = word[0]        # "H"
last_char  = word[-1]       # "!" (Python supports negative indexing natively)
print("Access chars:", first_char, last_char)

""" 2. Substring (slicing) """
sub1 = word[7:12]           # "World"
sub2 = word[7:]             # "World!" (open-ended slice)
sub3 = word[:5]             # "Hello"
sub4 = word[::2]            # every other character
print("Substring:", sub1, sub2, sub3)
print("Every other char:", sub4)

""" 3. Length """
length = len(word)          # 13
print("Length:", length)

""" 4. Concatenation """
greeting = "Hello" + ", " + "Python!"
greeting_join = "".join(["Hello", ", ", "Python!"])  # using join()
print("Concatenation:", greeting)
print("Concatenation (join):", greeting_join)

""" 5. Repeat """
repeated = "ha" * 3         # "hahaha"
print("Repeat:", repeated)

""" 6. Iteration / Traversal """
print("Iteration:")
for char in "abc":
    print(f"  {char}", end=" ")
print()
# With index using enumerate:
for i, char in enumerate("abc"):
    print(f"  index {i}: {char}")

""" 7. Convert to uppercase / lowercase """
upper = word.upper()        # "HELLO, WORLD!"
lower = word.lower()        # "hello, world!"
title = word.title()        # "Hello, World!" (each word capitalized)
swap  = word.swapcase()     # "hELLO, wORLD!"
print("Upper:", upper)
print("Lower:", lower)
print("Title:", title)
print("Swapcase:", swap)

""" 8. Replace """
replaced     = word.replace("World", "Python")         # replaces all occurrences
replaced_cnt = "aabbaa".replace("a", "x", 2)           # replaces only first 2
print("Replace:", replaced)
print("Replace (count=2):", replaced_cnt)

""" 9. Split """
sentence = "one two three"
words    = sentence.split(" ")          # ["one", "two", "three"]
csv_line = "a,b,c".split(",")           # ["a", "b", "c"]
lines    = "line1\nline2\nline3".splitlines()  # splits on newlines
print("Split:", words)
print("Split CSV:", csv_line)
print("Splitlines:", lines)

""" 10. Join """
joined = " - ".join(["one", "two", "three"])   # "one - two - three"
chars  = "".join(["a", "b", "c"])              # "abc"
print("Join:", joined)
print("Join chars:", chars)

""" 11. Interpolation """
name    = "Python"
version = 3.12
f_string    = f"Hello from {name} v{version}!"          # f-string (modern)
format_str  = "Hello from {} v{}!".format(name, version) # .format()
percent_str = "Hello from %s v%.2f!" % (name, version)  # %-formatting (legacy)
print("f-string:", f_string)
print(".format():", format_str)
print("%-format:", percent_str)

""" 12. Validation / Check """
s = "  hello world  "
print("in (contains):",  "hello" in s)           # True
print("startswith:",     s.strip().startswith("h"))  # True
print("endswith:",       s.strip().endswith("d"))    # True
print("find:",           s.find("world"))        # 7  (-1 if not found)
print("index:",          s.index("world"))       # 7  (raises ValueError if not found)
print("count:",          "banana".count("a"))    # 3
print("strip:",          s.strip())              # "hello world"
print("lstrip:",         s.lstrip())
print("rstrip:",         s.rstrip())
print("isdigit:",        "12345".isdigit())      # True
print("isalpha:",        "hello".isalpha())      # True
print("isalnum:",        "hello1".isalnum())     # True
print("isspace:",        "   ".isspace())        # True
print("islower:",        "hello".islower())      # True
print("isupper:",        "HELLO".isupper())      # True
print("istitle:",        "Hello World".istitle()) # True

""" Bonus: padding, encoding, ord/chr """
print("zfill:",      "7".zfill(3))               # "007"
print("ljust:",      "hi".ljust(6, "-"))          # "hi----"
print("rjust:",      "hi".rjust(6, "-"))          # "----hi"
print("center:",     "hi".center(6, "-"))         # "--hi--"
print("ord('A'):",   ord("A"))                    # 65
print("chr(65):",    chr(65))                     # "A"