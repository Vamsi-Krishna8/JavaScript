function timeConsumingByloop(){
    console.log("loop starts");
    for(let i=0;i<10000000000;i++){
        //somework;
    }
    console.log("loop ends");
}
function timeConsumingByRuntimeFeature0(){
    console.log("Starting timer");
    setTimeout(function exec0(){
        console.log("Completed the timer0");
        for(let i=0;i<1000000000;i++){
            //sometask;
        }
    },5000);
}
function timeConsumingByRuntimeFeature1(){
    console.log("Starting timer");
    setTimeout(function exec1(){
        console.log("Completed the timer1");
    },0);
}

function timeConsumingByRuntimeFeature2(){
    console.log("Starting timer");
    setTimeout(function exec2(){
        console.log("Completed the timer2");
    },200);
}
console.log("Hi");
timeConsumingByloop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByloop();
console.log("Bye");