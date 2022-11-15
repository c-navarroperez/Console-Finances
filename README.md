# Console Finances

## The Repository

This repository contains the development of a [Financial Analysis application](), created to simulate a real-world scenario, where the financial records of a fictitious company are analysed using a financial records dataset provided in the [finances.js](https://github.com/c-navarroperez/Console-Finances/blob/main/assets/js/finances.js) file. This source code is available to everyone under the standard [MIT](LICENSE.txt) license.

## Analysis 

The financial analysis is achieved by using JavaScript code to perform the calculations for each of the following parameters:

* The total number of months included in the dataset.

* The net total amount of Profit/Losses incurred over the entire period.

* The average of the changes in Profit/Losses, month to month, over the entire period.

* The greatest increase in profits (date and amount) over the entire period.

* The greatest decrease in losses (date and amount) over the entire period.

In the browser, the resulting analysis is displayed to the console in the following format:

```text
Financial Analysis
----------------------------
Total months:  86
Total: $38382578
Average Change: $-2315.12
Greatest Increase in Profits: Feb-2012 ($1926159)
Greatest Decrease in Profits: Sep-2013 ($-2196167)
```

## Instructions

To analyse a different set of data please input the month date and the profit/loss for said month in the [finances.js](https://github.com/c-navarroperez/Console-Finances/blob/main/assets/js/finances.js) file with the following format: 

```text
var finances = [
['month-year', profits/losses], 
['month-year', profits/losses] 
];
```

## Feedback

* Please [file an issue](https://github.com/c-navarroperez/Console-Finances/issues).

---

## Copyright

© 2022 Carlos Navarro. All Rights Reserved.

Licensed under the [MIT](LICENSE.txt) license.