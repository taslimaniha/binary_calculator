function pressBinary(value) {
  var binaryInput = document.getElementById("binary_input");
  binaryInput.value += value;
}

function equalBinary() {
  var binaryInput = document.getElementById("binary_input").value;
  
  //split binary operands
  var operands = binaryInput.split(/[+\-]/);
  var operatorIndex = binaryInput.indexOf("+") !== -1 ? binaryInput.indexOf("+") : binaryInput.indexOf("-");
  var operator = binaryInput.charAt(operatorIndex);

  // Convert binary operands to decimal
  var operand1 = parseInt(operands[0], 2);
  var operand2 = parseInt(operands[1], 2);

  // Perform arithmetic operation
  var result;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    default:
      result = "Invalid operation";
  }

  // Display the result in decimal format
   alert("Result: " + result);
 }