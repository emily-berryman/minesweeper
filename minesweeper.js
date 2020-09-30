document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 1,
      col: 1,
      isMine: true,
      hidden: true
  },
   {
      row: 2,
      col: 1,
      isMine: false,
      hidden: true
   }, 
   {
      row: 3,
      col: 1,
      isMine: false,
      hidden: true
   }, 
   {
      row: 1,
      col: 2,
      isMine: false,
      hidden: true
   }, 
  {
      row: 2,
      col: 2,
      isMine: false,
      hidden: true
  },
   {
      row: 3,
      col: 2,
      isMine: false,
      hidden: true
   }, 
   {
      row: 1,
      col: 3,
      isMine: false,
      hidden: true
   }, 
   {
      row: 2,
      col: 3,
      isMine: false,
      hidden: true,
   },
   {
      row: 3,
      col: 3,
      isMine: false,
      hidden: true,
   }
   
  ]
}

// PART 1: 
// Write a for loop that loops through the content of board.cells
// the loop should call the countSurroundingMines function once for each cell in board.cells - you will need to pass each cell as an argument (the bit in the parentheses)
// Assign the result of the countSurroundingMines to a property on each cell object - this new property should be called surroundingMines


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
      } else if (currentCell.hidden == true) {
         return;
      }
      }
       return lib.displayMessage('You win!')
   }



  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
 


   // If every mine is marked, but there are still cells with the hidden property set to true, the player hasn't won yet and you can return out of the function.
   // // Create a loop to run through the properties contained in each of the cells
   // // each cell should have .isMine & .isMarked should be true for 

   // or each cell, check to see if both .isMine and .isMarked are true. If any mine still exists that isn't marked, the player hasn't won yet and you can return to exit out of the function.

// // Define this function to count the number of mines around the cell
// // (there could be as many as 8). You don't have to get the surrounding
// // cells yourself! Just use `lib.getSurroundingCells`: 
// //
// //   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
// //
// // It will return cell objects in an array. You should loop through 
// // them, counting the number of times `cell.isMine` is true.
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

function countSurroundingMines(cellAskKelly) {
   var adjacentCells = getSurroundingCells(cellAskKelly.row, cellAskKelly.col)
   var count = 0
   for (var i = 0; i < adjacentCells.length; i++){
      if (adjacentCells[i].isMine == true){
         count++
      }
   }
   return count
}

