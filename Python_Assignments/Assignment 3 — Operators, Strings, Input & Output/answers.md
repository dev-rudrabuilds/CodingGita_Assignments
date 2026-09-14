Q1.
True
False
False
True
True
False

Q2.
True
False
False
True
True

Q3.
True
False
False
True

Q4.
True
False
True

Q5.
x = 30
x = 25
x = 50
x = 10
Final value = 10

Q6.
marks = 50
marks += 10
marks -= 5
marks *= 2
print(marks)

Output:
110

Q7.
True
False
False

Q8.
word = "computer"

print("p" in word)
print("x" in word)
print("c" not in word)

Q9.
True
False
True
False

Q10.
text = input()
print("a" in text)

Q11.
email = input()
print("@" in email)

Q12.
A = 65
a = 97
Z = 90
z = 122
0 = 48
9 = 57
@ = 64

Q13.
65 = A
66 = B
97 = a
98 = b
48 = 0
57 = 9
64 = @

Q14.
1. ord("a")
2. 32
3. Yes

Q15.
char = input()
print(ord(char))

Q16.
char = input()
print(chr(ord(char) + 1))

Q17.
True
True
True
True

ord("A") = 65
ord("B") = 66
ord("a") = 97
ord("b") = 98
ord("0") = 48
ord("9") = 57

Q18.
print(chr(9731))
print(chr(9829))
print(chr(8377))

Output:
☃
♥
₹

ord("☃") = 9731
ord("♥") = 9829
ord("₹") = 8377

Q19.
text = "PYTHON"

print(text[0])
print(text[1])
print(text[-1])
print(text[-2])

Q20.
text = "COMPUTER"

print(text[0])
print(text[3])
print(text[-1])
print(text[-3])

Output:
C
P
R
E

Q21.
P
T
N
O

Q22.
word = input()

print(word[0])
print(word[-1])

Q23.
word[0] = P
word[2] = O
word[-1] = M
word[-4] = G

Q24.
PYT
THO
YTHON

Q25.
PROG
RAMMING
PROGRAMMING

Q26.
PUTER
COMPU
OMPU

Q27.
PTO
YHN
NOHTYP

Q28.
text = input()
print(text[::-1])

Q29.
text = input()
print(text[::2])

Q30.
text = input()

print(text[:3])
print(text[-3:])

Q31.
text[2:8:2] = CEG
start = 2
stop = 8
step = 2

text[8:2:-2] = IGEC
start = 8
stop = 2
step = -2

text[::-2] = JHFDB
start = None
stop = None
step = -2

Q32.
text = "BTECH-CSE-2026"

print(text[:5])
print(text[6:9])
print(text[10:])

Q33.
['Python', 'is', 'easy']

Words are separated by spaces/whitespace.

Q34.
['apple', 'banana', 'mango']

Q35.
['Python is easy']

Q36.
words = input().split()

print(words[0])
print(words[1])
print(words[2])

Q37.
first_name, last_name = input().split()

print("First Name:", first_name)
print("Last Name:", last_name)

Q38.
a, b, c = map(int, input().split())
print(a + b + c)

Q39.
name, age, course, city = input().split(",")

print("Name:", name)
print("Age:", age)
print("Course:", course)
print("City:", city)

Q40.
email = input()

username, domain = email.split("@")

print("Username:", username)
print("Domain:", domain)

Q41.
sentence = input()
words = sentence.split()

print("First word:", words[0])
print("Last word:", words[-1])
print("Total words:", len(words))

Q42.
print("Hello\nWorld")

Q43.
print("Name:\tRahul")
print("Age:\t20")
print("City:\tAhmedabad")

Q44.
print("C:\\Python\\Programs")

Q45.
print("It's Python")

Q46.
print('He said "Hello"')

Q47.
Python
Programming

Q48.
print("Student Details\n")
print("Name:\tRahul")
print("Age:\t20")
print("Course:\tB.Tech")

Q49.
2026-09-09

Q50.
Hello Python

Q51.
print(10, 20, 30, sep="-", end="\n")
print(40, 50, 60, sep="-")

Q52.
name = input()
age = input()
city = input()
course = input()

print(f"Name: {name}")
print(f"Age: {age}")
print(f"City: {city}")
print(f"Course: {course}")

Q53.
price = float(input())
print(f"{price:.2f}")

Q54.
age = int(input("Enter age: "))
print("Age after 5 years:", age + 5)

Q55.
print("It's Python")

Q56.
text = "Python"
print(text[1:4])

Q57.
a, b = input().split()

Q58.
1020

a, b = input().split()
print(int(a) + int(b))

Output:
30

Q59.
print("C:\\new\\test")

Q60.
name = input()
marks = list(map(int, input().split()))

total = marks[0] + marks[1] + marks[2]
average = total / 3

print(f"Name: {name}")
print(f"Total: {total}")
print(f"Average: {average:.2f}")

Q61.
student_id = input()

parts = student_id.split("-")

degree = parts[0]
batch = parts[1]
branch = parts[2]
roll_number = parts[3]

last_three = student_id[-3:]
roll = int(roll_number)

print(f"Degree: {degree}")
print(f"Batch: {batch}")
print(f"Branch: {branch}")
print(f"Roll Number: {roll_number}")
print(f"Last Three: {last_three}")
print(f"Roll: {roll}")

Q62.
name = input()
words = name.split()

username = words[0].lower() + "." + words[2].lower()

print(username)

Q63.
sentence = input()
words = sentence.split()

print(f"First word: {words[0]}")
print(f"Last word: {words[-1]}")
print(f"Number of words: {len(words)}")

Q64.
email = input()

print(f"@ Present: {'@' in email}")

username, domain = email.split("@")

print(f"Username: {username}")
print(f"Domain: {domain}")

Q65.
char = input()

code = ord(char)
previous = chr(code - 1)
next_char = chr(code + 1)

print(f"Character: {char}")
print(f"Code: {code}")
print(f"Previous: {previous}")
print(f"Next: {next_char}")

Q66.
product = input()
price = float(input())
quantity = int(input())
discount_percentage = float(input())

subtotal = price * quantity
discount = subtotal * discount_percentage / 100
final_total = subtotal - discount

print(f"Product: {product}")
print(f"Price: {price:.2f}")
print(f"Quantity: {quantity}")
print(f"Subtotal: {subtotal:.2f}")
print(f"Discount: {discount:.2f}")
print(f"Final Total: {final_total:.2f}")

Q67.
date = input()

day, month, year = date.split("-")

print(f"Day: {day}")
print(f"Month: {month}")
print(f"Year: {year}")
print(f"Year using slicing: {date[-4:]}")

Q68.
text = input()
words = text.split()

first_word = words[0]
second_word = words[1]

print(f"First Word: {first_word}")
print(f"Second Word: {second_word}")
print(f"First Word Reversed: {first_word[::-1]}")
print(f"Second Word Reversed: {second_word[::-1]}")

Q69.
student_code = input()

parts = student_code.split("-")

degree = parts[0]
batch = parts[1]
branch = parts[2]
roll = parts[3]

code = f"{degree}/{branch}/{roll}"

print(f"Degree: {degree}")
print(f"Batch: {batch}")
print(f"Branch: {branch}")
print(f"Roll: {roll}")
print(f"Code: {code}")

Q70.
full_name = input()

words = full_name.split()

first_name = words[0]
last_name = words[-1]

first_upper = first_name[:3].upper()
last_lower = last_name[-3:].lower()
reversed_name = full_name[::-1]

print(f"Original: {full_name}")
print(f"First Name: {first_name}")
print(f"Last Name: {last_name}")
print(f"First Name (Upper Part): {first_upper}")
print(f"Last Name (Lower Part): {last_lower}")
print(f"Full Name Reversed: {reversed_name}")
