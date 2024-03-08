/*  
    arrays are also custom objects in JS 
    index of the element is the key and element it self is the value
    ["abc","def","ghi"]=> {0:"abc",1:"def",2:"ghi"}
*/

/*
    map => is an higher order function available with arrays
    =>It takes a functions as an argument => f
    =>it returns an array in which every value is actually populated by calling function f with 
        original array elements as arguments
    => Map internally iterates/loops over every element of the given original array and pass that element in the argument function f
        and then store the returned value inside an array
*/

// passing a function ( just give the name of the function) ==> f
//calling a function f()
//example arr.map(square) this is passing a function and "square()" this is calling a function 

function square(ele){
    return ele*ele; //returns square of the number
}

function cube(ele){
    return ele*ele*ele;
}

function isEven(x){
    return x%2==0 ? "Even" : "Odd";
}

const arr=[1,2,3,4,5];
const res=arr.map(square); //square is the function passed as an argument
console.log(res);

const cubeRes=arr.map(cube);
console.log(cubeRes);

const isEvenRes=arr.map(isEven);
console.log(isEvenRes);