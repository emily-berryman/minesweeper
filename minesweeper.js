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
  for(var i = 0; i < board['cells'].length; i++) 
   var cell = board['cells'][i]
   {
   var mineCount = countSurroundingMines(cell) 
   mineCount = board['cells'].surroundingMines
   //   if(board['cells'][i].isMine == true){
   //      console.log(board['cells'][i].row + "," + board['cells'][i].col)
   lib.initBoard()     
   }
  }


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
//    var row = board.cells.row
//    var col = board.cells.col
//    var surrounding = lib.getSurroundingCells()
//    var count = 0
//    for (var i = 0; i < surrounding.length; i++ ){
//    return surrounding[i]
//    }
}

console.log(board)

// a new function takes a cell as an argument, creates a new variable that is equal to the surrounding cells (using  lib.getSurroundingCells that they provided and calling it on the row and col of the cell) and another new variable (that I named count) that is equal to 0.
// The function cycles through so long as i<surrounding.length and IF the i'th value of surrounding isMine then count increases by one.
// Finally the count is returned.

countSurroundingMines()
