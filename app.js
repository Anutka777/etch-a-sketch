// Container for grid
const gridNet = document.getElementById('grid-net');

let gridItemInOneLine = 16;
makePad(gridItemInOneLine);
drawing();

// Making gird-net for drawing pad
function makePad(gridItemInOneLine) {
  let gridItemArray = [];
  for (i = 1; i <= (gridItemInOneLine ** 2); i++) {
    gridItemArray.push(i);
  }
  console.log(gridItemArray);
  document.getElementById('grid-net').style.cssText = `grid-template-columns: repeat(${gridItemInOneLine}, 1fr);
    grid-template-rows: repeat(${gridItemInOneLine}, 1fr);`;
  gridItemArray.forEach(function(el) {
    let gridItem = document.createElement('div');
    gridItem.className = 'grid-item'
    gridItem.id = `grid-item-${el}`;
    gridNet.appendChild(gridItem);
  });
}

// Reset Button
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', reset);

function reset() {
  while(gridNet.firstChild) {
    gridNet.firstChild.remove();
  }
  gridItemInOneLine = prompt ('How many squares in one line do you prefer? \nPlease don\'t chose number > 100');
  if (gridItemInOneLine > 100) {
    alert ("Please limimt yourself with numbers <= 100");
    reset();
  } else {
    makePad(gridItemInOneLine);
    drawing();
  }
}


// Drawing by mouse move
function drawing() {
  Array.from(document.getElementsByClassName('grid-item')).forEach(function(item) {
    item.addEventListener('mouseenter', function(e) {
      e.target.classList.add('drawing');
  });
});
}
