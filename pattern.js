// Here are some **JavaScript pattern problems** for beginners and intermediate learners. These problems involve printing patterns using loops:

// ---

// ### Beginner Pattern Problems

// 1. **Right-Angled Triangle of Stars**  
   
   function rightAngledTriangle(n) {
       for (let i = 1; i <= n; i++) {
           console.log('*'.repeat(i));
       }
   }
   rightAngledTriangle(5);
   // Output:
   // *
   // **
   // ***
   // ****
   // *****
   

// 2. **Inverted Right-Angled Triangle**  
   
   function invertedTriangle(n) {
       for (let i = n; i >= 1; i--) {
           console.log('*'.repeat(i));
       }
   }
   invertedTriangle(5);
   // Output:
   // *****
   // ****
   // ***
   // **
   // *
   

// 3. **Square of Stars**  
   
   function squarePattern(n) {
       for (let i = 1; i <= n; i++) {
           console.log('*'.repeat(n));
       }
   }
   squarePattern(4);
   // Output:
   // ****
   // ****
   // ****
   // ****
   

// 4. **Hollow Square**  
   
   function hollowSquare(n) {
       for (let i = 1; i <= n; i++) {
           if (i === 1 || i === n) {
               console.log('*'.repeat(n));
           } else {
               console.log('*' + ' '.repeat(n - 2) + '*');
           }
       }
   }
   hollowSquare(5);
   // Output:
   // *****
   // *   *
   // *   *
   // *   *
   // *****
   

// ### Medium Pattern Problems

// 1. **Pyramid Pattern**  
   
   function pyramidPattern(n) {
       for (let i = 1; i <= n; i++) {
           const spaces = ' '.repeat(n - i);
           const stars = '*'.repeat(2 * i - 1);
           console.log(spaces + stars + spaces);
       }
   }
   pyramidPattern(5);
   // Output:
   //     *
   //    ***
   //   *****
   //  *******
   // *********
   

// 2. **Diamond Pattern**  
   
   function diamondPattern(n) {
       // Upper part
       for (let i = 1; i <= n; i++) {
           const spaces = ' '.repeat(n - i);
           const stars = '*'.repeat(2 * i - 1);
           console.log(spaces + stars + spaces);
       }
       // Lower part
       for (let i = n - 1; i >= 1; i--) {
           const spaces = ' '.repeat(n - i);
           const stars = '*'.repeat(2 * i - 1);
           console.log(spaces + stars + spaces);
       }
   }
   diamondPattern(5);
   // Output:
   //     *
   //    ***
   //   *****
   //  *******
   // *********
   //  *******
   //   *****
   //    ***
   //     *
   

// 3. **Number Triangle**  
   
   function numberTriangle(n) {
       for (let i = 1; i <= n; i++) {
           let row = '';
           for (let j = 1; j <= i; j++) {
               row += j + ' ';
           }
           console.log(row.trim());
       }
   }
   numberTriangle(5);
   // Output:
   // 1
   // 1 2
   // 1 2 3
   // 1 2 3 4
   // 1 2 3 4 5
   

// 4. **Pascal's Triangle**  
   
   function pascalTriangle(n) {
       for (let i = 0; i < n; i++) {
           let row = '';
           let num = 1;
           for (let j = 0; j <= i; j++) {
               row += num + ' ';
               num = (num * (i - j)) / (j + 1);
           }
           console.log(row.trim());
       }
   }
   pascalTriangle(5);
   // Output:
   // 1
   // 1 1
   // 1 2 1
   // 1 3 3 1
   // 1 4 6 4 1
   