const arr=[1,2,3,14,15,16,17,1,1,100,2,1000];

//arr.sort() in javascript gives lexicographical sorting and not increasing order sorting
arr.sort();
console.log(arr);

let brr=[1,2,3,14,15,16,17,1,1,100,2,1000];
brr.sort(function(a,b){
    //if a<b => a-b will be negative => if cmp function gives negative then a is placed before b (a<b);
    //if a>b => a-b will be positive => if cmp function gives postive then b is placed before a (a>b);
    return a-b;
})//sort is a HOF then sort function takes a comparator function as argument
console.log(brr);