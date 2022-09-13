// Get the DOM elements
let form = document.querySelector("#add-item");
let list = document.getElementById("items");

function addItemToList(item) {
  // Create a list item
  let li = document.createElement("li");
  li.textContent = item;

  // Add item to the list
  list.append(li);
}

function addItem(event) {
  // Stop the form from reloading the page
  event.preventDefault();

  //Get all field data from the form and return a FormData object
  let data = new FormData(form);

  // Get the value of the "item" field
  let item = data.get("item");

  // If there is no item, bail
  if (!item) return;

  // Otherwise, add item to the list
  addItemToList(item);

  // Clear the form
  form.reset();
}

// List for submit events on the form
form.addEventListener("submit", addItem);
