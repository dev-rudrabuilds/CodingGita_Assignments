## Part C] Relational Operator

### 5. Greater Than `>`

**1.**
```javascript
let studentMarks = 78;
let passingMarks = 40;
console.log(studentMarks > passingMarks);
```

**2.**
```javascript
let todaysTemperature = 35;
let yesterdaysTemperature = 28;
console.log(todaysTemperature > yesterdaysTemperature);
```

**3.**
```javascript
console.log(15 > 10);
console.log(10 > 15);
console.log(10 > 10);
```

**4.**
```javascript
console.log("20" > 15);
console.log("5" > "10");
console.log("abc" > 10);
```

**5.**
```javascript
console.log(null > 0);       // false
console.log(undefined > 0);  // false
```
`null` converts to `0`, so it is not greater than `0`. `undefined` converts to `NaN`, and comparisons with `NaN` return `false`.

**6.**
```javascript
let availableStock = 120;
let requiredItems = 85;
console.log(availableStock > requiredItems);
```

**7.**
```javascript
console.log(true > false);  // true
console.log("10" > "2");    // false
console.log(NaN > 5);       // false
```
`true` becomes `1` and `false` becomes `0`. Strings are compared character by character when both operands are strings. Comparisons involving `NaN` return `false`.

### 6. Less Than `<`

**1.**
```javascript
let maximumWeight = 50;
let currentWeight = 42;
console.log(currentWeight < maximumWeight);
```

**2.**
```javascript
let personAge = 16;
let minimumAge = 18;
console.log(personAge < minimumAge);
```

**3.**
```javascript
console.log(8 < 12);
console.log(20 < 10);
console.log(7 < 7);
```

**4.**
```javascript
console.log("8" < 10);
console.log("20" < "3");
console.log("hello" < 5);
```

**5.**
```javascript
console.log(null < 0);       // false
console.log(undefined < 0);  // false
```
`null` converts to `0`, so it is not less than `0`. `undefined` converts to `NaN`, making the comparison false.

**6.**
```javascript
let tankCapacity = 500;
let currentWater = 375;
console.log(currentWater < tankCapacity);
```

**7.**
```javascript
console.log(false < true);  // true
console.log("5" < "15");    // false
console.log(NaN < 10);      // false
```
`false` becomes `0` and `true` becomes `1`. The strings are compared lexicographically. Any comparison involving `NaN` returns `false`.

### 7. Greater Than or Equal To `>=`

**1.**
```javascript
let studentScore = 75;
let distinctionMarks = 75;
console.log(studentScore >= distinctionMarks);
```

**2.**
```javascript
let availableMoney = 300;
let ticketPrice = 300;
console.log(availableMoney >= ticketPrice);
```

**3.**
```javascript
console.log(25 >= 25);
console.log(30 >= 25);
console.log(20 >= 25);
```

**4.**
```javascript
console.log("25" >= 25);
console.log("10" >= "2");
console.log(null >= 0);
```

**5.**
```javascript
console.log(undefined >= 0);  // false
```
`undefined` converts to `NaN` during numeric comparison. Therefore, the result is `false`.

**6.**
```javascript
let liftCapacity = 8;
let peopleInside = 8;
console.log(peopleInside >= liftCapacity);
```

**7.**
```javascript
console.log(true >= 1);    // true
console.log("" >= 0);      // true
console.log(NaN >= NaN);   // false
```
`true` becomes `1`, and an empty string becomes `0`. Comparisons involving `NaN` return `false`.

### 8. Less Than or Equal To `<=`

**1.**
```javascript
let vehicleSpeed = 60;
let speedLimit = 60;
console.log(vehicleSpeed <= speedLimit);
```

**2.**
```javascript
let marksObtained = 39;
let requiredMarks = 40;
console.log(marksObtained < requiredMarks);
```

**3.**
```javascript
console.log(15 <= 20);
console.log(20 <= 15);
console.log(15 <= 15);
```

**4.**
```javascript
console.log("15" <= 20);
console.log("30" <= "5");
console.log(null <= 0);
```

**5.**
```javascript
console.log(undefined <= 0);  // false
```
`undefined` converts to `NaN`, so the comparison returns `false`.

**6.**
```javascript
let maximumBooks = 10;
let booksInBag = 10;
console.log(booksInBag < maximumBooks);
```
The result is `false` because the bag has reached its maximum capacity, so no additional books can be added.

**7.**
```javascript
console.log(false <= 0);  // true
console.log("" <= 0);     // true
console.log(NaN <= 5);    // false
```
`false` and an empty string both convert to `0`. Comparisons involving `NaN` return `false`.

### Mixed Practice

**1.**
```javascript
let age = 18;
let votingAge = 18;
console.log(age >= votingAge);

let temperature = 32;
console.log(temperature < 35);

let score = 90;
console.log(score > 85);
```

**2.**
```javascript
console.log(10 > 5 && 5 < 10);
console.log("10" >= 10);
console.log(null <= undefined);
console.log("5" < "10" && 5 > 2);
```

**3.**
```javascript
let productPrice = 499;
let customerMoney = 500;

console.log(customerMoney >= productPrice);

let changeLeft = customerMoney - productPrice;
console.log(changeLeft < customerMoney);
console.log("Change left: Rs. " + changeLeft);
```

**4.**
```javascript
console.log("10" > "2");  // false
console.log(10 > 2);      // true
```
When both values are strings, JavaScript compares their characters from left to right. Since the first character `"1"` comes before `"2"`, `"10" > "2"` is `false`. When both values are numbers, JavaScript compares their numerical values, so `10 > 2` is `true`.
