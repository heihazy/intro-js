function calculate(order) {
  var result;
  var firstInput = parseInt(document.getElementById("firstinput").value);
  var secondInput = parseInt(document.getElementById("secondinput").value);

  if (order === "add") {
    result = add(firstInput, secondInput);
  } else if (order === "subtract") {
    result = subtract(firstInput, secondInput);
  } else if (order === "multiply") {
    result = multiply(firstInput, secondInput);
  } else if (order === "divide") {
    result = divide(firstInput, secondInput);
  } else if (order === "pow") {
    result = Math.pow(firstInput, secondInput);
  } else if (order === "sqrt") {
    if (firstInput) {
      result = Math.sqrt(firstInput);
    } else if (secondInput) {
      result = Math.sqrt(secondInput);
    } else result = "Please give a number!!!!!";
  }
  document.getElementById("final-result").innerText = result;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function piFunction() {
  document.getElementById("final-result").innerHTML = Math.PI;
}
