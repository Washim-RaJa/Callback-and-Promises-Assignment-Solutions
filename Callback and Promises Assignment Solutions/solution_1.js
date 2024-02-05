function doubleUsingCallback(numbers,callback){
    callback(numbers);
}

function operation(arr){
    for(let i = 0; i<arr.length;i++){
        arr[i] = arr[i]*2;
    }
    console.log(arr);
}

doubleUsingCallback([5,98,42,7,4],operation);