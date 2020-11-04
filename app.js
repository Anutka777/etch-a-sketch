// Container for grid
const gridNet = document.getElementById('grid-net');

// reset-button with event listener
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', reset);

// Make initial page layout
let gridItemInOneLine = 16;
makePad(gridItemInOneLine);
drawing();

// Make drawing pad
function makePad(gridItemInOneLine) {

  // Use array for making grid-items
  let gridItemArray = [];
  for (i = 1; i <= (gridItemInOneLine ** 2); i++) {
    gridItemArray.push(i);
  }

  // Change properties, based on user input (gridItemInOneLine)
  document.getElementById('grid-net').style.cssText = `grid-template-columns: repeat(${gridItemInOneLine}, 1fr);
    grid-template-rows: repeat(${gridItemInOneLine}, 1fr);`;

  // Place our grid-items to document
  gridItemArray.forEach(function(el) {
    let gridItem = document.createElement('div');
    gridItem.className = 'grid-item'
    gridItem.id = `grid-item-${el}`;
    gridNet.appendChild(gridItem);
  });
}

// Click on reset-button
function reset() {

  // Remove previos grid-net
  while (gridNet.firstChild) {
    gridNet.firstChild.remove();
  }

  // Prompt for user input
  gridItemInOneLine = +prompt ('How many squares in one line do you prefer? \nPlease don\'t chose number > 100');
  if (typeof(gridItemInOneLine) === 'number' && gridItemInOneLine > 100) {
    alert ("Please limimt yourself with numbers <= 100");
    reset();
  } else if (typeof(gridItemInOneLine) === 'number' && gridItemInOneLine <= 100) {
    makePad(gridItemInOneLine);
    drawing();
  } else {
    alert("Only numbers accepted. Please click Erase button again.");
  }
}

// Change class of grid-item by hovering
function drawing() {
  Array.from(document.getElementsByClassName('grid-item')).forEach(function(item) {
    item.addEventListener('mouseenter', function(e) {
      e.target.classList.add('drawing');
  });
});
}
