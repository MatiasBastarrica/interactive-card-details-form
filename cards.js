const elements = {
  cvc: document.querySelector(".card-back__cvc"),
  cardNumGroups: [
    document.querySelector(".first-num-group"),
    document.querySelector(".second-num-group"),
    document.querySelector(".third-num-group"),
    document.querySelector(".fourth-num-group"),
  ],
  name: document.querySelector(".card-front__name"),
  expiration_month: document.querySelector(".expiration-month"),
  expiration_year: document.querySelector(".expiration-year"),
  cvc: document.querySelector(".card-back__cvc"),
};

export function updateName(value) {
  elements.name.innerText = value;
}

export function updateCardNumber(value) {
  let cleanedValue = value.split(" ").join("");

  if (cleanedValue.length > 16) {
    return;
  }
  let paddedValue = cleanedValue.padEnd(16, "0");
  Array.from(paddedValue).forEach((num, index) => {
    let groupTarget;

    if (index <= 3) {
      groupTarget = elements.cardNumGroups[0];
    } else if (index <= 7) {
      groupTarget = elements.cardNumGroups[1];
    } else if (index <= 11) {
      groupTarget = elements.cardNumGroups[2];
    } else {
      groupTarget = elements.cardNumGroups[3];
    }

    let prevNumberArr = groupTarget.innerText.split("");
    prevNumberArr[index % 4] = num;
    groupTarget.innerText = prevNumberArr.join("");
  });
}

export function updateMonth(value) {
  elements.expiration_month.innerText = value;
}

export function updateYear(value) {
  elements.expiration_year.innerText = value;
}

export function updateCvc(value) {
  let paddedValue = value.padEnd(3, "0");
  elements.cvc.innerText = paddedValue;
}

export function resetCards() {
  elements.cardNumGroups.forEach((cardNumGroup) => {
    cardNumGroup.innerText = "0000";
  });
  elements.name.innerText = "Jane Applesead";
  elements.expiration_month.innerText = "00";
  elements.expiration_year.innerText = "00";
  elements.cvc.innerText = "000";
}
