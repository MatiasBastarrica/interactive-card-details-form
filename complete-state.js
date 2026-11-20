let complete_state = document.querySelector(".complete-state");

let form = document.querySelector(".form-wrapper");

export function showCompelteState() {
  form.classList.toggle("hidden");
  complete_state.classList.toggle("hidden");
}
