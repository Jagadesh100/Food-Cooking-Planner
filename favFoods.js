const foodContainerUl=document.getElementById("food-container");

//createelement

console.time("element");
function createElementById(){
    const li=document.createElement("li");
    li.className="food-item";
    const favFood=document.createTextNode("Rice");
    li.append(favFood);
    foodContainerUl.append(li);
}


createElementById();
console.timeEnd("element");

//console.log(typeof foodContainer);

const favFoods=["Biriyani","Parota","Beef"];

console.time("fragment");
function createElementByFragment(){

    const fragment=document.createDocumentFragment();
    favFoods.forEach(element => {
        const li=document.createElement("li");
        li.className="food-item";
        const favFood=document.createTextNode(element);
        li.append(favFood);
        fragment.append(li);
    });
    
    
    
    foodContainerUl.append(fragment);
}

createElementByFragment();
console.timeEnd("fragment");