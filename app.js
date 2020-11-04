// Container for grid
const gridNet = document.getElementById('grid-net');

// reset-button with event listener
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', reset);

// Pick color buttons event listeners
let penColor = 'black';
colorBlack = document.getElementById('black');
colorBlack.addEventListener('click', pickBlack);
colorRainbow = document.getElementById('rainbow');
colorRainbow.addEventListener('click', pickRainbow);
colorPencil = document.getElementById('pencil');
colorPencil.addEventListener('click', pickPencil);

function pickRainbow() {
  penColor = 'rainbow';
}

function pickBlack() {
  penColor = 'black';
}

function pickPencil() {
  penColor = 'pencil';
}

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

// Change style of grid-item by hovering
function drawing() {

  // For pencil-case
  let hoverCount = 0;
  Array.from(document.getElementsByClassName('grid-item')).forEach(function(item) {
    item.addEventListener('mouseenter', function(e) {
      if (penColor === 'pencil') {

        // Assign black color with rgba(0,0,0,[add 0.1 with each step])
        hoverCount += 1;
        if (hoverCount === 10) {
          hoverCount = 0;
        }
        e.target.style.backgroundColor = `rgba(0, 0, 0, 0.${hoverCount})`;
      } else if (penColor === 'rainbow') {

        // Assign random color
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      } else {

        // Assign black color
        e.target.style.backgroundColor = 'black';
      }
  });
});
}

// TODO: Add rgba change only for one grid-item