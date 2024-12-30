// ### Beginner Questions

// 1. **Add Two Numbers**  
//    Write a function `addTwoNumbers(a, b)` that takes two numbers as arguments and returns their sum.  
   
   function addTwoNumbers(a, b) {
       return a + b;
   }
   console.log(addTwoNumbers(3, 5)); // Output: 8
   

// 2. **Check if a Number is Even or Odd**  
//    Write a function `isEven(num)` that checks if a number is even. Return `true` if even, otherwise `false`.  
   
   function isEven(num) {
       return num % 2 === 0;
   }
   console.log(isEven(4)); // Output: true
   console.log(isEven(7)); // Output: false
   

// 3. **Find the Largest Number**  
//    Write a function `findLargest(a, b, c)` that takes three numbers and returns the largest.  
   
   function findLargest(a, b, c) {
       return Math.max(a, b, c);
   }
   console.log(findLargest(3, 7, 5)); // Output: 7
   

// 4. **Reverse a String**  
//    Write a function `reverseString(str)` that reverses a string.  
   
   function reverseString(str) {
       return str.split('').reverse().join('');
   }
   console.log(reverseString("hello")); // Output: "olleh"
   

// ### Medium Questions

// 1. **Check if a String is a Palindrome**  
//    Write a function `isPalindrome(str)` to check if a string is a palindrome (reads the same backward as forward).  
   
   function isPalindrome(str) {
       const reversed = str.split('').reverse().join('');
       return str === reversed;
   }
   console.log(isPalindrome("racecar")); // Output: true
   console.log(isPalindrome("hello"));   // Output: false
   

// 2. **Factorial of a Number**  
//    Write a function `factorial(n)` that calculates the factorial of a number using recursion.  
   
   function factorial(n) {
       if (n === 0 || n === 1) return 1;
       return n * factorial(n - 1);
   }
   console.log(factorial(5)); // Output: 120
   

// 3. **Count Vowels in a String**  
//    Write a function `countVowels(str)` that counts the number of vowels (`a, e, i, o, u`) in a string.  

   function countVowels(str) {
       const vowels = 'aeiouAEIOU';
       return str.split('').filter(char => vowels.includes(char)).length;
   }
   console.log(countVowels("hello world")); // Output: 3
   

// 4. **Fibonacci Sequence**  
//    Write a function `fibonacci(n)` that returns the nth Fibonacci number.  
   
   function fibonacci(n) {
       if (n <= 1) return n;
       return fibonacci(n - 1) + fibonacci(n - 2);
   }
   console.log(fibonacci(6)); // Output: 8

// Let me know if you'd like solutions or explanations for any of these problems!