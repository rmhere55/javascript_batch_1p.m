// // function  
// //  normal function 
// //  function hy (){
// //     return console.log(" hy");
    
// //  }

// //  hy()

// // callback  function 

// function print (ans){
//     console.log(ans)
// }
// function add(a,b){
//     print(a+b)
// }
// add(5,6)

// // rest 

// function calcuatePrice(val, val2, ...num1){
//     return num1
// }
// console.log(calcuatePrice(1,2,3,4,5))
//  let x = Symbol("foo")
//  console.log("x======", typeof(x))
// const user ={
//     name : "rm",
//     price : 199,
//     [x] : "y"
// }

// console.log(typeof(user[x]))
// Object.freeze(user)
// user.gretting = function(){
//     console.log(`hello ${this.name}`)
// }

// function handleObject(anyobject){
//     console.log(`${anyobject.name} and price ${anyobject.price}`)
// }
// // handleObject(user)

// handleObject({
    
//     name : "rm",
//     price : 199
// })




// const myarr = [100, 2000, 3000]

// function returvalue(getArry){
//     return getArry[1]
// }
// console.log(returvalue(myarr))


// ... sapreter  opretor  

// rest op
//  function calcuateprice(val, val2 ,...num1){
//   return num1
//  }

//  console.log(calcuateprice(1,2,3,4))
//  const sym = Symbol("key1")
// const Object1 = {
//     name : "rm",
//     price : 199,
//     [sym] : "kyy"

// }
// console.log( Object1[sym])

// Object.freeze(Object1)
// Object1.name = "laptop"
// console.log(Object1.name)


//  function obj(obj1){
//     return obj1
//  }
// //  console.log(obj
// //     (Object1
// // ))
// rest opr.
// ... 

// function obj(...get){
//     return get
// }



// console.log( obj(1,2,3,3,4))


// console.log(arry([1,2,3,4,5]))



// rest & Spread syntax  (...)


// let arr = [1,2,34]
// let arr1 = [...arr]
// let obj1 = { kye : "value"}
// let obj2 = {...obj1}

// rest 
// function rest(...a){
//     return a
// }
// console.log(rest(1,2,3,4,5))

// ``
// closer 

function  add (){
    var a = 10;
    console.log( function ad(){
        console.log( a+10)
    })
}
// console.log(add())

// first class function 
var a = function(){
    console.log("hello")
}
function abch(){

    a()
}
abch()  // 1st class function  


// constructor function 
function person(name,age){
    this.name = name
    this.age = age
    }
    var p = new person("sachin",25)
    console.log(p.name,p.age)  // constructor function



    // prototype
    var obj = {
        name : "sachin",
        age : 25,

    }

    console.log(obj.name,obj.age)  // prototype
    

    // call apply bind 
    function abcd(val ,b,c){
        console.log(this ,val ,b,c)
    }
    var obj1 = {
        age :"24"
    }

    // abcd.call(obj1 , 1,2);

    // apply
    abcd.apply(obj1 , [1,2,3])
    // bind

    function bid(){
        console.log(this)
    }
    var obj2 = {
        name : "sachin"
    }
    var bound = bid.bind(obj2)
    bound()  // call bind


    // pure function inpure function
    function pure(a,b){
        return a+b

    }
    function impure(a,b){
        a = a + 1
        b = b + 1
        return a+b

    }
    console.log(pure(1,2))  // pure function

    console.log(impure(1,2))  // impure function


    try {
        throw new TypeError("oops");
      } catch ({ name, message }) {
        console.log(name); // "TypeError"
        console.log(message); // "oops"
      }
      