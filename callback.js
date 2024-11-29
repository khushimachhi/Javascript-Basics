/*  function Display(){
    console.log(sum)
}
function calculator(num1,num2,callback){
    sum = num1 + num2;
    callback(sum);
}

calculator(5,10,Display);

*/

function fib(n){
    let answer = 1;
    if(n ==0 || n ==1){
        return answer;
    }else if (n >1){
        for(var i = n; i >=1 ; i --){
            answer = answer*i;
        }
    }console.log(answer);
}
fib(5);