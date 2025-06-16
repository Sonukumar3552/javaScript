
//code1
const t1= performance.now()
for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent ="This is para" +i;
    document.body.appendChild(para);
}

const t2 = performance.now()

console.log("Total time takenby code1:" +(t2-t1));


//code2
const t3 = performance.now()

let mydiv = document.createElement('div');
for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent ="This is para" +i; 
    mydiv.appendChild(para);    
}
document.body.appendChild(mydiv);

const t4 = performance.now()

console.log("Total time takenby code2:" +(t4-t3));



