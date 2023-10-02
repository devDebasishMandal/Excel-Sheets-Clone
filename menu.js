let activeCellElement = document.getElementById("active-cell");

//for state management (properties of the cell)
let activeCell = null;

const defaultOptionsState = {
  fontFamily: "",
  isBoldSelected: false,
  isItallicSelected: false,
  isUnderLineSelected: false,
  textAlign: "left",
  textColor: "#000",
  backgroundColor: "#fff",
  fontSize: 14,
};

// this function gets triggred whenever cell is focused
function onCellFocus(event) {
  //to get cell id on focus on the cell
  // console.log(event.target.id);
  //to get the current selected cell
  //put it's ID in activeCell variable
  activeCell = event.target.id;
  // show activecell in page
  activeCellElement.innerText = activeCell;
}
