const main = document.querySelector("main");
const accounts = ["Checking", "eFund", "Mia"];

for (let account of accounts) {
  main.insertAdjacentHTML("beforeend", `<p>${account}</p>`);
}
