/*
You have been given a dataset composed of arrays with two fields, Date and Profit/Losses.
Your task is to write JavaScript code that analyzes the records to calculate each of the following:
*/

/* Global Variables */ 
var totNumMonth = 0;
var totProfitLoss = 0;
var monthChangeTot = 0;
var avgMonthChange = 0
var currentHigh = 0;

/* Main body */

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
    } 
}
// Average month to month change in profits over the entire period.
avgMonthChange = monthChangeTot/(totNumMonth - 1);


/* Log to console */ 
console.log("Financial Analysis \n----------------------------");
console.log("Total months: ", totNumMonth);
console.log("Total: $" + totProfitLoss);
console.log("Average Change: " + avgMonthChange.toFixed(2));
      


    // The greatest increase in profits (date and amount) over the entire period.


    // The greatest decrease in losses (date and amount) over the entire period.
