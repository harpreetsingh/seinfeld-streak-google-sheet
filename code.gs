// The function creates a Seinfeld "done" and a "not done" streak
// It expects a series of dates to be in columns
// yesterdaysRow: Row number of the column that has yesterday's date; 
// Use the following function =MATCH(Today()-1, A:A, 0) to count the row where todays date is present
// startingRow: Row number from where the dates start (ascending)
// streakIdentifier: a character typically "x" for done, empty for not done
// returns the number of days the streak has run counting the days backwards

function getCurrentStreak(yesterdaysRow, startingRow, streakIdentifier) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var column = sheet.getActiveCell().getColumn();
  console.log("Current Column = "+ column);

  var rowsToCount = yesterdaysRow - startingRow + 1;

  var range = sheet.getRange(startingRow, column, rowsToCount);
  var data = range.getValues();
  
  console.log("data length "+ data.length);
  var streak = 0;
  for (var i = data.length -1; i >= 0; i--) {
    if (data[i][0] == streakIdentifier) {
      // console.log("Row: " + i);
      streak++;
    } else {
      break;  // Stop counting when a gap is found
    }
  }
  
//   console.log(streak);
  return streak;
}
