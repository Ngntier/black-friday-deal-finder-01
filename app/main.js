// main.js — wires DealHound together: reads the controls, filters and sorts
// the deals, renders the list or a detail page, and handles hash routing.

import { CATEGORIES, DEALS, STORES } from "./data.js";
import { filterDeals, renderDetail, renderList, sortDeals, statsBar } from "./views.js";

const view = document.getElementById("view");
const searchBox = document.getElementById("search");
const categorySelect = document.getElementById("category");
const storeSelect = document.getElementById("store");
const discountSelect = document.getElementById("min-discount");
const sortSelect = document.getElementById("sort");
const lowOnlyBox = document.getElementById("new-low-only");

function fillOptions(select, values) {
  for (const value of values) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  }
}

function renderStats() {
  const stats = statsBar();
  document.getElementById("stat-deals").textContent = stats.total;
  document.getElementById("stat-lows").textContent = stats.lows;
  document.getElementById("stat-avg").textContent = stats.avg + "%";
  document.getElementById("stat-biggest").textContent = "$" + Math.round(stats.biggest.usual - stats.biggest.sale).toLocaleString("en-US");
}

function renderRoute() {
  const hash = location.hash;
  const sortLabels = { best: "best deals first", discount: "biggest discount first", saving: "biggest saving first", price: "lowest price first" };
  if (hash.startsWith("#/deal/")) {
    const id = decodeURIComponent(hash.slice("#/deal/".length));
    const deal = DEALS.find((d) => d.id === id);
    view.innerHTML = deal ? renderDetail(deal) : renderList(sortDeals(filterDeals("", "All", "All", 0, false), "best"), DEALS.length, sortLabels.best);
    window.scrollTo(0, 0);
    return;
  }
  const filtered = filterDeals(
    searchBox.value,
    categorySelect.value,
    storeSelect.value,
    Number(discountSelect.value),
    lowOnlyBox.checked,
  );
  view.innerHTML = renderList(sortDeals(filtered, sortSelect.value), DEALS.length, sortLabels[sortSelect.value]);
}

function init() {
  fillOptions(categorySelect, CATEGORIES);
  fillOptions(storeSelect, STORES);
  renderStats();
  for (const control of [searchBox, categorySelect, storeSelect, discountSelect, sortSelect, lowOnlyBox]) {
    control.addEventListener("input", renderRoute);
    control.addEventListener("change", renderRoute);
  }
  document.getElementById("clear-filters").addEventListener("click", () => {
    searchBox.value = "";
    categorySelect.value = "All";
    storeSelect.value = "All";
    discountSelect.value = "0";
    sortSelect.value = "best";
    lowOnlyBox.checked = false;
    renderRoute();
  });
  window.addEventListener("hashchange", renderRoute);
  renderRoute();
}

init();
