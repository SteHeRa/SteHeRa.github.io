let windowWidth = window.innerWidth;
let chart = document.getElementById('chart');
let cols = [];
class bar {
    constructor(value, index, pivot, highlight) {
    this.value = value;
    this.index = index;
    this.pivot = pivot;
    this.highlight = highlight;
    }
}

let slider = document.getElementById("colSlider");
let output = document.getElementById("colCount");
output.innerHTML = `${slider.value} Columns`; // Display the default slider value

for(let i=0; i<50; i++){
    let newCol = document.createElement('div');
    let newColValue = Math.floor(Math.random() * 700) + 1;
    cols[i] = new bar (newColValue, i, false, false);
    newCol.id = i;
    // console.log(newCol.id)
    newCol.style.height = `${newColValue}px`;
    newCol.style.width = `${((windowWidth*0.6)-(50*2))/50}px`;  //Setting up columns before slider has been touched.
    document.getElementById("chart").appendChild(newCol); 
}

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = `${this.value} Columns`;
  cols = [];
  while (chart.firstChild) {
      chart.removeChild(chart.firstChild);
  }
  for(let i=0; i<this.value; i++){      // Generating new bars when slider is moved
    let newCol = document.createElement('div');
    let newColValue = Math.floor(Math.random() * 700) + 1;
    cols[i] = new bar (newColValue, i, false, false);
    newCol.id = i;
    newCol.style.height = `${newColValue}px`;
    newCol.style.width = `${((windowWidth*0.6)-(this.value*2))/this.value}px`;  //adapting the width of the colums to the number of columns there are
    document.getElementById("chart").appendChild(newCol);                       //so that it fits into the 'container' which is 60% of the window
    }
}
