//select color input
const color = document.getElementById("colorPicker");
//select size input
const table = document.getElementById("pixelCanvas");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const removeGridBtn = document.getElementById("remove-grid");

//when size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
  event.preventDefault();
  makeGrid(height, width);
});

//the makeGrid() function
function makeGrid(height, width) {
  for(let i = 0; i < height.value; i++){
    let row = table.insertRow(i);
    for(let j = 0; j < width.value ; j++){
      let cell = row.insertCell(j);
      cell.addEventListener("click", function(event) {
        cell.style.backgroundColor = color.value;
      }
      );
    }
  }
}

//Remove Grid
removeGridBtn.addEventListener("click", () => {
  table.innerHTML = "";
});
