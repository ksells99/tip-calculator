// Clear all values on load

function init() {
    document.getElementById("bill-total").value = "";
    document.getElementById("tip-percent").value = "";
    document.getElementById("no-of-people").value = "";
    
    // Hide output div on load
    document.querySelector('.output').style.visibility = 'hidden';

    
}

window.onload = init;


function generateTip(billInput, tipPercent, numberPeople) {
    
    // Show output div    
    document.querySelector('.output').style.visibility = 'visible';


    // Get output text content from DOM
    let totalTipAmountText = document.querySelector('.total-tip-amount');
    let tipPerPersonText = document.querySelector('.tip-per-person');


    // Calculate tip values (total and per person)
    totalTipValue = (parseFloat(((billInput*1.0) / 100)*tipPercent)).toFixed(2);
    tipPerPersonValue = (parseFloat(((totalTipValue*1.0) / (numberPeople*1.0)))).toFixed(2);


    // Hide tip per person if value is infinity, not a number or less than £0.01
    if (isNaN(tipPerPersonValue) || tipPerPersonValue < 0.01 || tipPerPersonValue == "Infinity" || tipPerPersonValue == "-Infinity") {
        tipPerPersonText.style.visibility = 'hidden';
    } else {
        tipPerPersonText.style.visibility = 'visible';
    };


    // Display tip values            
    totalTipAmountText.innerHTML = `<b>£${totalTipValue}</b> total`;
    tipPerPersonText.innerHTML = `<b>£${tipPerPersonValue}</b> per person`;
         
};


// GET INPUT VALUE WHEN BILL AMOUNT ENTERED

document.getElementById('bill-total').addEventListener('input', function(e){

    // Get input values
    let billInput = e.target.value;
    let tipPercent = document.getElementById("tip-percent").value;
    let numberPeople = document.getElementById("no-of-people").value;

    // Pass these into generateTip function
    generateTip(billInput, tipPercent, numberPeople);
});



// GET INPUT VALUE WHEN TIP PERCENT ENTERED

document.getElementById('tip-percent').addEventListener('input', function(e){

    // Get input values
    let tipPercent = e.target.value;
    let billInput = document.getElementById("bill-total").value;
    let numberPeople = document.getElementById("no-of-people").value;

    // Pass these into generateTip function
    generateTip(billInput, tipPercent, numberPeople);
});



// GET INPUT VALUE WHEN NUMBER OF PEOPLE ENTERED

document.getElementById('no-of-people').addEventListener('input', function(e){

    // Get input values
    let numberPeople = e.target.value;
    let billInput = document.getElementById("bill-total").value;
    let tipPercent = document.getElementById("tip-percent").value;

    // Pass these into generateTip function
    generateTip(billInput, tipPercent, numberPeople);
});