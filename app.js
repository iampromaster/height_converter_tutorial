const form = document.querySelector("form");

form.addEventListener("submit", e => {
  let feetInput = document.querySelector("#feet");
  let inchesInput = document.querySelector("#inches");

  const results = document.querySelector("#result");

  e.preventDefault();

  let feet = parseInt(feetInput.value);
  let inches = parseInt(inchesInput.value);

  if (isNaN(feet) || isNaN(inches)) {
    results.textContent = "Please enter a valid number!";
  } else if (feet < 0) {
    results.textContent = "Please enter a feet value bigger than 0.";
  } else if (inches < 0 || inches >= 12) {
    results.textContent = "Please enter an inch value between 0 and 12";
  } else {
    let totalInches = feet * 12 + inches;
    let cm = totalInches * 2.54;
    results.textContent = `${cm.toFixed(2)} cm`;
    feetInput.value = "";
    inchesInput.value = "";
  }
});
