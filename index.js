function generatePoem(event){
    event.preventDefault();

    let poemElement = document.querySelector("#poem-line");


new Typewriter ("#poem-line" , { 
strings : "Dad’s chest full on the other side as her tapered hand ", 
autoStart: true , 
delay: 1,
cursor: "",
});




}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);