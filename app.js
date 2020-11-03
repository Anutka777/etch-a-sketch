const gridNet = document.getElementById('grid-net');

let gridItemArray = [];
let gridItemCount = 256;
for (i = 1; i <= gridItemCount; i++) {
  gridItemArray.push(i);
}

gridItemArray.forEach(function(el) {
  let gridItem = document.createElement('div');
  gridItem.className = 'grid-item'
  gridItem.id = `grid-item-${el}`;
  gridNet.appendChild(gridItem);
  });

Array.from(document.getElementsByClassName('grid-item')).forEach(function(item) {
  item.addEventListener('mouseenter', function(e) {
    e.target.classList.add('drawing');
  });
});
 