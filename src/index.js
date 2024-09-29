export const IP_URL =
  "https://geo.ipify.org/api/v2/country?apiKey=at_PMr2hhHYvxhH6OA4YM5tGU9eSf5ps&ipAddress=";

const ipInput = document.querySelector(".search-bar__input");
const btn = document.querySelector(".search-bar__btn");

btn.addEventListener("click", getData);
ipInput.addEventListener("keydown", handleKey);

function getData() {
  // валидация данных
  fetch(`${IP_URL}${ipInput.value}`)
    .then((resp) => resp.json())
    .then((data) => console.log(data));
}

function handleKey(event) {
  if (event.keyCode === 13) {
    getData();
  }
}
