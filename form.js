import {
  updateName,
  updateCardNumber,
  updateMonth,
  updateYear,
  updateCvc,
} from "./cards.js";

import { showCompelteState } from "./complete-state.js";

export const elements = {
  cardholderName: document.querySelector("#cardholder-name"),
  cardNumber: document.querySelector("#card-number"),
  month: document.querySelector("#month"),
  year: document.querySelector("#year"),
  cvc: document.querySelector("#cvc"),

  btn: document.querySelector("form > button"),
};

const validationPatterns = {
  emptyString: /^$/,
  numericOnly: /^\d+$/,
  cardNumber: /\d{4}(\s\d{4}){3}/,
  month: /^(?:0[0-9]|1[0-2])$/,
  year: /^\d{2}$/,
  cvc: /^\d{3}$/,
  numericAndSpaces: /^[0-9\s]+$/,
};

function checkEmptyInput(element) {
  return validationPatterns.emptyString.test(element.value);
}

function checkNumericOnlyInput(element) {
  return validationPatterns.numericOnly.test(element.value);
}

function checkNumericAndSpacesInput(element) {
  return validationPatterns.numericAndSpaces.test(element.value);
}

function checkCardNumberInput(element) {
  return validationPatterns.cardNumber.test(element.value);
}

function checkMonth(element) {
  const invalidMsg = element.nextElementSibling;
  if (validationPatterns.month.test(element.value)) {
    return "Wrong format, pattern example: 09";
  }
}

function checkYear(element) {
  const invalidMsg = element.nextElementSibling;
  if (validationPatterns.year.test(element.value)) {
    return "Wrong format, pattern example: 01";
  }
}

function checkCvc(element) {
  const invalidMsg = element.nextElementSibling;
  if (validationPatterns.cvc.test(element.value)) {
    return "Wrong format, pattern example: 123";
  }
}

elements.cardholderName.addEventListener("input", (e) => {
  updateName(e.target.value);
});

elements.cardNumber.addEventListener("input", (e) => {
  updateCardNumber(e.target.value);
});

elements.month.addEventListener("input", (e) => {
  updateMonth(e.target.value);
});

elements.year.addEventListener("input", (e) => {
  updateYear(e.target.value);
});

elements.cvc.addEventListener("input", (e) => {
  updateCvc(e.target.value);
});

elements.btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("SUBMITTING...");
  const invalidMsgCardholderName = elements.cardholderName.nextElementSibling;
  const invalidMsgCardNumber = elements.cardNumber.nextElementSibling;
  const invalidMsgMonthAndYear =
    elements.month.parentElement.nextElementSibling;
  const invalidMsgCvc = elements.cvc.nextElementSibling;
  let allValid = true;

  if (checkEmptyInput(elements.cardholderName)) {
    invalidMsgCardholderName.classList.remove("hidden");
    invalidMsgCardholderName.innerText = "Can't be blank";
    elements.cardholderName.setCustomValidity("Can't be blank");
    allValid = false;
  } else {
    invalidMsgCardholderName.classList.add("hidden");
    elements.cardholderName.setCustomValidity("");
  }

  if (checkEmptyInput(elements.cardNumber)) {
    invalidMsgCardNumber.classList.remove("hidden");
    invalidMsgCardNumber.innerText = "Can't be blank";
    elements.cardNumber.setCustomValidity("Can't be blank");
    allValid = false;
  } else if (!checkNumericAndSpacesInput(elements.cardNumber)) {
    invalidMsgCardNumber.classList.remove("hidden");
    invalidMsgCardNumber.innerText = "Wrong format, numbers only";
    elements.cardNumber.setCustomValidity("Wrong format, numbers only");
    allValid = false;
  } else if (!checkCardNumberInput(elements.cardNumber)) {
    invalidMsgCardNumber.classList.remove("hidden");
    invalidMsgCardNumber.innerText =
      "Wrong format, pattern example: 9591 6489 6389 1010";
    elements.cardNumber.setCustomValidity(
      "Wrong format, pattern example: 9591 6489 6389 1010",
    );
    allValid = false;
  } else {
    invalidMsgCardNumber.classList.add("hidden");
    elements.cardNumber.setCustomValidity("");
  }

  if (checkEmptyInput(elements.month)) {
    invalidMsgMonthAndYear.classList.remove("hidden");
    invalidMsgMonthAndYear.innerText = "Can't be blank";
    elements.month.setCustomValidity("Can't be blank");
    allValid = false;
  } else if (!checkNumericOnlyInput(elements.month)) {
    invalidMsgMonthAndYear.classList.remove("hidden");
    invalidMsgMonthAndYear.innerText = "Wrong format, numbers only";
    elements.month.setCustomValidity("Wrong format, numbers only");
    allValid = false;
  } else if (!checkMonth(elements.month)) {
    invalidMsgMonthAndYear.classList.remove("hidden");
    invalidMsgMonthAndYear.innerText = "Wrong format, pattern example: 09";
    elements.month.setCustomValidity("Wrong format, pattern example: 09");
    allValid = false;
  } else if (checkEmptyInput(elements.year)) {
    elements.month.setCustomValidity("");
    invalidMsgMonthAndYear.classList.remove("hidden");
    invalidMsgMonthAndYear.innerText = "Can't be blank";
    elements.year.setCustomValidity("Can't be blank");
    elements.year.setCustomValidity("Can't be blank");
    allValid = false;
  } else if (!checkNumericOnlyInput(elements.year)) {
    invalidMsgMonthAndYear.classList.remove("hidden");
    invalidMsgMonthAndYear.innerText = "Wrong format, numbers only";
    elements.year.setCustomValidity("Wrong format, numbers only");
    allValid = false;
  } else if (!checkMonth(elements.year)) {
    invalidMsgMonthAndYear.classList.remove("hidden");
    invalidMsgMonthAndYear.innerText = "Wrong format, pattern example: 01";
    elements.year.setCustomValidity("Wrong format, pattern example: 01");
    allValid = false;
  } else {
    invalidMsgMonthAndYear.classList.add("hidden");
    elements.year.setCustomValidity("");
  }

  if (checkEmptyInput(elements.cvc)) {
    invalidMsgCvc.classList.remove("hidden");
    invalidMsgCvc.innerText = "Can't be blank";
    allValid = false;
    elements.cvc.setCustomValidity("Can't be blank");
  } else if (!checkNumericOnlyInput(elements.cvc)) {
    invalidMsgCvc.classList.remove("hidden");
    invalidMsgCvc.innerText = "Wrong format, numbers only";
    elements.cvc.setCustomValidity("Wrong format, numbers only");
    allValid = false;
  } else if (!checkCvc(elements.cvc)) {
    invalidMsgCvc.classList.remove("hidden");
    invalidMsgCvc.innerText = "Wrong format, pattern example: 123";
    elements.cvc.setCustomValidity("Wrong format, pattern example: 123");
    allValid = false;
  } else {
    invalidMsgCvc.classList.add("hidden");
    elements.cvc.setCustomValidity("");
  }

  if (allValid) {
    showCompelteState();
  }
});
