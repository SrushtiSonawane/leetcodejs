function createHelloWorld (){
    return function(){
        return "Hello World";
    };
}
const helloWorldFunction = createHelloWorld();
const helloWorldDiv = document.getElementById('Hello-world')
helloWorldDiv.innerText= helloWorldFunction();