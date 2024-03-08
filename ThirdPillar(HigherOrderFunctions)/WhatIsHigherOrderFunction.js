//higher order function => There are functions which take another functions as arguments these are called higher order functions

function f(x,fn){
    /*
        x->number
        fn->function
    */
   console.log(x);
   console.log(fn); //here it is not calling the function we are just printing the variable which is technically carrying the function
   fn();
}

f(10,function exce(){
    console.log("I am an expression passed to a HOF");
})