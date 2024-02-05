async function multipleDataFetching(){

    let responseToDo = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let dataToDo = await responseToDo.json();

    let responsePosts = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let dataPosts = await responsePosts.json();

    console.log({todo: dataToDo, post: dataPosts});

}

multipleDataFetching()