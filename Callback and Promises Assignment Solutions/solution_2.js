function manipulateString(str,callback){

    let result = str.toUpperCase();

    callback(result);
}

function logString(inputStr){
    
    console.log(`The maniputlated string is: ${inputStr}`);

}

manipulateString("hello, world!",logString);

