
function showPoem(response) {
    console.log("poem generated");
new Typewriter ("#poem-line" , { 
strings : response.data.answer, 
autoStart: true , 
delay: 1,
cursor: "",
});
}



function generatePoem(event){
event.preventDefault();


let instructionInput = document.querySelector ("#instruction");
let languageInput = document.querySelector ("#language-input");

let prompt  = `Generate a poem about ${instructionInput.value} happiness in the world in the related language in ${languageInput.value} and make it beautiful.`;
let context = 
"You are a precise expert and love happiness. Your mission is to generate a 2 line poem that is in English and about children. I believe that you can do it";

let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;




let poemElement = document.querySelector("#poem-line");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating">😉 Generating poem about ${instructionInput.value} </div>`;



axios.get(apiURL).then(showPoem);
}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);







