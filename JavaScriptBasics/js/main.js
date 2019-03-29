'use strict';

//数値
// console.log(10+3);
// console.log(10-3);
// console.log(10*3);
// console.log(10/3);
// console.log(10%3);
// console.log(10**3);
//
// console.log(2+10*3);
// console.log((2+10)*3);

//定数 const
//変数 let

// console.lag(150*140);
// console.lag(150*160);

// let price=150;
//
//  console.log(price*140);
//  console.log(price*160);
//
//  price=170;
//
// console.log(price*140);
// console.log(price*160);

//変数の計算

// let price=500;

// price=price+100;
// price+=100;
// price *=2
// price=price+1;
// price++;
// price--;

// console.log(price);

//データ型

// console.log(typeof'hello');
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);

//数値のような文字列
// console.log('5'*3);
// console.log('5'-3);
//
// console.log('5'+3);
// console.log(parseInt('hello,10'));

//条件分岐 if
// const score=22;
//
// if(score>=80){
//   console.log('Great');
// }else if(score>=60){
//   console.log('Good');
// }else{
//   console.log('OK');
// }

//条件演算子
// const score=22;
// score>=80 ?   console.log('Great'):console.log('OK');


//論理演算子

//&&なおかつ(AND)
// !!もしくは(OR)
// !〜ではない(NOT)
//
// const score=60;
// const name='taguchi';

// if(score>=50){
//   if(name==='taguchi'){
//     console.log('Good job');
//   }
// }

// if (score>=50 && name === 'taguchi'){
//   console.log('Good job');
// }

//条件分岐
// const signal='yellow';
//
// switch(signal){
//   case 'red':
//   console.log('stop');
//   break;
//   case 'blue':
//   case 'green':
//   console.log('go!');
//   break;
//   case 'yellow':
//   console.log('caution!');
//   break;
//   default:
//   console.log('wrong signal!');
//   break;
// }

//for

// for(let i=1; i<=10; i++){
//   // console.log('hello');
//   console.log(`${i}hellow`);
// }

//while
// let hp=200;
//
//   while (hp>0){
//     console.log(`${hp}HP left!`);
//     hp-=15;
//   }

// for(let hp=200; hp>0; hp-=15){
//   console.log(`${hp}HP left`)
// }

// for(let i=1; i<=10; i++){
//   if(i==4){
//   if(i%3==0){
//      continue;
//   if(i==4){
//     break;
//   }
//   console.log(i);
// }

//関数
// function showAd(message='AD'){//仮引数
// console.log('----------');
// console.log(`----${message}----`);
// console.log('----------');
// }
//
// showAd('Header AD');//実引数
// console.log('Tom is great!!');
// console.log('Bob is great!!');
// // showAd('AD');
// showAd();
// console.log('Steve is great!!');
// console.log('Rich is great!!');
// showAd('Fotter Ad');

// const sum=function sum(a,b,c){
//   // console.log(a+b+c);
//   return a+b+c;
// };

// const sum=(a,b,c) => a+b+c;

// sum(1,2,3);
// sum(3,4,5);
// const total=sum(1,2,3)+sum(3,4,5);
// console.log(total);

// const double= a=> a*2;
// console.log(double(12));

function f(){
  const x=1;
  console.log(x);
}
