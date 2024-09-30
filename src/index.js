import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "../images/icon-location.svg";
import { addTileLayer, validateIp, getAddress, addOffset } from "./helpers";

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
  const ip = ipInput.value.trim();

  if (validateIp(ip)) {
    getAddress(ip).then(({ ip, location, isp }) => {
      fillInfo(ip, location, isp);
    });
  }
}

function handleKey(event) {
  if (event.keyCode === 13) {
    getData();
  }
}

export function fillInfo(ip, location, isp) {
  const { city, lat, lng, timezone } = location;
  map.setView([lat, lng], 13);
  L.marker([lat, lng], { icon: greenIcon }).addTo(map);
  if (matchMedia("(width <= 1024px)").matches) {
    addOffset(map);
  }

  ipInfo.innerText = ip;
  locationInfo.innerText = city;
  timezoneInfo.innerText = timezone;
  ispInfo.innerText = isp;
}

document.addEventListener("DOMContentLoaded", () => {});
