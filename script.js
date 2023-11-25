import { accounts } from "./config.js";
console.log(accounts);

const main = document.querySelector("main");
const accountInput = document.querySelector("#account-name");
const accountButton = document.querySelector("#account-button");
const accountForm = document.querySelector("#account-form");
const testParagraph = document.querySelector("#test");

accountForm.addEventListener("submit", (event) => event.preventDefault());

for (let account of accounts) {
  main.insertAdjacentHTML("beforeend", `<p>${account}</p>`);
}

accountButton.addEventListener("click", (event) => {
  if (accountInput.value) {
    main.insertAdjacentHTML("beforeend", `<p>${accountInput.value}</p>`);
  } else {
    console.log("field empty");
  }
});

onkeydown = (event) => {
  if (event.key === "Enter") {
    if (accountInput === document.activeElement) {
      accountButton.click();
    }
  }
};
