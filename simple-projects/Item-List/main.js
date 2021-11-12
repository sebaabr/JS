"use strict";

const form = document.querySelector("#addForm");
const itemList = document.querySelector("#items");
const filter = document.querySelector("#filter");

//form submit event
form.addEventListener("submit", addItem);

//delete event
itemList.addEventListener("click", removeItem);

//filter event
filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();

  //get input valuer
  let newItem = document.querySelector("#item").value;

  //create new li element
  const li = document.createElement("li");
  //add classname
  li.className = "list-group-item";

  //add text note with input
  li.appendChild(document.createTextNode(newItem));

  //create delete button element
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));

  li.appendChild(deleteBtn);
  //   console.log(itemList);
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  let text = e.target.value.toLowerCase();
  const items = itemList.getElementsByTagName("li");
  //convert to array
  Array.from(items).forEach((item) => {
    const itemName = item.firstChild.textContent;
    // console.log(itemName);
    if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
      // console.log(itemName);
      item.style.display = "block";
    } else
      // console.log('X');
    item.style.display = "none";
  });
}
