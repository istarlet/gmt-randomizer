// Get the DOM elements
let form = document.querySelector("#add-item");
let list = document.getElementById("items");
let pickBtn = document.getElementById("pick");
let chosenEL = document.getElementById("chosen");

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

// Show status message
function showItemStatus(item) {
  // Create a notification
  let notification = document.createElement("div");
  notification.setAttribute("aria-live", "polite");

  // Inject it into the DOM
  form.append(notification);

  // Add text after it's in the UI
  setTimeout(function () {
    notification.textContent = `${item} was added to the list!`;
  }, 1);

  // Remove it after 3 seconds
  setTimeout(function () {
    notification.remove();
  }, 3000);
}


function addItemToList(item) {
  // Create a list item
  let li = document.createElement("li");
  li.textContent = item;

  // Add item to the list
  list.append(li);

  // Show a status message
  showItemStatus(item);
}

// Add item to list
function addItem(event) {
  // Stop the form from reloading the page
  event.preventDefault();

  // Get all field data from the form and return a FormData object
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


// Get a random item from list
function getRandomItem() {
  // Get the items
  let items = Array.from(document.querySelectorAll("#items li"));

  // Shuffle the items
  shuffle(items);

  // Display the first item
  chosenEL.textContent = items[0].textContent;
}


// List for submit events on the form
form.addEventListener("submit", addItem);
pickBtn.addEventListener("click", getRandomItem);
