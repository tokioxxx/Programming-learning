'use strict';
{
  const btn = document.getElementById('btn');

// クリックすると数字がでる
//randomは0〜1の範囲なのでfloorを使い整数だけにして
// *3にすることで0.1,2の3つを表示することができる
//resultsを使うならlength

  btn.addEventListener('click', () => {
    // const results = ['大吉','中吉','凶','末吉'];
    // const n=Math.floor(Math.random()*results.length);
    // btn.textContent = results[n];
    
const n =Math.random();
if(n<0.05){
  btn.textContent = '大吉';//5%
}else if(n<0.2){
  btn.textContent = '中吉';//15%
}    else{
  btn.textContent = '凶';//80%
}
//switchの場合
  //   btn.textContent= n;
  //   switch(n){
  //     case 0:
  //     btn.textContent = '大吉';
  //     break;
  //     case 1:
  //     btn.textContent = '中吉';
  //     break;
  //     case 2:
  //     btn.textContent = '凶';
  //     break;
  //   }
  });
//押し込んだ時pressedが反映される
  btn.addEventListener('mousedown', () => {
    btn.classList.add ('pressed');
  });

//removeによってまた押せるようになる
  btn.addEventListener('mouseup', () => {
    btn.classList.remove ('pressed');
  });

}
