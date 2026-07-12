const shayariData = {

Love:[
{
text:`Dil se nikli har dua,
tere naam ho jaaye.

Teri muskaan se,
meri duniya roshan ho jaaye.`,
author:"— Unknown"
},

{
text:`Raat hogi toh tumhe chaand bhi nazar aayega,
Khwabon mein ek pyara sa chehra bhi dikhai dega.

Yeh mohabbat hai, zara soch samajh kar karna,
Kyunki ek aansu bhi gira toh dil ko sunai dega.`,
author:"— ."
},
{
text:`Na paa sake, na bhula sake,
Na keh sake, na jata sake.

Tum mere liye kya ho,
Yeh na khud samajh sake,
Na tume kabhi samjha sake.`,
author:"— ."
}

],

Sad:[

{
text:`Jo naseeb mein nahi tha, uski umeed kyun hai,
Jo saath hai aaj, usse doori ki zid kyun hai?

Ajeeb hai dil ka faisla bhi,
Jise khabar tak nahi hamare dard ki,
Usi ke liye aankhon mein intezaar kyun hai?`,
author:"—."
},

{
text:`Jo kabhi mil na saka,
Uska intezaar kyun hai?

Jo paas reh kar bhi apna nahi,
Usse khone ka darr kyun hai?

Dil bhi ajeeb cheez hai,
Jise bhoolna chahiye,
Usi ko yaad kyun karta hai?`,
author:"—."
},

{
text:`Jise apna samajh kar sab kuch luta diya,
Wohi humein anjaan keh kar chala gaya.

Ajeeb hai dil ki majboori,
Jisne dard diya,
Dil ne usi ke liye dua ki.`,
author:"—."
},

{
text:`Ab shikayat bhi kya karein usse,
Jab mohabbat hi humne ek tarfa ki thi.

Usne toh kabhi wada bhi nahi kiya,
Bas humne khud se umeedein laga li thi.`,
author:"—."
},

{
text:`Aaj bhi uski yaad aati hai,
Magar aansu nahi aate.

Shayad dard itna gehra ho gaya hai,
Ke ab dil bhi chup rehna seekh gaya hai.`,
author:"—."
},

{
text:`Kuch log dil tod kar bhi yaad rehte hain,

Kyunki unse judi yaadein,
Dil se nahi jaati hain.`,
author:"—."
},

{
text:`Waqt badal gaya,
Log badal gaye.

Bas ek dil hai jo aaj bhi,
Purani baaton mein atka hua hai.`,
author:"—."
},

{
text:`Jise meri khamoshi samajh nahi aayi,
Usse meri mohabbat kya samajh aati.

Hum toh haste rahe uske saamne,
Aur andar se toot te rahe.`,
author:"—."
},

{
text:`Kabhi kabhi kuch rishte adhure hi ache lagte hain,

Kyunki poore ho jaate toh,
Shayad dard aur zyada dete.`,
author:"—."
},

{
text:`Humne toh sirf sachchi mohabbat maangi thi,

Magar waqt ne humein,
Intezaar aur tanhaayi de di.`,
author:"—."
},

{
text:`Dil ko samjhaya bahut,
Par dil maanta nahi.

Jise bhoolna chaha,
Wohi yaad aata raha.`,
author:"—."
},

{
text:`Ajeeb khel hai zindagi ka,

Jinhe hum apna samajhte hain,
Wohi sabse zyada dard de jaate hain.`,
author:"—."
}

],

Motivation:[
{
text:`Girna koi haar nahi,

Uth kar chalna hi jeet hai.`,
author:"— Inspiration"
},

{
text:`Sapne woh nahi jo sote waqt aate hain,

Sapne woh hain jo jagne nahi dete.`,
author:"— Unknown"
}

]

};



let currentCategory="";
let pages=[];
let index=0;


const categories=document.getElementById("categories");
const reader=document.getElementById("reader");

const page=document.getElementById("page");

const text=document.getElementById("shayari");
const author=document.getElementById("author");
const counter=document.getElementById("counter");
const fav=document.getElementById("favorite");
const title=document.getElementById("currentCategory");



let favorites=[];



document.querySelectorAll(".category-box button")
.forEach(btn=>{

btn.onclick=()=>{

currentCategory=btn.dataset.category;

pages=shayariData[currentCategory];

index=0;

title.innerText=currentCategory;

categories.classList.add("hidden");

reader.classList.remove("hidden");

show();

};

});





function show(){

let item=pages[index];


text.innerText=item.text;

author.innerText=item.author;


counter.innerText=
`${index+1} / ${pages.length}`;


fav.innerText=
favorites.includes(item.text)
?"♥"
:"♡";

}





function nextPage(){


page.classList.add("fly-left");


setTimeout(()=>{


index++;


if(index>=pages.length){

index=0;

}


show();


page.classList.remove("fly-left");


},300);


}





function previousPage(){


page.classList.add("fly-right");


setTimeout(()=>{


index--;


if(index<0){

index=pages.length-1;

}


show();


page.classList.remove("fly-right");


},300);


}





fav.onclick=()=>{


let item=pages[index];


if(favorites.includes(item.text)){


favorites=favorites.filter(
x=>x!==item.text
);


}
else{


favorites.push(item.text);


}


show();


};






document.getElementById("back").onclick=()=>{


reader.classList.add("hidden");

categories.classList.remove("hidden");


};






// FIXED SWIPE SYSTEM


let startX=0;
let endX=0;



page.addEventListener(
"touchstart",
(e)=>{


startX=e.changedTouches[0].clientX;

endX=startX;


},
{
passive:true
});





page.addEventListener(
"touchmove",
(e)=>{


endX=e.changedTouches[0].clientX;


},
{
passive:true
});





page.addEventListener(
"touchend",
()=>{


let distance=endX-startX;



// swipe LEFT

if(distance < -60){

nextPage();

}


// swipe RIGHT

else if(distance > 60){

previousPage();

}


// reset

startX=0;
endX=0;


});
