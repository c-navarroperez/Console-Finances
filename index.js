/*
You have been given a dataset composed of arrays with two fields, Date and Profit/Losses.
Your task is to write JavaScript code that analyzes the records to calculate each of the following:
*/

var totNumMonth = 0;
var totProfitLoss = 0;


console.log("Financial Analysis \n----------------------------");

// The total number of months included in the dataset.
totNumMonth = finances.length;
console.log("Total months: ", totNumMonth);

// The net total amount of Profit/Losses over the entire period.
for(var i = 0; i < finances.length; i++) { 
    var month = finances[i];
    totProfitLoss += month [1];
}

console.log("Total: $" + totProfitLoss);

    // The average of the changes in Profit/Losses over the entire period.


        /* You will need to track what the total change in profits are 
        //from month to month and then find the average. */


        // (Total/Number of months)



    // The greatest increase in profits (date and amount) over the entire period.


    // The greatest decrease in losses (date and amount) over the entire period.