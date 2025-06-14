
// function changeText(){
// let fpara = document.getElementById('fpara');
// fpara.textContent = "second para"
// }
// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click',changeText);


// fpara.removeEventListener('click',changeText);


let paras = document.querySelectorAll('p');

for(let i=0; i<paras.length; i++){
   let para = paras[i];
   para.addEventListener('click',function(){
     alert("you have clicked on para" + i);
   })
}