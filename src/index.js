import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "../images/icon-location.svg";
import { addTileLayer, validateIp } from "./helpers";

export const IP_URL =
  "https://geo.ipify.org/api/v2/country?apiKey=at_PMr2hhHYvxhH6OA4YM5tGU9eSf5ps&ipAddress=";

var greenIcon = L.icon({
  iconUrl: icon,

  iconSize: [30, 40],
  color: "#111111",
});

const ipInput = document.querySelector(".search-bar__input");
const btn = document.querySelector(".search-bar__btn");
const ipInfo = document.querySelector("#ip");
const locationInfo = document.querySelector("#location");
const timezoneInfo = document.querySelector("#timezone");
const ispInfo = document.querySelector("#isp");
const mapArea = document.querySelector(".map");
const map = L.map(mapArea, {
  center: [51.505, -0.09],
  zoom: 13,
});
addTileLayer(map);
L.marker([51.5, -0.09], { icon: greenIcon }).addTo(map);

btn.addEventListener("click", getData);
ipInput.addEventListener("keydown", handleKey);

function getData() {
  const ip = ipInput.value;

  if (validateIp(ip)) {
    fetch(`${IP_URL}${ip}`)
      .then((resp) => resp.json())
      .then((data) => {
        const { ip, isp, location } = data;
        fillInfo(ip, location.region, location.timezone, isp);
      });
  }
}

function handleKey(event) {
  if (event.keyCode === 13) {
    getData();
  }
}

function fillInfo(ip, location, timezone, isp) {
  console.log("ENTER");
  ipInfo.innerText = ip;
  locationInfo.innerText = location;
  timezoneInfo.innerText = timezone;
  ispInfo.innerText = isp;
}
