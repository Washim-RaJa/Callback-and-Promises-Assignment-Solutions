async function dataFetching(url){
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}


dataFetching("https://jsonplaceholder.typicode.com/todos/1");
