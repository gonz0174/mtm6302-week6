console.log("Js is working")

const bodyTag = document.querySelector("body")

bodyTag.innerHTML += `
<section id="groceries">
<h2>Groceries</h2>
<ul id="groceryList"></ul>
</section>
`

let groceries = ["apple", "dog food", "bread", "bananas", "milk", "eggs"]
const groceryUl = document.getElementById("groceryList")
console.log(groceryList)

// for what coming from where
for(grocery of groceries) {
    //insertAdjacentHTML method accepts two parameters, where the HTML should be added and What HTML to add
    groceryUl.insertAdjacentHTML("beforeend", `<li>${grocery}</li>`)
}

function addItem(item) {
    if(item !== " ") {
       let newItem = `<li>${item}</li>`
       groceryUl.insertAdjacentHTML("afterbegin", newItem)
       return "done"
    }
}

//using createElement and appendChild, less popular
const section = document.createElement("section")
section.id = "todo"
section.innerHTML = "<h2>Todo List</h2>"

bodyTag.appendChild(section)