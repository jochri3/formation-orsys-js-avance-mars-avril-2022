import Fedex from "./strategies/Fedex.js";
import ShippingCtx from "./strategies/ShippingCtx.js";
import UPS from "./strategies/Ups.js";
import USPS from "./strategies/Usps.js";

const form = document.querySelector("#form");

const pkg = {
  weight: 4,
  name: "Laptop",
};

form.addEventListener("input", (e) => {
  console.log(e.target.value);
  const shipping = new ShippingCtx();
  if (e.target.value === "fedex") {
    shipping.setStrategy(new Fedex());
  } else if (e.target.value === "ups") {
    shipping.setStrategy(new UPS());
  } else if (e.target.value === "usps") {
    shipping.setStrategy(new USPS());
  }
  const poids = document.querySelector("#weight").value;
  document.querySelector("#cout").innerText = shipping.calculatePrice(
    parseFloat(poids)
  );
});
