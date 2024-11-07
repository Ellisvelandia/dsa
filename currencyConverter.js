// let currency = 100;

// let currencyInUSD = 0;

// function convertToUSD(currency) {
//   return currency * 1.1;
// }

// currencyInUSD = convertToUSD(currency);
// console.log(currencyInUSD);

// Conversion logic
// Initial USD amount
let usdAmount = 5000;

// Exchange rates for GBP (British Pound) and COP (Colombian Peso)
const gbpRate = 0.73; // 1 USD = 0.73 GBP
const copRate = 4397.16; // 1 USD = 4397.16 COP

// Get references to HTML elements
const inputAmount = document.getElementById("usd-amount"); // Input field for USD amount
const resultsDiv = document.querySelector(".results"); // Container for results

// Create paragraph elements to display conversion results
const gbpResult = document.createElement("p"); // For GBP result
const copResult = document.createElement("p"); // For COP result

// Add the paragraph elements to the results container
resultsDiv.appendChild(gbpResult);
resultsDiv.appendChild(copResult);

// Function to calculate and display currency conversions
function updateResults() {
  // Get current USD amount from input and convert to number
  usdAmount = Number(inputAmount.value);

  // Calculate converted amounts
  const gbpAmount = usdAmount * gbpRate; // Convert to GBP
  const copAmount = usdAmount * copRate; // Convert to COP

  // Update the display with formatted results
  gbpResult.textContent = `${usdAmount} USD = ${gbpAmount.toFixed(2)} GBP`;
  copResult.textContent = `${usdAmount} USD = ${copAmount.toFixed(2)} COP`;
}

// Listen for changes in the input field
inputAmount.addEventListener("input", updateResults);

// Initial call to display default values
updateResults();
