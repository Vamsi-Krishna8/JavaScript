/*
    FILTER FUNCTION 
        => Filter is also a higher order function
        => Filter also loops over the array element
        => There is one special thing about filter , i.e the argument function f which we have to pass inside the filter
            should always return a boolean,otherwise output will be converted to a boolean 
        => Filter loops over every element, passes that element in the argument function and then if the output of this
            function call is true, then it stores the original element in a new array otherwise doesn't add element to the array
*/

function isEven(x) {
  return x % 2 == 0;
}

let arr = [1, 2, 3, 4, 5];
const res = arr.filter(isEven);
console.log(res);
