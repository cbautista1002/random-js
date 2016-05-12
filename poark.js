
'use strict';

// let play = require('./play.js');

// let p = new play.Play(33);
// let w = new play.Work(4);

// const a = 99;
// // a = 222;

// console.log(`first: ${p.first}`);
// console.log(`second: ${p.second}`);

// p.printAll();
// console.log(p.funLevel);
// p.increaseFL();
// console.log(p.funLevel);

// let x1 = 0, x2 = 1;
// let fib = function(n){
//   let y = x1 + x2;
//   x2 = ;
//   fib(x2, y)
// }

// fib(10);


// for(var i = 0; i < 10; i++){
//   let x2js fib = x1 + x2;

// }


// fib with array
// console.time('arr');
// var a = [];
// a[0] = 0;
// a[1] = 1;
// for(var i = 2; i <= 40; i++){
//   a[i] = a[i-2] + a[i-1];
// }
// console.log(a[40]);
// console.timeEnd('arr');




// console.time('rec');

// var f = function(n){
//   return n <= 2 ? 1
//     : f(n-2) + f(n-1);
// }
// console.log(f(40));
// // n = 4; f(2)+f(3) => 1 + f(1)+f(2) => 1 + 1 + 1

// console.timeEnd('rec');

// find the most frequent integer in an array
// var a = [2,3,4,5,3,2,4,5,3,23,2,4,5,5,3,2,2,3,4,45,4,3,3,4,3,32,2,3,4,4,5,1,5,4,3,2,22];
// console.log(a.filter(v => v===2).length);

// console.log(a.reduce( (x,y) => x+y ));

// let sum = function(abc){return abc.reduce((x,y) => x+y);};
// console.log(sum([1,2,3,5,6]));

// let b = [2,3,4].map(x => Math.pow(x, 2));
// console.log(b);


let pairList = [5,4,5,6];
for(var i = 0; i < pairList.length/2; i++){
  for(var j = pairList.length/2; j < pairList.length; j++){
    console.log(`checking ${i} and ${j}`);
    if(pairList[i]+pairList[j] === 10){
      console.log(`i: ${i}, j: ${j}`);
    }
  }
}
