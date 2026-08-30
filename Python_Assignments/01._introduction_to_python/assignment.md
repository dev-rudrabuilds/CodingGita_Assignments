# Practice Problems

## A. Basic Understanding (Skip These)

### 1.
What is Python?

### 2.
Why is Python considered beginner-friendly?

### 3.
Write any five areas where Python is used.

### 4.
What is a Python interpreter?

### 5.
What is the difference between Python and the Python interpreter?

### 6.
What is a Python source file?

### 7.
What file extension is commonly used for Python source files?

### 8.
What is meant by Python execution?

### 9.
What is a comment?

### 10.
Why are comments used in programs?

---

## B. Concept-Based Questions (Skip These)

### 11.
Explain the simplified Python execution model in your own words.

### 12.
What is syntax in a programming language?

### 13.
Why is syntax important when writing Python programs?

### 14.
What does it mean when we say that Python is case-sensitive?

### 15.
Are `student_name`, `Student_Name`, and `STUDENT_NAME` the same name in Python? Explain.

### 16.
What is code readability?

### 17.
Why should programmers write readable code?

### 18.
What is a naming convention?

### 19.
What is `snake_case`? Give three examples.

### 20.
What naming style is commonly used for class names in Python?

---

## C. Code Understanding

### 21.
Identify the comment in the following code:

```python
# Display a message
print("Hello")
```

### 22.
What is the purpose of the following comment?

```python
# Store the student's name
student_name = "Rahul"
```

### 23.
Which of the following names is easier to understand for storing a student's name?

```text
x
student_name
a
```

Explain your answer.

### 24.
Identify which names are written in `snake_case`:

```text
student_name
StudentName
total_marks
TOTAL_MARKS
```

### 25.
Which of the following is a commonly used class naming style?

```text
student_record
StudentRecord
STUDENT_RECORD
```

### 26.
Consider:

```python
name = "Rahul"
Name = "Amit"
```

Are `name` and `Name` treated as the same name in Python? Explain why.

### 27.
What is wrong with using names such as `x`, `y`, and `z` everywhere in a large program? Is using short names always wrong?

---

## D. Practical Problems

### 28.
Create a Python file named:

```text
welcome.py
```

Write a small program that displays a welcome message. Add one useful comment describing the purpose of the program.

### 29.
Create a Python file named:

```text
student.py
```

Write a small program containing a student's name and age. Use meaningful names and add a useful comment.

### 30.
Create a Python file named:

```text
about_python.py
```

Write a small Python program that contains a comment explaining what Python is and displays a short message about learning Python.



##**Answers**##-----------

1. Python is a high-level, interpreted programming language. It is easy to read and write and is used for developing different types of applications.

2. Python is beginner-friendly because its syntax is simple and easy to understand. It uses fewer complicated symbols and allows beginners to write programs with less code.

3. a)Web development
  b)Data Science
  c)Artificial Intelligence and Machine Learning
  d)Automation and scripting
  e)Game development

4. A Python interpreter is a program that reads and executes Python code. It takes the Python instructions and runs them so that we can see the output.

5. Python is the programming language used to write programs, while the Python interpreter is the software that executes those Python programs.
   For example, we write code using Python, and the interpreter runs that code.

6. A Python source file is a file that contains Python program code written by a programmer.
Example: program.py

7. The commonly used file extension for Python source files is: .py
For example: hello.py

8. Python execution means running a Python program so that the instructions written in the program are processed and the required output is produced.

9. A comment is text written inside a program to explain the code. Python ignores comments while executing the program.
A comment usually starts with #.
Example: This is a comment , print("Hello")

10.Comments are used to explain what the code does. They make programs easier to understand, especially when the code is large or when multiple programmers are working on it.

11. First, the programmer writes Python code in a source file. When the program is run, the Python interpreter reads the code and executes the instructions. If there is an error in the code, Python shows an error message.
A simple model is: Python Source Code --> Python Interpreter --> Program Execution --> Output

12. Syntax means the rules for writing code correctly in a programming language.
For example, Python uses a specific syntax for creating variables, functions, conditions, loops, etc.

13. Syntax is important because Python needs the code to follow its rules. If the syntax is incorrect, Python cannot properly understand or execute the program and usually gives an error.

14. Case-sensitive means that Python treats uppercase and lowercase letters as different
for example: name = "Rahul"
             Name = "Amit"

15. no they are not same.
name = "Rahul"
Name = "Amit"

16. Code readability means how easy it is for a person to understand and follow the code.

For example, this is more readable because student_name clearly explains what the variable contains:
student_name = "Rahul"
x = "Rahul"

17. Programmers should write readable code because it makes the program easier to:
Understand
Debug
Modify
Maintain
Share with other programmers

18. A naming convention is a set of rules or commonly followed practices for giving names to variables, functions, classes, and other elements in a program.

19. snake_case is a naming style where words are written in lowercase and separated using underscores (_).
Examples: student_name
total_marks
first_name

20. PascalCase is commonly used for class names in Python.
Examples:
        StudentRecord
        BankAccount
        EmployeeDetails

21. # Display a message

22. The comment explains that student_name is used to store the student's name.

23. student_name. It is easier to understand because the name clearly tells us what the variable stores.

24. student_name
    total_marks

25. StudentRecord

26. No. name and Name are different because Python is case-sensitive.

27. Using x, y, and z everywhere can make a large program difficult to understand because their purpose is not clear. Short names are not always wrong; they can be useful in simple calculations or short programs.

28. welcome.py
    # Display a welcome message to the user
      print("Welcome to Python programming!")

29. student.py
    # Store and display basic student information
student_name = "Rahul"
student_age = 18

print("Student Name:", student_name)
print("Student Age:", student_age)

30. about_python.py
    # Python is a simple and powerful programming language
      print("I am learning Python and enjoying programming!")
