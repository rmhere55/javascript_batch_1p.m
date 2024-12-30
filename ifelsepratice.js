

// ### **Beginner Questions**
// 1. **Check Even or Odd**
//    - Write a function to check if a number is even or odd.
   
   function checkEvenOdd(num) {
       if (num % 2 === 0) {
           console.log(`${num} is Even`);
       } else {
           console.log(`${num} is Odd`);
       }
   }


// 2. **Positive or Negative**
//    - Write a program to determine if a number is positive, negative, or zero.
   
   function checkNumber(num) {
       if (num > 0) {
           console.log(`${num} is Positive`);
       } else if (num < 0) {
           console.log(`${num} is Negative`);
       } else {
           console.log(`${num} is Zero`);
       }
   }
   

// 3. **Voting Eligibility**
//    - Write a program to check if a person is eligible to vote (age >= 18).
   
   function checkVotingEligibility(age) {
       if (age >= 18) {
           console.log("You are eligible to vote!");
       } else {
           console.log("You are not eligible to vote.");
       }
   }
   



// ### **Intermediate Questions**
// 4. **Check Largest of Two Numbers**
//    - Write a program to find the larger of two numbers.
   
   function findLargest(num1, num2) {
       if (num1 > num2) {
           console.log(`${num1} is larger`);
       } else if (num2 > num1) {
           console.log(`${num2} is larger`);
       } else {
           console.log("Both numbers are equal");
       }
   }
   

// 5. **Grade Calculator**
//    - Write a program that assigns grades based on marks.
//      - Marks >= 90: Grade A
//      - Marks >= 80: Grade B
//      - Marks >= 70: Grade C
//      - Marks >= 60: Grade D
//      - Else: Fail
   
   function calculateGrade(marks) {
       if (marks >= 90) {
           console.log("Grade: A");
       } else if (marks >= 80) {
           console.log("Grade: B");
       } else if (marks >= 70) {
           console.log("Grade: C");
       } else if (marks >= 60) {
           console.log("Grade: D");
       } else {
           console.log("Fail");
       }
   }
   

// 6. **Leap Year Checker**
//    - Write a program to check if a given year is a leap year or not.
   
   function isLeapYear(year) {
       if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
           console.log(`${year} is a Leap Year`);
       } else {
           console.log(`${year} is not a Leap Year`);
       }
   }
   



// ### **Advanced Questions**
// 7. **Check Triangle Type**
//    - Write a program to check if a triangle is scalene, isosceles, or equilateral based on its sides.
   
   function checkTriangle(a, b, c) {
       if (a === b && b === c) {
           console.log("Equilateral Triangle");
       } else if (a === b || b === c || a === c) {
           console.log("Isosceles Triangle");
       } else {
           console.log("Scalene Triangle");
       }
   }
   

// 8. **FizzBuzz**
//    - Write a program to print "Fizz" if a number is divisible by 3, "Buzz" if divisible by 5, and "FizzBuzz" if divisible by both.
   function fizzBuzz(num) {
       if (num % 3 === 0 && num % 5 === 0) {
           console.log("FizzBuzz");
       } else if (num % 3 === 0) {
           console.log("Fizz");
       } else if (num % 5 === 0) {
           console.log("Buzz");
       } else {
           console.log(num);
       }
   }

// 9. **Password Validator**
//    - Write a program to check if a password meets the following criteria:
//      - Minimum 8 characters.
//      - Contains at least one uppercase letter.
//      - Contains at least one digit.
   
   function validatePassword(password) {
       if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
           console.log("Valid Password");
       } else {
           console.log("Invalid Password");
       }
   }
   

// 10. **Traffic Light Simulator**
//     - Write a program to simulate a traffic light based on the color:
//       - Green: "Go"
//       - Yellow: "Slow Down"
//       - Red: "Stop"
    
    function trafficLight(color) {
        if (color === "Green") {
            console.log("Go");
        } else if (color === "Yellow") {
            console.log("Slow Down");
        } else if (color === "Red") {
            console.log("Stop");
        } else {
            console.log("Invalid Color");
        }
    }
    