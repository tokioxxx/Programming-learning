'use strict';
//配列
{
//   const scores =[80,90,40];
//   console.log(scores[1]);
// scores[2]=100;
// console.log(scores);

// scores=1;

// console.log(scores.length);

//オブジェクト

// const player={
//   name:'taguchi',
//   score:32,
// };
// console.log(player,name);

// player.score=100;
// console.log(player);
//
// player.email ='taguchi@gmail.com';
// console.log(player);
// delete player.score;
// console.log(player);

//クラス
// class Player{
//   constructor(name,score){
//     this.name=name;
//     this.score=score;
//   }
//   showInfo(){
//   console.log(`name: ${this.name} score: ${this.score}`);
// }
// static showVersion(){
//   console.log('Player class ver.1.0')
// }
// }
// const taguchi=new Player('taguchi',32);
// const fkoji=new Player('fkoji',44);
//
//
// taguchi.showInfo();
// fkoji.showInfo();
//
// Player.showVersion();
//
// class SoccerPlayer extends Player{
//   constructor(name,score,number){
//     super(name,score);
//     this.number=number;
//   }
//   kick(){
//     console.log('gooooaal!');
//   }
// }
// const tsubasa=new SoccerPlayer('tsubasa',99,10);
// tsubasa.kick();
// console.log(tsubasa.number);
// tsubasa.showInfo();
// }

// let x=[1,2];
// let y=x;
// x[0]=5;
// console.log(x);
// console.log(y);

//配列
// const a=[1,5,10];
//add
// a.unshift(100);//先頭に追加
// a.push(200,300);//末尾に追加
//
// console.log(a);
// a.shift();//先頭を削除
// a.pop();//末尾を削除
// console.log(a);

// const a=[1,5,10];
// a.splice(2,0,6,7);
// console.log(a);
// const removed=a.splice(1,2);
// console.log(a);
// console.log(removed);
// const a=[1,5,10,100];

// for (let i=0; i<= a.length; i++){
//   console.log(a[i]);
// }
// a.forEach((item,index) =>{
//   console.log(`${item}:${item}`);
// });

// const a=[1,5,10,100];
// const b = a.map(item => item *2);
// console.log(b);
// const b= a.filter(item =>item % 2 ===0);
// console.log(b);

//object

// const o={
//   a:1,
//   b:2,
// };
  // console.log(Object.keys(o));
  // console.log(Object.values(o));
  // console.log(Object.entries(o));

// Object.keys(o).forEach( key =>{
//   console.log(`${key}:${o[key]}`);
// });

//スプレット演算子
// const a=[10,20];
// const b=[1,2,...a];
// console.log(b);
// a[0] =100;
// console.log(b);

// console a =[10,20];
// const sum =(a,b) => a+b;
// console.log(sum(...a));

// const o1 ={a:1};
// const o2 ={...o1,b:2};
// console.log(o2);

// const numebers =[1,2,3,8];
// const a = numebers[0];
// const b = numebers[1];
// const [a,b,...rest] = numebers;
// console.log(a);
// console.log(b);
// console.log(rest);

// const player ={
//   name:'taguchi',
//   score: 55,
//   hp:33,
//   mp:22,
// };
// const{name,score,...points}=player;
// console.log(name);
// console.log(score);
// console.log(points);

//文字列
// const str ='hello';
//
// console.log(str.length);
// console.log(str.substring(2,4));
// console.log(str[1]);

//Math
// console.log(Math.PI);
// console.log(Math.random());

//Math.random

// console.log(Math.floor(Math.random()*6+1));

//Date

// const d =new Date();
// console.log(d);
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDate());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getTime());
// const d=new Date(2018,11);
// d.setHours(10,20,30);
// d.setDate(32);
// d.getDate(d.getDate()+3);
// console.log(d);

// const d1 =new Date(2018,11,1);
// const d2 =new Date(2018,11,10);
// console.log((d2-d1)/(24*60*60*1000));

//alert confirm

// windows.alert('hello');
// alert('hellow');
// const answer =confirm('Are you sure?');
// console.log(answer);
// const showTime = () => {
  // let i=0;
//   console.log(new Date());
//   i++;
//   if(i>2){
//     clerInterval(timerId);
//   }
// }
// let timerId=setInterval(showTime,1000);


//   let i=0;
// const showTime = () => {
//   console.log(new Date());
//   let timerId =setTimeout(showTime,1000)
//   i++;
//     if(i>2){
//       clearInterval(timerId);
// }};
// showTime();

//例外処理
// const a='hellow';
// const a=5;
// try{
// console.log(a.toUpperCase());
// }catch(e){
// console.log(e.message);}
// console.log('Finish!');
//



//Document Object Model/Document

// document.body.textContent = 'Hello';
// document.title='Changed!';

// document.getElementById('target').textContent = "Changed!";

// document.querySelector('h1').textContent ='H1';
// document.querySelectorAll('li:nth-child(odd)').forEach(li => {
//   li.textContent = 'li!';
// });
 // const ul =document.querySelector('ul');

 // console.log(ul.parentNode);//body
 // console.log(ul.children);//li
 // console.log(ul.children[0]);//li

// for(let i=0; i<ul.children.length;i++){
//   console.log(ul.children[i].textContent);
// }

//要素の属性を操作してみよう
// const h1 =document.querySelector("h1");
//
// console.log(h1.title);
// h1.title='changed';
//
// h1.style.color ='gray';
// h1.style.backgroundColor ='pink';

//HTMLのカスタムの属性
// const h1 =document.querySelector('h1');
//
// console.log(h1.dataset.appId);
// h1.dataset.message='this is custom message';


//classListを使ってみよう
// const div =document.querySelector('div');
// div.className ='box border-pink';

// div.classList.add('border-pink');
// div.classList.remove('box');
// if((div.classList.add('border-pink')){
//   div.classList.remove('box');
// }else{
//   div.classList.add('border-pink');
// }
// div.classList.toggle('border-pink');


//要素を生成してみよう
// const h1 =document.createElement('h1');
// h1.textContent='Title';
// document.body.appendChild(h1);
//
// const p =document.createElement('p');
// p.textContent='Hello';
// document.body.appendChild(p);
//
// const h2 =document.createElement('h2');
// h2.textContent='Sub Hello';
// document.body.insertBefore(h2,p);

//const copy=p.cloneNode(true);
// const copy=p.cloneNode(false);
// document.body.insertBefore(copy,h2);
// document.body.removeChild(h2);

//テキスト入力部分の操作
// const text =document.querySelector('input[type="text"]');
// const textarea=document.querySelector('textarea');
//
// console.log(text.value);
// console.log(textarea.value);

// text.focus();
// text.select();
// text.disabled=true;

//イベントリスナーを使ってみよう
// const button=document.querySelector('button');
//
// button.addEventListener('dblclick',() => {
//   console.log('clicked');
// });

//イベントオブジェクト
// const div=document.querySelector('div');
//
// document.addEventListener('mousemove',e => {
// div.textContent=`${e.clientX}:${e.clientY}`;
// });
const a =document.querySelector('a');
const span =document.querySelector('span');
a.addEventListener('click', e => {
  e.preventDefault();
  a.classList.add('hidden');
  span.classList.remove('hidden');
})
}
