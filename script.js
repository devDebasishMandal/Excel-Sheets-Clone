const header = document.getElementById("header");
const body = document.getElementById("body");

for (let i = 65; i <= 90; i++) {
  //gives the ASCII value of the character
  let char = String.fromCharCode(i);
  const bold = document.createElement("b");
  bold.innerText = char;

  header.appendChild(bold);
}

// creating the rows  rows
function createRows(rowNumber) {
  const row = document.createElement("div");
  row.className = "row"; //for css

  for (let i = 64; i <= 90; i++) {
    // 27 colums
    if (i == 64) {
      //for the serial number cell 1st cell in the row
      const b = document.createElement("b");
      b.innerText = rowNumber;
      row.appendChild(b);
    } else {
      //  this is for the empty cell
      const cell = document.createElement("div");
      //to make the cells editable (contentEditable=true)
      cell.contentEditable = "true";
      //uniqueId={col}{row};for every cell giving id to display in page
      cell.id = `${String.fromCharCode(i)}${rowNumber}`;

      cell.addEventListener("focus", onCellFocus);

      row.appendChild(cell); //adding the column to row
    }
  }

  body.appendChild(row);
}
// alert("bkjbj");
// console.log("dondondon")

// to create 100 rows
for (let i = 1; i <= 100; i++) {
  createRows(i);
}
