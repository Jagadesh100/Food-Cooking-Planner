//getElmentById

let inputFood=document.getElementById("input-food");
let saveButton=document.getElementById("input-btn");
let foodContainer=document.getElementById("food-container");
let noListEl=document.getElementById("no-list");
let foodListStatistics=document.getElementById("food-list-statistics");

const localStorageKey="foodItems";

document.addEventListener("DOMContentLoaded",()=>{
    const fetchedFoodItems=[...JSON.parse(localStorage.getItem(localStorageKey))];
    fetchedFoodItems.forEach(item=>{
        //console.log(item.foodItems);
        createFoodItemList(item.foodItems);
    });
    refreshUI();
});

// Adds New Food Item to the list
saveButton.addEventListener("click",addFoodItem);

//Event listening Enter Key
inputFood.addEventListener("keyup",(event)=>{
    if(event.key=='Enter'){
        addFoodItem();
    }
    else if(event.key=='KeyZ'){
        inputFood.value='';
    }
})

// Removes Food Item from the list
function removeItem(event){
    let availableList=event.target.parentNode.parentNode;
    availableList.remove();

    //Remove from Local Storage
    const fetchedFoodItems=[...JSON.parse(localStorage.getItem(localStorageKey))];
    //console.log(availableList.innerText);

    fetchedFoodItems.forEach(item=>{
        if(item.foodItems==availableList.innerText){
            fetchedFoodItems.splice(fetchedFoodItems.indexOf(item),1)
            //window.localStorage.removeItem(fetchedFoodItems);
        }
    })


    localStorage.setItem(localStorageKey,JSON.stringify(fetchedFoodItems));
    refreshUI();
}


//Creates Unordered Food Item List
function createFoodItemList(inputStr){
    
    let resultstr=inputStr.charAt(0).toUpperCase()+inputStr.slice(1);

    const li=document.createElement("li");
    const newFood=document.createElement("div");
    
    const iconDiv=document.createElement("div");

    li.append(newFood,iconDiv);
    
    iconDiv.innerHTML='<i class="fa-sharp fa-solid fa-xmark"></i>';
    iconDiv.parentElement.setAttribute("onclick","removeItem(event)");

    const text=document.createTextNode(`${resultstr}`);
    newFood.append(text);

    li.className="food-item";

    
    foodContainer.append(li);
    li.append(newFood);

    li.append(iconDiv);
}

function addFoodItem(){

    let inputStr=inputFood.value;
    // alert("Button clicked");
    //foodContainer.innerText=inputFood.value;
    //let foodItemTemp='<li>$(inputFood.value)</li>';
    //foodContainer.append(foodItemTemp);
    //foodContainer.innerHTML+='<li>${inputFood.value}</li>';
    
   
    //console.log(li);

    createFoodItemList(inputStr);

    // SetItem Local storage
    localStorage.setItem(localStorageKey,
    JSON.stringify([...JSON.parse(localStorage.getItem(localStorageKey) || "[]"),
    {foodItems: inputFood.value}])
    );

    inputFood.value='';

    refreshUI();
}


function refreshUI(){
    if (foodContainer.childElementCount<=0) {
        foodListStatistics.hidden=true;
        noListEl.hidden=false;
    }else{
        if (foodContainer.childElementCount==1) {
            foodListStatistics.innerText=`You have ${foodContainer.childElementCount} Food Item`;
        }
        else{
            foodListStatistics.innerText=`You have ${foodContainer.childElementCount} Food Items`;
        }
        noListEl.hidden=true;
    }
}



