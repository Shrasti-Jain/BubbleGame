const jsConfetti = new JSConfetti()
var time=59
let score=0
var sc=document.querySelector('#scorebox1');
var full=document.querySelector('.full');
var btn=document.querySelector('.full button')
var hit=document.querySelector('#hitbox');
var timerbox=document.querySelector('#timerbox');
var res=document.querySelector('#res');
var endbtn=document.querySelector('#end');

function smallboxes(){
    let clutter='';
for(let i=0;i<152;i++){
    let ran=Math.floor(Math.random()*9)+1
    clutter+=`<div class='boxsmall' id='${i}'>${ran}</div>`;
}
document.querySelector('.bottom').innerHTML=clutter;
}
function play(){
    var btn=document.querySelector('button');
    btn.addEventListener('click',function(){
        full.style.display='none';
        smallboxes();
        timer()
    })
}
play()
function timer(){
    countdown=setInterval(function(){
        if(time>=0) {
        timerbox.innerHTML=time;
        time--;
    }
        else{
        clearInterval(countdown);
          end()
        }
    },1000);
}

function generateHit(){
     let random=Math.floor(Math.random()*9)+1;
     hit.innerHTML=random;
}

function click(){
     var bottom=document.querySelector('.bottom');
     var score=document.querySelector('#hitbox');
     bottom.addEventListener('click',function(dets){
        let cli=dets.target;
        if(cli.textContent===score.textContent) {
            increasescore();
            generateHit()
        smallboxes()
        }
        else if(cli.id!=''){
            decreasescore()
            generateHit()
        smallboxes()
        }
     })
}
click()
 function increasescore(){
      score++;
      sc.innerHTML=score;  
 }
 function decreasescore(){
      score--;
      sc.innerHTML=score;  
 }

function restart(){
    clearInterval(countdown); 
       score=0,
       time=59,
       sc.innerHTML=score,
        timerbox.innerHTML=60,
        full.style.display='none';
        generateHit()
        smallboxes();
        timer()
 }
 function end(){
    full.style.display='flex';
    full.innerHTML = '';
    var h2=document.createElement('h2');
    full.appendChild(h2); 
    h2.innerHTML=`Score is: ${score}`;
    if (score > 10) {
    jsConfetti.addConfetti();
    }
    var againbutton=document.createElement('button');
    againbutton.setAttribute('id','again');
    full.appendChild(againbutton);
    againbutton.innerHTML='Play Again';
    againbutton.addEventListener('click',function(){
       restart()
    })
 }

 res.addEventListener('click',function(){
    restart()
 })

 endbtn.addEventListener('click',function(){
    end();
 })