// object is Dynamic in nature
let obj = {
    age:12,
    wt:50,
    ht:180
};
console.log(obj);
obj.color = "white";
console.log(obj);

// Object Clonning


    // spred operator method
let src = {
    age:12,
    wt:50,
    ht:180
};
// (... spred operator)
let dest = {...src};
src.age = 45;

console.log("src:",src);
console.log("dest:",dest);


    // assign methode   
let src = {
    age:12,
    wt:50,
    ht:180
};
let dest = Object.assign({},src);
src.age = 45;

console.log("src:",src);
console.log("dest:",dest);
        
    //    iteration methode

       
let src = {
    age:12,
    wt:50,
    ht:180
};

let dest = {};
for(let key in src) {
    let newKey = key;
    let newValue = src[key];
    dest[newKey] = newValue;
};
src.age = 45;
console.log("src:",src);
 console.log("dest:",dest);



 