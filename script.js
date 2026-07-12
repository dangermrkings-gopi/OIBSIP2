// Typing Animation

const words=[
"Web Developer",
"Frontend Developer",
"UI Designer",
"Programmer"
];

let wordIndex=0;
let letterIndex=0;
let currentWord="";
let currentLetters="";

const typing=document.querySelector(".typing");

function type(){

if(letterIndex<words[wordIndex].length){

currentLetters+=words[wordIndex].charAt(letterIndex);

typing.textContent=currentLetters;

letterIndex++;

setTimeout(type,120);

}

else{

setTimeout(erase,1500);

}

}

function erase(){

if(letterIndex>0){

currentLetters=currentWord.substring(0,letterIndex-1);

typing.textContent=currentLetters;

letterIndex--;

setTimeout(erase,80);

}

else{

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

currentWord=words[wordIndex];

setTimeout(type,200);

}

}

document.addEventListener("DOMContentLoaded",function(){

if(words.length){

currentWord=words[wordIndex];

type();

}

});

// Scroll Reveal

function reveal(){

let reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;

let revealTop=reveals[i].getBoundingClientRect().top;

let revealPoint=150;

if(revealTop<windowHeight-revealPoint){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);

reveal();
