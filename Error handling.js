//compile time error
     //syntax error
 console.log(1;

    // runtime error
 console.log(x);


 //Error Handling
 try{
    console.log("try block start here");
    console.log(x);
    console.log("try block ends here");
 }
 catch(error){
    console.log('i m inside catch block');
    console.log("your error is here",error);
 }
 finally{
    console.log("i m run evertime");
 }


//throw (custom error)

try{
    console.log(x);
}
catch(error){
    throw new Error("first declare then print");
}