// Simple Addition Calculator

// Event Listener
document.getElementById('calc-btn').addEventListener('click', calcTotal);

//Event Function
function calcTotal() {
    //INPUT - Get two numbers
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    console.log(num1);
    console.log(typeof(num1));

    //PROCESS - Add the two numbers 
    let total = num1 + num2;

    //OUTPUT - Display the total
    document.getElementById('result').innerHTML = total;

}