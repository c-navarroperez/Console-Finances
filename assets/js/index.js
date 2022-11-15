/*
The JavaScript file finances.js contains a dataset composed of arrays with two fields, Date and Profit/Losses.
The following JavaScript code analyzes the records.
*/

/* Global Variables */ 
var totNumMonth = 0;
var totProfitLoss = 0;
var monthChangeTot = 0;
var avgMonthChange = 0
var greatestIncrease = 0;
var greatestIncreaseDate = 0;
var greatestDecrease = 0;
var greatestDecreaseDate = 0;


/* Main Code */

// Total number of months included in the dataset.
totNumMonth = finances.length;

for (var i = 0; i < finances.length; i++ ) {
    
    var monthChange = 0;    

    for(var j = 1; j < finances[i].length; j++) {
        // Net total amount of Profit/Losses over the entire period.
        totProfitLoss += finances[i][j];

        // Month to month comparisons will number one less than the total number of months
        if (i >= finances.length - 1) {
            break;
        } 
        // Total change in profits from month to month
        monthChange = finances[i+1][j] - finances[i][j];
        monthChangeTot += monthChange;

        // Greatest increase in profits (date and amount) over the entire period.
        if (greatestIncrease <= monthChange) {
            greatestIncrease = monthChange;
            greatestIncreaseDate = finances[i+1][0];
        } 
        // Greatest decrease in losses (date and amount) over the entire period.
        else if (greatestDecrease >= monthChange){
            greatestDecrease = monthChange;
            greatestDecreaseDate = finances[i+1][0];
        }
    } 
}
// Average month to month change in profits over the entire period.
avgMonthChange = monthChangeTot/(totNumMonth - 1);

/* Log to console */ 
console.log("Financial Analysis \n----------------------------");
console.log("Total months: ", totNumMonth);
console.log("Total: $" + totProfitLoss);
console.log("Average Change: " + avgMonthChange.toFixed(2));
console.log(`Greatest Increase in Profits: ${greatestIncreaseDate} ($${greatestIncrease})`);
console.log(`Greatest Dcrease in Profits: ${greatestDecreaseDate} ($${greatestDecrease})`);

      


