const foodUl=document.querySelector(".food-container");

//console.log(foodUl);

const foodLi=document.querySelector(".food-container li");

//console.log(foodLi);

const button=document.getElementById("dummy");
// console.log(button);

// padding: 6px 10px;
// background-color: rgb(247, 250, 70);
// border: none;
// border-radius: 7px;
// color: rgb(15, 15, 15);
// border-color: gray;
// text-transform: uppercase;
// font-size: 12px;
// width: 80px;
// float: right;
// margin-right: 10px;

//3 ways to set css inline property

// button.style.backgroundColor="rgb(247, 250, 70)";

// // const setButton=button.setAttribute("style","padding: 10px;background-color: aqua");

// button.style.cssText=" padding: 6px 10px;background-color: rgb(247, 250, 70);border: none;border-radius: 7px;color: rgb(15, 15, 15);border-color: gray;text-transform: uppercase;font-size: 12px;width: 80px;float: right;margin-right: 10px;"


// //Show ME
// const inputTextEl=document.querySelector(".input-name-container");
// const hideBtnEl=document.querySelector(".hideBtn");
// console.log(hideBtnEl.innerText);
// hideBtnEl.addEventListener("click",()=>{
//     //inputTextEl.style.display="none";
//     if(inputTextEl.style.display=="none"){
        
//         hideBtnEl.innerText="Hide Me";
//         inputTextEl.style.display="block";
//     }
//     else{
//         inputTextEl.style.display="none";
//         hideBtnEl.innerText="Show Me";
//     }
// })


//AddEventListener

const appName=document.querySelector("header");
// console.log(appName.innerText);
//appName.addEventListener("click",clickedAppName);
function clickedAppName(){
    alert("App Name Clicked");
    //console.log("Clicked");
}

//Dsable Right Click
//document.addEventListener("contextmenu",event=>event.preventDefault());



//document.removeEventListener("contextmenu",event=>event.preventDefault());


//Event catching and bubling

// Refer domevents.dev

//stopPropagation
//stopEventPropagation

// Mouse Events

// document.addEventListener("mousedown",(event)=>{
//     console.log(event);
// })

// Keyboard events

// document.addEventListener("keypress",(event)=>{
//     console.log(event);
// })



// //Accesssing form elements

// // console.log(document.forms.Feedback);


// console.log(formEL);
// const fullNameEl=formEL.elements.fullname;
// console.log(fullNameEl);


// // Object destructure

// const {fullname,feedback,userEmail}=formEL.elements;
// console.log(fullname,feedback,userEmail);

const formEL=document.forms.Feedback;


const handleSubmit=(event)=>{
    event.preventDefault();
    
    // const formData = new FormData(formEL);

    // console.log(...formData.entries());

   alert('Thanks for the Feedback');
}

formEL.addEventListener("submit",handleSubmit);


