/* REDUCE FUNCTION 

    => Reduce is a higher order function available for arrays
    => reduce also takes a function f as an argument
    => What reduce does is,it one by one goes to every element of the array, and will pass this element to the function f,
        and accumulate the result of further function calls with this particular result.
*/

const arr=[1,2,3,4,5];

function fun(prevResult,currElement){
    return prevResult+currElement;
}

const res=arr.reduce(fun);
console.log(res);

//Example

function addPrices(prevResult,currElement){
    let newPrice=prevResult.price+currElement.price;
    return {price:newPrice};
}

let cart=[{price:100000, name: "Iphone"}, {price:500, name: "backcover"}, {price:300, name: "tempered glass"}];
const totalPrice=cart.reduce(addPrices);
console.log(totalPrice.price);