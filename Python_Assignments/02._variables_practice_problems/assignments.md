# Practice Problems

## A. Basic Understanding (Skip These)

### 1.
What is a variable?

### 2.
Why are variables useful in programming?

### 3.
What is assignment?

### 4.
What does the following statement do?

```python
age = 18
```

### 5.
Explain the difference between a variable and its value.

### 6.
What is reassignment?

### 7.
What happens to the current value of a variable when a new value is assigned to it?

### 8.
What does it mean that Python variable names are case-sensitive?

### 9.
What is a naming convention?

### 10.
What is `snake_case`?

---

## B. Variable Naming Practice (Skip These)

### 11.
Which of the following are valid variable names?

```text
name
student_name
1student
student1
student name
_total
```

Explain your answers.

### 12.
Correct the invalid variable names:

```text
1name
student name
college-name
2student_age
```

### 13.
Why is `student_name` generally better than `studentname` for readability?

### 14.
Why is `student_name` generally better than `x` when storing a student's name?

### 15.
Are these names different in Python?

```text
age
Age
AGE
```

Explain.

### 16.
Identify the naming convention used in:

```python
total_marks
student_name
phone_number
```

### 17.
Write suitable variable names for:

- Student's name
- Student's age
- Student's city
- Total marks
- College name

Use Python's common naming convention.

---

## C. Code Understanding

### 18.
What values will the following variables refer to?

```python
name = "Rahul"
age = 18
city = "Patna"
```

Write your answer in this form:

```text
name → ?
age → ?
city → ?
```

### 19.
What is the final value of `age`?

```python
age = 18
age = 19
```

Explain why.

### 20.
What is the final value of `name`?

```python
name = "Rahul"
name = "Amit"
name = "Riya"
```

### 21.
Explain what happens in this program:

```python
student_name = "Rahul"
student_age = 18

student_age = 19
```

### 22.
What values will `a`, `b`, and `c` refer to?

```python
a, b, c = 10, 20, 30
```

### 23.
What values will `x`, `y`, and `z` refer to?

```python
x = y = z = 100
```

---

## D. Practical Problems

### 24.
Create variables for the following information:

- Your name
- Your age
- Your city

Use meaningful variable names.

### 25.
Create variables for:

- Student name
- Student roll number
- Student branch

Follow Python's recommended naming convention.

### 26.
Write a program that assigns a value to a variable called `marks`, then reassigns a new value to `marks`.

Explain the value before and after reassignment.

### 27.
Use multiple assignment to create the following variables in one statement:

```text
name → "Rahul"
age → 18
city → "Patna"
```

### 28.
Use one statement to assign the value `0` to three variables:

```text
x
y
z
```

### 29.
The following code contains invalid variable names:

```python
1student = "Rahul"
student name = "Rahul"
class = "B.Tech"
```

Rewrite all three using valid and meaningful variable names.

### 30.
Create a small Python program that stores a student's name and age, reassigns the age to a new value, and then displays the current values. Use:
- A useful comment
- Meaningful variable names
- `snake_case`
- Reassignment


##**Answers**##------------------------------

1. 1.

A variable is a name used to store or refer to a value in a program.

2.

Variables are useful because they allow us to store, access, and change data while a program is running.

3.

Assignment means giving a value to a variable using the = operator.

5.

A variable is the name used to refer to data, while its value is the actual data stored or referred to by that variable.

6.

Reassignment means giving a new value to a variable that already has a value.

7.

When a new value is assigned to a variable, the variable refers to the new value, replacing its previous value.

8.

Python variable names are case-sensitive, meaning uppercase and lowercase letters are treated as different.

For example, age, Age, and AGE are three different variable names.

9.

A naming convention is a set of commonly followed rules for naming variables, functions, classes, and other elements in a program.

10.

snake_case is a naming style where words are written in lowercase and separated by underscores.

Example:

student_name
total_marks
phone_number
13.

student_name is generally better than studentname because the underscore clearly separates the words, making the name easier to read.

14.

student_name is better than x because it clearly describes what the variable contains, making the code easier to understand.

15.

Yes. age, Age, and AGE are different names in Python because Python is case-sensitive.

16.

The naming convention used is snake_case.

19.

The final value of age is 19.

The variable is first assigned 18 and then reassigned the value 19.

21.

Initially, student_name refers to "Rahul" and student_age refers to 18. Then student_age is reassigned to 19, so its final value is 19. The value of student_name remains "Rahul".
