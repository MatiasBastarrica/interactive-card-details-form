import { resetForm } from "./form.js";

let complete_state = document.querySelector(".complete-state");
let btn = complete_state.querySelector("button");

let form = document.querySelector(".form-wrapper");

export function toggleCompelteState() {
  form.classList.toggle("hidden");
  complete_state.classList.toggle("hidden");
}

btn.addEventListener("click", (e) => {
  resetForm();
  toggleCompelteState();
});
