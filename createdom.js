//getElmentById

let inputFood=document.getElementById("input-food");
let inputButton=document.getElementById("input-btn");
let foodContainer=document.getElementById("food-container");

function createFoodDom(message)
{
    {/* <div class="alert">
    ✅Successful. <strong>Food is Updated!</strong>
</div> */}

//Gets id of main tag
const main=document.getElementById("main");

//Creating Tag Div
const div=document.createElement("div");

//Assigning class alert
div.className="alert";

//Assigning text( for multiple usage need to use textNode)
//div.textContent="Food is Updated!";

const successText=document.createTextNode("✅Successful.");
div.append(successText);

const strong=document.createElement("strong");
const foodText=document.createTextNode(message);
strong.append(foodText);
div.append(strong);

//console.log(div);

main.prepend(div);
}

createFoodDom(" Food is Updated!");



//getElementsByClassName

let foodItems=document.getElementsByClassName("food-item");
//console.log(foodItems);

let foodItemsArr=[].map.call(foodItems,(food)=>food.textContent );
//console.log(foodItemsArr);

//ElementsByTagName
//queryselector,queryselectorall

//get/set in dom

// 3 type
//innerText=>only elements
//innerHTML
//textContent=> used for node level and elements


/* append,prepend,before,after*/


/*
insertadjacenthtml("")
afterbegin,afterend, beforebegin,beforeend*/


/*replace with,replacechildren*/

let inputReplace=document.getElementById("input-button-right");
//console.log(inputReplace);

const idlyLi=document.querySelector(".food-item");
//console.log(idlyLi);

inputReplace.addEventListener("click",()=>{
    const foodReplace=document.createElement("li");
    foodReplace.textContent="Rava Dosa";
    foodReplace.className="food-item";
    idlyLi.replaceWith(foodReplace);
})


//CloneData
/*cloneNode()=> only root node will be implemented
cloneNode(true)=>entirely clpnes*/

const cloneButton=document.getElementById("input-button-clone");
const cloneDataLi=document.getElementById("dummy-clone");
//console.log(cloneButton);

//console.log(foodContainer.cloneNode(true));

cloneButton.addEventListener("click",()=>{ 
    cloneDataLi.innerHTML='';
    cloneDataLi.append(foodContainer.cloneNode(true));
})


//accessing dom elements

const domEl=document.querySelectorAll(".food-container li");
const domArr=[];

for(item of domEl){
    console.log(item.innerText);
    domArr.push(item.innerText);
}
console.log(domArr);

[...domEl].forEach((food)=>console.log("Food Items",food));


//childNode

/*
const main=document.getElementById("main");
console.log(main.children);
console.log(main.childNodes);


const parent=document.getElementsByClassName(".food-item");
console.log(parent);
*/
//ParentNode
//Sibling
//setAttribute
