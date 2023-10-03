let activeCellElement = document.getElementById("active-cell");
const textAlignElements = document.getElementsByClassName("text-align");
//for state management (properties of the cell)
let activeCell = null;
let activeOptionsState;
const defaultOptionsState = {
  fontFamily: "",
  isBoldSelected: false,
  isItalicSelected: false,
  isUnderLineSelected: false,
  textAlign: "left", //or right or center
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
  activeCell = event.target;
  // show activecell in page
  activeCellElement.innerText = event.target.id;
  //getting all the pre defined styles of the content inside the cell
  const computedStyle = getComputedStyle(activeCell);
  //initalizing active state with default values
  activeOptionsState = {
    fontFamily: computedStyle.fontFamily,
    isBoldSelected: computedStyle.fontWeight === "600",
    isItalicSelected: computedStyle.fontStyle === "italic",
    isUnderLineSelected: computedStyle.textDecoration === "underline",
    textAlign: computedStyle.textAlign, //or right or center
    textColor: computedStyle.color,
    backgroundColor: computedStyle.backgroundColor,
    fontSize: computedStyle.fontSize,
  };
}


function onClickBold(boldButton) {
  // 1.this fucntion will be triggred when user clicks bold button
  boldButton.classList.toggle("active-options");
  if (activeCell) {
    if (activeOptionsState.isBoldSelected === false) {
      activeCell.style.fontWeight = "600";
      activeOptionsState.isBoldSelected = true;
    } else {
      activeCell.style.fontWeight = "400";
      activeOptionsState.isBoldSelected = false;
    }
  }
}

function onClickItalic(italicButton) {
  italicButton.classList.toggle("active-options");
  if (activeCell) {
    if (activeOptionsState.isItalicSelected) {
      activeCell.style.fontStyle = "normal";
      activeOptionsState.isItalicSelected = false;
    } else {
      activeCell.style.fontStyle = "italic";
      activeOptionsState.isItalicSelected = true;
    }
  }
}

function onClickUnderline(underLineButton) {
  underLineButton.classList.toggle("active-options");
  // console.log(getComputedStyle(activeCell).textDecoration);
  if (activeCell) {
    if (activeOptionsState.isUnderLineSelected) {
      activeCell.style.textDecoration = "none";
      activeOptionsState.isUnderLineSelected = false;
    } else {
      activeCell.style.textDecoration = "underline";
      activeOptionsState.isUnderLineSelected = true;
    }
  }
}

//will take text align value as param and highlight accordingly
function highlightTextAlignButtons(textAlignValue) {
  // if textAlign===left => highlight only left
  // if textAlign===right =>highlight only right
  // if textAlign===center => highlight only center
  //check weather the custom attribute data-value ===textalignValue else remove highlight class
  for(let i=0;i<textAlignElements.length;i++){
    if(textAlignElements[i].getAttribute("data-value")==textAlignValue){
    textAlignElements[i].classList.add("active-options");
    }else{
    textAlignElements[i].classList.remove("active-options");
    }
  }
}
//here we get the button selected 
function onClickTextAlign(textAlignButton) {
  let selectedValue = textAlignButton.getAttribute("data-value");
  //  console.log(selectedValue);
highlightTextAlignButtons(selectedValue);

// to change the text aline of the cell
if(activeCell){
  activeCell.style.textAlign=selectedValue;
  activeOptionsState.textAlign=selectedValue;
}
}



//this function triggered when the text color is changed
function onChangeTextColor(textColorInput){
  let selectedColor=textColorInput.value;
  if(activeCell){
    activeCell.style.color=selectedColor;
    activeOptionsState.color=selectedColor;
  }
}
//this function triggered when the background color is changed
function onChangeBackgroundColor(backgroundColorInput){
  console.log(backgroundColorInput)
  let selectedBgColor=backgroundColorInput.value;
  console.log(selectedBgColor)
  if(activeCell){
    activeCell.style.backgroundColor=selectedBgColor;
    activeOptionsState.backgroundColor=selectedBgColor;
  }
} 