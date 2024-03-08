/*  When to use maps ? 
    => In any sitaution when we have to do an operation on every element of the array and store
       the result of each operation map can be a good option
*/

const arr=[1,2,3,4,5];
function print(ele,idx){
    return `Element at index ${idx} is ${ele}`;
}

const res=arr.map(print);
console.log(res);  

//Custom mapper

function customMapper(arr,func){
    let res=[];
    for(let i=0;i<arr.length;i++){
        res.push(func(arr[i],i))
    }
    return res;
}

const value=customMapper(arr,print);
console.log(value);