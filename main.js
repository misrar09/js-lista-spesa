

const shoppingList = [ "Milk", "Eggs", "Rice", "Pasta", "Meat", "Water", "Coffee", "Pesto", "Fruits", "Onions"]


const shoppingBag = document.createElement("div")
document.body.append(shoppingBag)

const unorderedList = document.createElement("ul")
shoppingBag.appendChild(unorderedList)


let items = 0;
while(items < shoppingList.length){
    const listItems = document.createElement("li");
    unorderedList.appendChild(listItems);
    listItems.append(shoppingList[items]);
    items++;
    
}



