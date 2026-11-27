// DealHound deal data: every deal below was read from a deals source or store
// page on 27 Nov 2026 and is priced exactly as that source listed it.
// Fields: id, name, category, store, sale, usual, unit, link, checked, source,
// verdict (NEW LOW / STRONG / ROUTINE), evidence, blurb.

export const CHECKED_DATE = "27 Nov 2026";

export const DEALS = [
  {
    id: "airpods-pro-3",
    name: "Apple AirPods Pro 3",
    category: "Audio",
    store: "Amazon",
    sale: 149, usual: 249, unit: "",
    link: "https://www.amazon.com/s?k=apple+airpods+pro+3",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026; CNN Underscored",
    verdict: "NEW LOW",
    evidence: "CNN Underscored: the only time they have fallen below $169.",
    blurb: "Apple's newest earbuds with stronger noise cancellation, richer bass, heart-rate tracking and live translation."
  },
  {
    id: "macbook-air-m5",
    name: "Apple MacBook Air 13 M5, 512GB",
    category: "Laptops",
    store: "Amazon",
    sale: 999, usual: 1299, unit: "",
    link: "https://www.amazon.com/s?k=apple+macbook+air+13+m5+512gb",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "$300 off Apple's latest thin-and-light, 16GB RAM and 512GB storage.",
    blurb: "The current MacBook Air with the M5 chip, 16GB of memory and a 512GB SSD — the default laptop pick, $300 cheaper."
  },
  {
    id: "dell-xps-13",
    name: "Dell XPS 13 (Core 5 320, 8GB, 256GB)",
    category: "Laptops",
    store: "Dell",
    sale: 549, usual: 750, unit: "",
    link: "https://www.dell.com/en-us/search/dell+xps+13",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "$201 off a premium ultraportable that rarely drops this far.",
    blurb: "Dell's flagship 13-inch ultraportable with the Core 5 320 chip, 8GB RAM and a 256GB SSD."
  },
  {
    id: "hp-omnibook-5",
    name: "HP OmniBook 5 14in 2K OLED Touchscreen",
    category: "Laptops",
    store: "Best Buy",
    sale: 449, usual: 800, unit: "",
    link: "https://www.bestbuy.com/site/searchpage.jsp?st=hp+omnibook+5+14+oled",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "44% off — an OLED touchscreen laptop for the price of a budget machine.",
    blurb: "A 14-inch laptop with a sharp 2K OLED touchscreen, Core 5 320, 8GB RAM and 256GB storage."
  },
  {
    id: "macbook-neo",
    name: "Apple MacBook Neo, 256GB",
    category: "Laptops",
    store: "Amazon",
    sale: 599, usual: 700, unit: "",
    link: "https://www.amazon.com/s?k=apple+macbook+neo+256gb",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026; The Verge",
    verdict: "ROUTINE",
    evidence: "Only $50–$100 off Apple's cheapest laptop; a modest cut, not a low.",
    blurb: "Apple's most affordable laptop, running the A18 Pro chip with 8GB RAM and a 256GB SSD."
  },
  {
    id: "surface-laptop-7",
    name: "Microsoft Surface Laptop 7 (Snapdragon X Elite)",
    category: "Laptops",
    store: "Amazon",
    sale: 899, usual: 1370, unit: "",
    link: "https://www.amazon.com/s?k=microsoft+surface+laptop+7+snapdragon",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "$471 off — the biggest dollar saving of any laptop in this list.",
    blurb: "Microsoft's ARM-powered Surface with the Snapdragon X Elite chip, 16GB RAM and a 256GB SSD."
  },
  {
    id: "sony-xm6",
    name: "Sony WH-1000XM6 Wireless Headset",
    category: "Audio",
    store: "Amazon",
    sale: 348, usual: 460, unit: "",
    link: "https://www.amazon.com/s?k=sony+wh-1000xm6",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "$112 off Sony's current flagship noise-cancelling headphones.",
    blurb: "Sony's top noise-cancelling over-ears, with the newest drivers and call mics."
  },
  {
    id: "sony-xm4",
    name: "Sony WH-1000XM4 Wireless Headset",
    category: "Audio",
    store: "Amazon",
    sale: 188, usual: 300, unit: "",
    link: "https://www.amazon.com/s?k=sony+wh-1000xm4",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026; The Verge",
    verdict: "STRONG",
    evidence: "37% off the older flagship — nearly the same sound for half the XM6 price.",
    blurb: "The previous-generation Sony flagship: superb noise cancelling and battery life at a mid-range price."
  },
  {
    id: "bose-qc",
    name: "Bose QuietComfort Headphones",
    category: "Audio",
    store: "Amazon",
    sale: 169, usual: 359, unit: "",
    link: "https://www.amazon.com/s?k=bose+quietcomfort+headphones",
    checked: "27 Nov 2026", source: "Tom's Guide Amazon roundup, 23 Nov 2026",
    verdict: "NEW LOW",
    evidence: "Tom's Guide price-history checked: 53% off, among the lowest ever tracked.",
    blurb: "Bose's comfort-first noise-cancelling headphones, now less than half their usual price."
  },
  {
    id: "sennheiser-momentum-4",
    name: "Sennheiser Momentum 4",
    category: "Audio",
    store: "Amazon",
    sale: 189, usual: 299, unit: "",
    link: "https://www.amazon.com/s?k=sennheiser+momentum+4",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "37% off Sennheiser's long-battery flagship over-ears.",
    blurb: "Sennheiser's flagship wireless headphones with 60-hour battery life and warm, detailed sound."
  },
  {
    id: "powerbeats-pro-2",
    name: "Beats Powerbeats Pro 2",
    category: "Audio",
    store: "Amazon",
    sale: 179, usual: 250, unit: "",
    link: "https://www.amazon.com/s?k=beats+powerbeats+pro+2",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "$71 off Beats' workout earbuds with ear hooks and heart-rate tracking.",
    blurb: "Beats' secure-fit workout earbuds with ear hooks, heart-rate monitoring and strong bass."
  },
  {
    id: "switch-2",
    name: "Nintendo Switch 2",
    category: "Gaming",
    store: "Woot",
    sale: 469, usual: 500, unit: "",
    link: "https://www.woot.com/search?q=nintendo+switch+2",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "Nintendo hardware almost never discounts — a rare $31 cut on the new console.",
    blurb: "Nintendo's new console with a 7.9-inch display, magnetic Joy-Con 2 and backwards compatibility."
  },
  {
    id: "switch-2-mario-kart",
    name: "Nintendo Switch 2 + Mario Kart World Bundle",
    category: "Gaming",
    store: "Best Buy",
    sale: 499, usual: 550, unit: "",
    link: "https://www.bestbuy.com/site/searchpage.jsp?st=nintendo+switch+2+mario+kart+world+bundle",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026; The Verge",
    verdict: "STRONG",
    evidence: "Bundle under list price at three stores; the game effectively costs $30.",
    blurb: "The Switch 2 console bundled with Mario Kart World — the sensible way to buy the console."
  },
  {
    id: "logitech-g502",
    name: "Logitech G502 Lightspeed Wireless Mouse",
    category: "Gaming",
    store: "Amazon",
    sale: 74, usual: 150, unit: "",
    link: "https://www.amazon.com/s?k=logitech+g502+lightspeed",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "NEW LOW",
    evidence: "51% off — half price on the best-selling wireless gaming mouse.",
    blurb: "The classic wireless gaming mouse: 11 programmable buttons, hero sensor, long battery life."
  },
  {
    id: "logitech-g515",
    name: "Logitech G515 Lightspeed TKL Keyboard",
    category: "Gaming",
    store: "Amazon",
    sale: 89, usual: 160, unit: "",
    link: "https://www.amazon.com/s?k=logitech+g515+lightspeed+tkl",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "44% off a low-profile wireless mechanical keyboard.",
    blurb: "A slim low-profile wireless mechanical keyboard with Lightspeed and Bluetooth."
  },
  {
    id: "galaxy-s26-ultra",
    name: "Samsung Galaxy S26 Ultra 256GB (Unlocked)",
    category: "Phones",
    store: "Amazon",
    sale: 1049, usual: 1400, unit: "",
    link: "https://www.amazon.com/s?k=samsung+galaxy+s26+ultra+256gb+unlocked",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "$351 off Samsung's newest flagship phone.",
    blurb: "Samsung's top phone with a 256GB store, unlocked for any carrier."
  },
  {
    id: "pixel-11",
    name: "Google Pixel 11 256GB (Unlocked)",
    category: "Phones",
    store: "Amazon",
    sale: 692, usual: 899, unit: "",
    link: "https://www.amazon.com/s?k=google+pixel+11+256gb+unlocked",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "$207 off Google's newest Pixel with 256GB of storage.",
    blurb: "Google's latest Pixel: clean Android, the best phone camera software, 256GB unlocked."
  },
  {
    id: "apple-watch-12",
    name: "Apple Watch Series 12",
    category: "Wearables",
    store: "Amazon",
    sale: 299, usual: 400, unit: "",
    link: "https://www.amazon.com/s?k=apple+watch+series+12",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026; CNN Underscored",
    verdict: "NEW LOW",
    evidence: "CNN Underscored: a $100 cut and a new low price on the newest watch.",
    blurb: "Apple's newest watch with the S11 chip, Live Rewind and Siri Recap."
  },
  {
    id: "galaxy-watch-8",
    name: "Samsung Galaxy Watch 8",
    category: "Wearables",
    store: "Amazon",
    sale: 199, usual: 350, unit: "",
    link: "https://www.amazon.com/s?k=samsung+galaxy+watch+8",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "43% off Samsung's current smartwatch.",
    blurb: "Samsung's latest smartwatch with health tracking and a bright always-on display."
  },
  {
    id: "garmin-instinct-3",
    name: "Garmin Instinct 3 Solar",
    category: "Wearables",
    store: "Amazon",
    sale: 249, usual: 400, unit: "",
    link: "https://www.amazon.com/s?k=garmin+instinct+3+solar",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "38% off a rugged solar-charging outdoor watch.",
    blurb: "A tough solar-powered outdoor watch with weeks of battery and full GPS."
  },
  {
    id: "airtag-2-4pack",
    name: "Apple AirTag 2nd Gen, 4-pack",
    category: "Wearables",
    store: "Amazon",
    sale: 79, usual: 100, unit: "",
    link: "https://www.amazon.com/s?k=apple+airtag+2+4+pack",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "$21 off the new AirTag 4-pack with louder speaker and longer range.",
    blurb: "Four of Apple's latest trackers with a louder speaker, better range and precision finding."
  },
  {
    id: "fire-tv-4k",
    name: "Amazon Fire TV 4K",
    category: "TV & Home",
    store: "Amazon",
    sale: 19, usual: 60, unit: "",
    link: "https://www.amazon.com/s?k=amazon+fire+tv+4k",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "68% off. Note: the $60 list is up from the old $50 — $19 still beats it by far.",
    blurb: "The 4K streaming stick with Dolby Vision and Atmos and the Alexa voice remote."
  },
  {
    id: "roku-pro-oled",
    name: "Roku 65in Pro Series OLED TV",
    category: "TV & Home",
    store: "Amazon",
    sale: 799.99, usual: 1199.99, unit: "",
    link: "https://www.amazon.com/s?k=roku+65+pro+series+oled+tv",
    checked: "27 Nov 2026", source: "Tom's Guide streaming roundup, 23 Nov 2026",
    verdict: "STRONG",
    evidence: "$400 off a 65-inch OLED — big-screen OLED at LCD money.",
    blurb: "A 65-inch OLED TV with Roku built in, $400 under its list price."
  },
  {
    id: "hisense-u6-pro",
    name: "Hisense 65in U6 Pro Mini-LED Fire TV",
    category: "TV & Home",
    store: "Amazon",
    sale: 530, usual: 1100, unit: "",
    link: "https://www.amazon.com/s?k=hisense+65+u6+pro+mini-led+fire+tv",
    checked: "27 Nov 2026", source: "CNN Underscored, 25 Nov 2026",
    verdict: "STRONG",
    evidence: "CNN Underscored: a 52% discount on a 65-inch Mini-LED set with 144Hz.",
    blurb: "A 65-inch Mini-LED TV with a 144Hz panel and Fire TV built in."
  },
  {
    id: "ryzen-9850x3d",
    name: "AMD Ryzen 7 9850X3D Processor",
    category: "PC Parts",
    store: "Amazon",
    sale: 399, usual: 499, unit: "",
    link: "https://www.amazon.com/s?k=amd+ryzen+7+9850x3d",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "$100 off AMD's newest gaming CPU.",
    blurb: "AMD's latest 3D V-Cache gaming processor, unlocked and ready for a fast build."
  },
  {
    id: "samsung-9100-pro",
    name: "Samsung 9100 Pro 1TB NVMe SSD",
    category: "PC Parts",
    store: "Amazon",
    sale: 209, usual: 340, unit: "",
    link: "https://www.amazon.com/s?k=samsung+9100+pro+1tb+ssd",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "39% off a top PCIe 5.0 drive.",
    blurb: "A 1TB PCIe 5.0 NVMe SSD — one of the fastest drives you can put in a PC."
  },
  {
    id: "samsung-t9",
    name: "Samsung T9 2TB Portable SSD",
    category: "PC Parts",
    store: "Amazon",
    sale: 349, usual: 499, unit: "",
    link: "https://www.amazon.com/s?k=samsung+t9+2tb+portable+ssd",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "$150 off the 2TB pocket drive.",
    blurb: "A fast 2TB portable SSD for backups, video work and carrying games around."
  },
  {
    id: "eero-7",
    name: "eero 7 Mesh Wi-Fi 7 System",
    category: "Smart Home",
    store: "Amazon",
    sale: 229, usual: 300, unit: "",
    link: "https://www.amazon.com/s?k=eero+7+mesh+wifi+7",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "$71 off Amazon's Wi-Fi 7 mesh system.",
    blurb: "A Wi-Fi 7 mesh system that blankets a home in fast, steady wireless."
  },
  {
    id: "tplink-ax21",
    name: "TP-Link Archer AX21 AX1800 Router",
    category: "Smart Home",
    store: "Amazon",
    sale: 51, usual: 99, unit: "",
    link: "https://www.amazon.com/s?k=tp-link+archer+ax21+ax1800",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "NEW LOW",
    evidence: "48% off — near half price on a solid dual-band gigabit router.",
    blurb: "A dual-band gigabit Wi-Fi 6 router that covers a flat or small house for $51."
  },
  {
    id: "switchbot-bot",
    name: "SwitchBot Bot (white)",
    category: "Smart Home",
    store: "Amazon",
    sale: 23.99, usual: 33.99, unit: "",
    link: "https://www.amazon.com/s?k=switchbot+bot",
    checked: "27 Nov 2026", source: "The Verge, 24 Nov 2026",
    verdict: "STRONG",
    evidence: "29% off the little button-presser that makes dumb switches smart.",
    blurb: "A tiny robot that presses any button or rocker switch, so lights and coffee makers join your phone."
  },
  {
    id: "dji-osmo-action-4",
    name: "DJI Osmo Action 4 Essential Combo",
    category: "Cameras",
    store: "Amazon",
    sale: 169, usual: 240, unit: "",
    link: "https://www.amazon.com/s?k=dji+osmo+action+4+essential+combo",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "$71 off DJI's rugged 4K action camera combo.",
    blurb: "DJI's waterproof 4K action camera with magnetic mounts and a big bright screen."
  },
  {
    id: "gopro-lit-hero",
    name: "GoPro Lit Hero Action Camera",
    category: "Cameras",
    store: "Amazon",
    sale: 169, usual: 279, unit: "",
    link: "https://www.amazon.com/s?k=gopro+lit+hero",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "39% off GoPro's entry action camera.",
    blurb: "GoPro's simplest action camera: small, tough and ready for the slopes or the surf."
  },
  {
    id: "dyson-v9",
    name: "Dyson V9 Motorbar Cordless Vacuum",
    category: "Home",
    store: "Amazon",
    sale: 270, usual: 600, unit: "",
    link: "https://www.amazon.com/s?k=dyson+v9+motorbar+cordless+vacuum",
    checked: "27 Nov 2026", source: "CNN Underscored, 25 Nov 2026",
    verdict: "NEW LOW",
    evidence: "CNN Underscored: 55% off, matching the lowest price ever for only the second time this year.",
    blurb: "Dyson's most affordable cordless stick vacuum — 55% off, at its lowest price of the year."
  },
  {
    id: "bose-soundlink-max",
    name: "Bose SoundLink Max Bluetooth Speaker",
    category: "Home",
    store: "Amazon",
    sale: 279, usual: 399, unit: "",
    link: "https://www.amazon.com/s?k=bose+soundlink+max",
    checked: "27 Nov 2026", source: "TechSpot, 26 Nov 2026",
    verdict: "STRONG",
    evidence: "$120 off Bose's biggest portable speaker.",
    blurb: "Bose's largest portable speaker: room-filling sound with a carry handle."
  },
  {
    id: "disney-hulu-bundle",
    name: "Disney+ & Hulu Bundle (with ads)",
    category: "Streaming",
    store: "Disney+",
    sale: 4.99, usual: 12.99, unit: "/mo",
    link: "https://www.disneyplus.com/",
    checked: "27 Nov 2026", source: "Tom's Guide streaming roundup, 23 Nov 2026; The Verge",
    verdict: "NEW LOW",
    evidence: "62% off for a full 12 months — the cheapest way into both catalogues.",
    blurb: "Disney+ and Hulu together for $4.99 a month for a year, for new and eligible returning subscribers."
  },
  {
    id: "hbo-max-basic",
    name: "HBO Max Basic with Ads",
    category: "Streaming",
    store: "HBO Max",
    sale: 5.49, usual: 10.99, unit: "/mo",
    link: "https://www.max.com/",
    checked: "27 Nov 2026", source: "Tom's Guide streaming roundup, 23 Nov 2026; The Verge",
    verdict: "STRONG",
    evidence: "50% off for 12 months — a year of HBO for the price of a coffee a month.",
    blurb: "A year of HBO Max Basic with ads at half price, until 1 Dec."
  },
  {
    id: "paramount-plus",
    name: "Paramount+ Premium",
    category: "Streaming",
    store: "Paramount+",
    sale: 2.99, usual: 13.99, unit: "/mo",
    link: "https://www.paramountplus.com/",
    checked: "27 Nov 2026", source: "Tom's Guide streaming roundup, 23 Nov 2026",
    verdict: "STRONG",
    evidence: "79% off — but only for 2 months, so set a reminder before it renews.",
    blurb: "Paramount+ Premium for $2.99 a month for two months, for new and eligible returning subscribers."
  }
];

export function discountPct(deal) {
  return Math.round((1 - deal.sale / deal.usual) * 100);
}

export function saveAmount(deal) {
  return Math.round((deal.usual - deal.sale) * 100) / 100;
}

export function verdictRank(deal) {
  return deal.verdict === "NEW LOW" ? 0 : deal.verdict === "STRONG" ? 1 : 2;
}

export const CATEGORIES = [...new Set(DEALS.map((d) => d.category))].sort();

export const STORES = [...new Set(DEALS.map((d) => d.store))].sort();
