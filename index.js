// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

//  function superBowlWin(record){
//     const win = record.find(games => game.team === "Denver Broncos football" && game.result==="W");
//     return win ? win.year:undefined;
//  }

function superbowlWin(records) {

    const winner = records.find(record => record.result === "W");   
    return winner ? winner.year : undefined;
 }
 let yearWon = superbowlWin(record);
 

console.log(yearWon)