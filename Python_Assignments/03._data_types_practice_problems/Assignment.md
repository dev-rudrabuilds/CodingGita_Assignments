# Practice Problems

## A. Basic Understanding (Skip These)

### 1.
What is a data type?

### 2.
Why are data types important in programming?

### 3.
What is an integer?

### 4.
What is a floating-point number?

### 5.
What is a string?

### 6.
What is a Boolean value?

### 7.
What does `None` represent in Python?

### 8.
What is the purpose of the `type()` function?

### 9.
What is basic type identification?

### 10.
Name the five basic types covered in this topic.

---

## B. Identify the Data Type (Skip These)

### 11.
Identify the type of each value:

```text
25
5.5
"Python"
True
None
```

### 12.
Identify the type of each value:

```text
0
-10
99.99
"99.99"
False
```

### 13.
What is the difference between:

```text
10
10.0
"10"
```

### 14.
What is the difference between:

```text
True
"True"
```

### 15.
What is the difference between:

```text
None
"None"
```

### 16.
Identify the type of each variable:

```python
age = 18
height = 5.8
name = "Rahul"
is_student = True
result = None
```

### 17.
Identify the type of each variable:

```python
a = 100
b = 100.0
c = "100"
d = False
e = None
```

---

## C. `type()` Practice

### 18.
What will `type()` identify for the following?

```python
x = 25
print(type(x))
```

### 19.
What will `type()` identify for:

```python
price = 99.50
print(type(price))
```

### 20.
What will `type()` identify for:

```python
name = "Python"
print(type(name))
```

### 21.
What will `type()` identify for:

```python
is_active = True
print(type(is_active))
```

### 22.
What will `type()` identify for:

```python
data = None
print(type(data))
```

### 23.
Write a Python program that creates one variable of each of the five basic types covered in this topic and uses `type()` to identify each one.

---

## D. Practical Problems

### 24.
Create variables for the following information using appropriate values:

- Student name
- Student age
- Student height
- Whether the person is a student
- Student result, where no result is currently available

Then identify the type of each variable.

### 25.
Create three variables:

```text
a → 50
b → 50.0
c → "50"
```

Use `type()` to identify the type of each variable.

### 26.
Create two variables:

```text
a → True
b → "True"
```

Use `type()` and explain why their types are different.

### 27.
Create two variables:

```text
a → None
b → "None"
```

Use `type()` and explain the difference.

### 28.
Create a variable called `value`.

1. First assign an integer to it.
2. Use `type()` to identify its type.
3. Reassign a string to it.
4. Use `type()` again.
5. Explain what changed.

### 29.
Create a small Python program that stores information about a product:

- Product name as a string
- Product quantity as an integer
- Product price as a floating-point number
- Whether the product is available as a Boolean
- Product discount information as `None`

Use `type()` to identify every value.

### 30.
Create a small program that demonstrates the difference between:

```text
10
10.0
"10"
True
"True"
None
"None"
-------------------------------------------

##**Answers**##-------------

1.

A data type tells Python what kind of value a variable contains, such as an integer, string, or Boolean.

2.

Data types are important because they help Python understand what operations can be performed on a value and how that value should be handled.

3.

An integer is a whole number without a decimal point. It can be positive, negative, or zero.

Examples: 10, -5, 0

4.

A floating-point number is a number that contains a decimal point.

Examples: 5.5, 10.0, -2.75

5.

A string is a sequence of characters enclosed in quotes. It is used to store text.

Example:

"Hello"
"Python"
"Rahul"
6.

A Boolean value represents one of two possible values: True or False. It is commonly used for conditions and decisions.

7.

None represents the absence of a value or that a value is currently not available.

8.

The type() function is used to identify the data type of a value or variable.

9.

Basic type identification means determining what data type a particular value belongs to, such as int, float, str, bool, or NoneType.

10.

The five basic types are:

Integer (int)
Floating-point number (float)
String (str)
Boolean (bool)
None (NoneType)
13.

10 is an integer, 10.0 is a floating-point number, and "10" is a string because it is written inside quotes.

14.

True is a Boolean value, while "True" is a string because it is enclosed in quotes.

15.

None represents the absence of a value and has the type NoneType, while "None" is a string containing the text None.

18.

type(x) identifies x as an integer (int).

19.

type(price) identifies price as a floating-point number (float).

20.

type(name) identifies name as a string (str).

21.

type(is_active) identifies is_active as a Boolean (bool).

22.

type(data) identifies data as NoneType.

26.

True is a Boolean (bool), while "True" is a string (str). The types are different because "True" is enclosed in quotation marks.

27.

None has the type NoneType, while "None" has the type str. The first represents no value, while the second is text.

28.

Initially, value has the type int. After reassigning a string to it, its type becomes str. The data type changes because the value stored in the variable has changed.
```

Use `type()` for every value and write the identified type beside each one in your explanation.
