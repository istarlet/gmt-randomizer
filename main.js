// Get the DOM elements
let form = document.querySelector("#add-item");
let list = document.getElementById("items");
let pickBtn = document.getElementById("pick");
let chosenEL = document.getElementById("chosen");

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

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {Array}       The shuffled array
 */

 function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// List for submit events on the form
form.addEventListener("submit", addItem);
