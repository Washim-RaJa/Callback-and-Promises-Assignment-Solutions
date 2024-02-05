function greeting(inputName){
    return new Promise((resolve) => {
        resolve("Hello")
    }).then((value)=>{
        console.log(`${value}, ${inputName}!`);
    })
}

greeting("Mithun")