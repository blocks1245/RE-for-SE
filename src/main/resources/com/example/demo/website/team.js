let draggedItem = null;

document.addEventListener('dragstart', function(event) {
  draggedItem = event.target;
  event.target.style.opacity = '0.5';
});

document.addEventListener('dragend', function(event) {
  event.target.style.opacity = '';
});

document.addEventListener('dragover', function(event) {
  event.preventDefault();
});

document.addEventListener('drop', function(event) {
  event.preventDefault();
  if (event.target.className === 'drop-zone') {
    event.target.appendChild(draggedItem);
  }
});

// Get the drop zones
var dropZones = document.querySelectorAll(".drop-zone");

// Get the items
var items = document.querySelectorAll(".item");

// Loop through each item and add a dragstart event listener
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  });
}

// Loop through each drop zone and add a dragover event listener
for (var i = 0; i < dropZones.length; i++) {
  dropZones[i].addEventListener("dragover", function (event) {
    event.preventDefault();
  });
  dropZones[i].addEventListener("drop", function (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(data));
    saveOrder();
  });
}

// Save the order of the items in local storage
function saveOrder() {
  var order = [];
  for (var i = 0; i < items.length; i++) {
    order.push(items[i].id);
  }
  localStorage.setItem("order", JSON.stringify(order));
}

// Load the order of the items from local storage
function loadOrder() {
  var order = JSON.parse(localStorage.getItem("order"));
  if (order) {
    for (var i = 0; i < order.length; i++) {
      var item = document.getElementById(order[i]);
      item.parentNode.appendChild(item);
    }
  }
}

// Load the order when the page loads
loadOrder();
