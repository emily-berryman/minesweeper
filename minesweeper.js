document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 1,
      col: 1,
      isMine: true,
      isMarked: false,
      hidden: true
  },
   {
      row: 2,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true
   }, 
   {
      row: 3,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true
   }, 
   {
      row: 1,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true
   }, 
  {
      row: 2,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true
  },
   {
      row: 3,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true
   }, 
   {
      row: 1,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true
   }, 
   {
      row: 2,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true
   },
   {
      row: 3,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true
   }
   
  ]
}

// PART 1: 
// Write a for loop that loops through the content of board.cells
// the loop should call the countSurroundingMines function once for each cell in board.cells - you will need to pass each cell as an argument (the bit in the parentheses)
// Assign the result of the countSurroundingMines to a property on each cell object - this new property should be called surroundingMines
// only need to put an argument in the brackets when we the function to run the function for different things

function startGame () {
  for(var i = 0; i < board['cells'].length; i++){
      var currentCell = board.cells[i]
      currentCell.surroundingMines = countSurroundingMines(currentCell)
 }
   lib.initBoard()     
   document.addEventListener("click", checkForWin)
   document.addEventListener("contextmenu", checkForWin)
   }
  
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
   for(var i = 0; i < board.cells.length; i++){
      var currentCell = board.cells[i]
      if (currentCell.isMine == true && currentCell.isMarked == false) {
         return;
      } else if (currentCell.hidden == true && currentCell.isMine == false) {
         return;
      }
      }
       return lib.displayMessage('You win!')
   }


// function countSurroundingMines (cell) {
// //    var row = board.cells.row
// //    var col = board.cells.col
// //    var surrounding = lib.getSurroundingCells()
// //    var count = 0
// //    for (var i = 0; i < surrounding.length; i++ ){
// //    return surrounding[i]
// //    }
// }

// What we want: 

//write a function: countSurroundingMines 

// which takes in a cell and gives us the number of mines 

// 1. Get the row & col from the cell
// 2. Use getSurroundingCells to get the array of adjacent cells
// 3. loop over and count the number of mines

function countSurroundingMines(cell) {
   var adjacentCells = getSurroundingCells(cell.row, cell.col)
   var count = 0
   for (var i = 0; i < adjacentCells.length; i++){
      if (adjacentCells[i].isMine == true){
         count++
      }
   }
   return count
}
 
