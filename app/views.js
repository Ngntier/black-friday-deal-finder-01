// views.js — turns deal data into HTML: deal cards, the list grid and the
// detail page. No network calls here; every string comes from data.js.

import { DEALS, discountPct, saveAmount, verdictRank } from "./data.js";

export function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function money(value) {
  return "$" + (Number.isInteger(value) ? value.toLocaleString("en-US") : value.toFixed(2));
}

export function verdictClass(verdict) {
  return verdict === "NEW LOW" ? "verdict-low" : verdict === "STRONG" ? "verdict-strong" : "verdict-routine";
}

export function dealCard(deal) {
  const pct = discountPct(deal);
  const saved = saveAmount(deal);
  return `<article class="card" data-id="${deal.id}">
    <div class="card-top">
      <span class="verdict ${verdictClass(deal.verdict)}">${deal.verdict}</span>
      <span class="pct">-${pct}%</span>
    </div>
    <h3 class="card-name"><a href="#/deal/${deal.id}">${escapeHtml(deal.name)}</a></h3>
    <p class="card-cat">${escapeHtml(deal.category)} &middot; ${escapeHtml(deal.store)}</p>
    <p class="card-price"><span class="sale">${money(deal.sale)}${deal.unit}</span> <s class="usual">${money(deal.usual)}${deal.unit}</s></p>
    <p class="card-save">You save ${money(saved)}${deal.unit}</p>
    <p class="card-meta">Checked ${escapeHtml(deal.checked)} &middot; ${escapeHtml(deal.source)}</p>
    <div class="card-actions">
      <a class="btn-store" href="${escapeHtml(deal.link)}" target="_blank" rel="noopener">View at ${escapeHtml(deal.store)} &nearr;</a>
      <a class="btn-detail" href="#/deal/${deal.id}">Details</a>
    </div>
  </article>`;
}

export function renderList(deals, total, sortLabel) {
  if (deals.length === 0) {
    return `<p class="empty">No deals match those filters. Try clearing the search or lowering the discount bar.</p>`;
  }
  return `<p class="count-line">Showing <strong>${deals.length}</strong> of ${total} deals &middot; sorted ${sortLabel}.</p>
  <div class="grid">${deals.map(dealCard).join("")}</div>`;
}

export function sortDeals(deals, sort) {
  const copy = [...deals];
  if (sort === "discount") return copy.sort((a, b) => discountPct(b) - discountPct(a) || saveAmount(b) - saveAmount(a));
  if (sort === "saving") return copy.sort((a, b) => saveAmount(b) - saveAmount(a));
  if (sort === "price") return copy.sort((a, b) => a.sale - b.sale);
  return copy.sort((a, b) => verdictRank(a) - verdictRank(b) || discountPct(b) - discountPct(a));
}

export function filterDeals(query, category, store, minDiscount, newLowOnly) {
  const q = query.trim().toLowerCase();
  return DEALS.filter((deal) => {
    if (q && !(deal.name + " " + deal.category + " " + deal.store).toLowerCase().includes(q)) return false;
    if (category !== "All" && deal.category !== category) return false;
    if (store !== "All" && deal.store !== store) return false;
    if (discountPct(deal) < minDiscount) return false;
    if (newLowOnly && deal.verdict !== "NEW LOW") return false;
    return true;
  });
}

export function renderDetail(deal) {
  const pct = discountPct(deal);
  const saved = saveAmount(deal);
  const related = DEALS.filter((d) => d.category === deal.category && d.id !== deal.id).slice(0, 3);
  return `<p class="back"><a href="#/">&larr; All deals</a></p>
  <article class="detail">
    <div class="detail-head">
      <span class="verdict ${verdictClass(deal.verdict)}">${deal.verdict}</span>
      <span class="pct big">-${pct}%</span>
    </div>
    <h2>${escapeHtml(deal.name)}</h2>
    <p class="detail-cat">${escapeHtml(deal.category)} &middot; sold at ${escapeHtml(deal.store)}</p>
    <p class="detail-blurb">${escapeHtml(deal.blurb)}</p>
    <dl class="price-table">
      <div><dt>Sale price</dt><dd class="sale-big">${money(deal.sale)}${deal.unit}</dd></div>
      <div><dt>Usual price</dt><dd><s>${money(deal.usual)}${deal.unit}</s></dd></div>
      <div><dt>Discount</dt><dd>-${pct}%</dd></div>
      <div><dt>You save</dt><dd>${money(saved)}${deal.unit}</dd></div>
    </dl>
    <h3>Is it really a deal?</h3>
    <p class="evidence">${escapeHtml(deal.evidence)}</p>
    <p class="detail-meta">Price checked ${escapeHtml(deal.checked)}. Source: ${escapeHtml(deal.source)}.
    Prices were read from that source on the check date; the store page may have moved since.</p>
    <div class="detail-actions">
      <a class="btn-store big" href="${escapeHtml(deal.link)}" target="_blank" rel="noopener">View at ${escapeHtml(deal.store)} &nearr;</a>
      <a class="btn-detail" href="#/">Back to all deals</a>
    </div>
    ${related.length ? `<h3>More in ${escapeHtml(deal.category)}</h3><div class="grid">${related.map(dealCard).join("")}</div>` : ""}
  </article>`;
}

export function statsBar() {
  const lows = DEALS.filter((d) => d.verdict === "NEW LOW").length;
  const avg = Math.round(DEALS.reduce((sum, d) => sum + discountPct(d), 0) / DEALS.length);
  const biggest = DEALS.reduce((best, d) => (saveAmount(d) > saveAmount(best) ? d : best), DEALS[0]);
  return { total: DEALS.length, lows, avg, biggest };
}
