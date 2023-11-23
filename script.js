import { accounts } from "./config.js";
console.log(accounts);

const main = document.querySelector("main");

for (let account of accounts) {
  main.insertAdjacentHTML("beforeend", `<p>${account}</p>`);
}
