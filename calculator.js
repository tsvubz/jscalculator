function setupCalculator() {
  const current = document.querySelector(".curr-display");
  const previous = document.querySelector(".prev-display");
  const numbers = document.querySelectorAll(".number");
  const operands = document.querySelectorAll(".operation");
  const clear = document.querySelector(".clear");
  const del = document.querySelector(".delete");
  const equal = document.querySelector(".equal");
  let operation;

  function appendNumber(number) {
    if (number === "." && current.innerText.includes(".")) return;
    current.innerText += number;
  }

  function chooseOperation(operand) {
    if (current.innerText === "") return;
    compute(operand);
    operation = operand;
    current.innerText += operand;
    previous.innerText = current.innerText;
    current.innerText = "";
  }

  function clearDisplay() {
    current.innerText = "";
    previous.innerText = "";
  }

  function compute(operand) {
    let result;
    const prevValue = parseFloat(previous.innerText);
    const currValue = parseFloat(current.innerText);

    if (isNaN(prevValue) || isNaN(currValue)) return;

    switch (operation) {
      case "+":
        result = prevValue + currValue;
        break;
      case "-":
        result = prevValue - currValue;
        break;
      case "*":
        result = prevValue * currValue;
        break;
      case "/":
        result = prevValue / currValue;
        break;
      default:
        return;
    }

    current.innerText = result;
  }

  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      appendNumber(number.innerText);
    });
  });

  operands.forEach((operand) => {
    operand.addEventListener("click", () => {
      chooseOperation(operand.innerText);
    });
  });

  clear.addEventListener("click", () => {
    clearDisplay();
  });

  equal.addEventListener("click", () => {
    compute();
    previous.innerText = "";
  });

  del.addEventListener("click", () => {
    current.innerText = current.innerText.slice(0, -1);
  });
}

export { setupCalculator };