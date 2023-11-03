
//Body style
document.querySelector("body").style.fontFamily = "sans-serif";
document.querySelector("body").style.color = "White";
document.querySelector("body").style.backgroundColor = "Grey";

// Creating shopping list (Array)
const shoppingList = ["Milk", "Eggs", "Rice", "Pasta", "Meat", "Water", "Coffee", "Pesto", "Fruits", "Onions"];

//Creating shopping bag div in HTML in Body
const shoppingBag = document.createElement("div");
document.body.append(shoppingBag);

//Creating unordered list in HTML in Shpping Bag Div
const unorderedList = document.createElement("ul");
shoppingBag.appendChild(unorderedList);

//Selecting the button from HTML and giving it style
const btnList = document.querySelector("button");
btnList.style.fontWeight = "555";
btnList.style.backgroundColor = "green"


// Let make a variable as List Crated and put it as True (it will serve to avouid the visiability of the list items multiple times by clicking the button multiple times)
let listCreated = true;

//Adding funtion to the button
btnList.addEventListener("click", function () {
//Adding the condition 'if' there is a listCreated then follow the code
    if (listCreated) {
        
        let items = 0;
        while (items < shoppingList.length) {
            const listItems = document.createElement("li");
            unorderedList.appendChild(listItems);
            listItems.append(shoppingList[items]);
            items++;

        }

    }

//At the end do not create the list anymore
    listCreated = false;

})





