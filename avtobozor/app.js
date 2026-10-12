/* ==========================================================
   AVTOBOZOR.UZ — APPLICATION LOGIC & INTERACTION ENGINE
   ========================================================== */

// 1. Initial Mock Database of Cars in Uzbekistan
const DEFAULT_CARS = [
  {
    id: "car-1",
    brand: "Chevrolet",
    model: "Tahoe High Country 6.2L V8",
    priceUsd: 79500,
    year: 2023,
    mileage: 18000,
    fuel: "Benzin",
    transmission: "Avtomat",
    color: "Qora (Black Pearl)",
    region: "Toshkent",
    engine: "6.2 L / 426 ot kuchi",
    drive: "To'liq (4WD)",
    bodyType: "SUV / Krossover",
    sellerName: "Akmal Karimov",
    sellerPhone: "+998 90 980-77-66",
    creditAvailable: true,
    barterAvailable: false,
    vip: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80",
    description: "Moshina ideal holatda! High Country to'liq komplektatsiya, pnevmo podveska, panaramali tom, Bose audio tizimi. Kraskasi toza 100%, serxarajat emas."
  },
  {
    id: "car-2",
    brand: "BYD",
    model: "Song Plus Champion Flagship EV",
    priceUsd: 28800,
    year: 2024,
    mileage: 4500,
    fuel: "Elektr",
    transmission: "Avtomat",
    color: "Kulrang (Smoke Grey)",
    region: "Toshkent",
    engine: "Elektr 605 km zaxira / 218 ot kuchi",
    drive: "Oldi (FWD)",
    bodyType: "SUV / Krossover",
    sellerName: "Sardorbek Rahimov",
    sellerPhone: "+998 97 711-22-33",
    creditAvailable: true,
    barterAvailable: true,
    vip: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80",
    description: "BYD Song Plus EV Champion 2024. Yangi avtomobil, xitoy versiya ingliz tili proshivka qilingan. Zaryadlovchi stantsiya va poliklari sovg'aga beriladi."
  },
  {
    id: "car-3",
    brand: "Chevrolet",
    model: "Malibu 2 Premier 2.0 Turbo",
    priceUsd: 24200,
    year: 2022,
    mileage: 36000,
    fuel: "Benzin",
    transmission: "Avtomat",
    color: "Oq marvarid (Pearl White)",
    region: "Samarqand",
    engine: "2.0 Turbo / 253 ot kuchi",
    drive: "Oldi (FWD)",
    bodyType: "Sedan",
    sellerName: "Jamshid Aliyev",
    sellerPhone: "+998 93 300-44-55",
    creditAvailable: true,
    barterAvailable: true,
    vip: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80",
    description: "Premier to'liq faza, ventilyatsiya o'rindiqlar, yangi Michelin shinalar taqilgan, moy va filtrlari vaqtida almashtirilgan. Kraskasi toza."
  },
  {
    id: "car-4",
    brand: "Kia",
    model: "K5 GT-Line 2.5 GDI",
    priceUsd: 31500,
    year: 2023,
    mileage: 21000,
    fuel: "Benzin",
    transmission: "Avtomat",
    color: "Qizil (Wolf Red)",
    region: "Toshkent",
    engine: "2.5 L / 194 ot kuchi",
    drive: "Oldi (FWD)",
    bodyType: "Sedan",
    sellerName: "Bekzod Mirzayev",
    sellerPhone: "+998 99 888-12-34",
    creditAvailable: true,
    barterAvailable: false,
    vip: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80",
    description: "Rasmiy Kia dileridan olingan va kafolatda turibdi. GT-Line qora shift, 360 kamera, proeksiya oynada. Holati a'lo."
  },
  {
    id: "car-5",
    brand: "Chevrolet",
    model: "Gentra 1.5 Elegant Plus AT",
    priceUsd: 13400,
    year: 2023,
    mileage: 19000,
    fuel: "Gaz/Benzin",
    transmission: "Avtomat",
    color: "Qora (Black)",
    region: "Farg'ona",
    engine: "1.5 L / 107 ot kuchi",
    drive: "Oldi (FWD)",
    bodyType: "Sedan",
    sellerName: "Otabek Umarov",
    sellerPhone: "+998 91 144-55-66",
    creditAvailable: false,
    barterAvailable: true,
    vip: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
    description: "Elegant Plus 3-pozitsiya, lyuk, diskalar, 4-avlod italyan metan gaz o'rnatilgan (100 litrlik balon). Shovqinsiz izolyatsiya (shumka) qilingan."
  },
  {
    id: "car-6",
    brand: "Chevrolet",
    model: "Cobalt LTZ 1.5 AT",
    priceUsd: 12800,
    year: 2023,
    mileage: 14000,
    fuel: "Benzin",
    transmission: "Avtomat",
    color: "Oq (White)",
    region: "Buxoro",
    engine: "1.5 L / 106 ot kuchi",
    drive: "Oldi (FWD)",
    bodyType: "Sedan",
    sellerName: "Sherzod Norov",
    sellerPhone: "+998 90 712-33-44",
    creditAvailable: true,
    barterAvailable: false,
    vip: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
    description: "4-pozitsiya avtomat. Minishga tayyor, magicar pult, lenovo videoregistrator qo'yilgan. Petno va kraskasi yo'q."
  },
  {
    id: "car-7",
    brand: "BMW",
    model: "X5 xDrive40i M-Sport",
    priceUsd: 87000,
    year: 2022,
    mileage: 28000,
    fuel: "Benzin",
    transmission: "Avtomat",
    color: "Ko'k (Phytonic Blue)",
    region: "Toshkent",
    engine: "3.0 TwinPower Turbo / 340 ot kuchi",
    drive: "To'liq (xDrive)",
    bodyType: "SUV / Krossover",
    sellerName: "Farrux Zokirov",
    sellerPhone: "+998 97 400-00-01",
    creditAvailable: true,
    barterAvailable: false,
    vip: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80",
    description: "Original M-Sport paket, lazer faralar, Harman Kardon audiotizimi, massajli o'rindiqlar. Faqat 98-100 benzin quyilgan, to'liq bron plyonka qilingan."
  },
  {
    id: "car-8",
    brand: "Chevrolet",
    model: "Tracker 2 Redline Premier",
    priceUsd: 18400,
    year: 2023,
    mileage: 16000,
    fuel: "Benzin",
    transmission: "Avtomat",
    color: "Kulrang metallik (Satin Steel)",
    region: "Namangan",
    engine: "1.2 Turbo / 132 ot kuchi",
    drive: "Oldi (FWD)",
    bodyType: "SUV / Krossover",
    sellerName: "Dilshod Jo'rayev",
    sellerPhone: "+998 90 550-11-22",
    creditAvailable: true,
    barterAvailable: true,
    vip: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1000&q=80",
    description: "Redline Premier eng baland faza, simsiz zaryadlash, panoramali lyuk, ko'r zonalar nazorati (blind spot). Yangi avtomobil holatida."
  },
  {
    id: "car-9",
    brand: "Hyundai",
    model: "Tucson 2.5 HTRAC Signature",
    priceUsd: 34000,
    year: 2023,
    mileage: 18500,
    fuel: "Benzin",
    transmission: "Avtomat",
    color: "Oq (Creamy White)",
    region: "Toshkent",
    engine: "2.5 L / 190 ot kuchi",
    drive: "To'liq (AWD)",
    bodyType: "SUV / Krossover",
    sellerName: "Rustam Qodirov",
    sellerPhone: "+998 93 501-77-88",
    creditAvailable: true,
    barterAvailable: false,
    vip: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1000&q=80",
    description: "Hyundai rasmiy salondan olingan. To'liq haydovchi yordamchilari (SmartSense), adaptiv kruiz-kontrol, chiziqni saqlash."
  },
  {
    id: "car-10",
    brand: "Chevrolet",
    model: "Onix Premier 2 Turbo AT",
    priceUsd: 14800,
    year: 2023,
    mileage: 12000,
    fuel: "Benzin",
    transmission: "Avtomat",
    color: "To'q kulrang (Iron Grey)",
    region: "Andijon",
    engine: "1.2 Turbo / 132 ot kuchi",
    drive: "Oldi (FWD)",
    bodyType: "Sedan",
    sellerName: "Bobur Ismoilov",
    sellerPhone: "+998 91 600-33-22",
    creditAvailable: true,
    barterAvailable: true,
    vip: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1000&q=80",
    description: "Premier 2 pozitsiya, o'rindiq isitgichlari, yarim avtomatik to'xtash (park assist), qulay va tejamkor avtomobil. Sarfi shahar ichida 7 litr."
  },
  {
    id: "car-11",
    brand: "Toyota",
    model: "Camry 75 XSE 2.5",
    priceUsd: 38500,
    year: 2022,
    mileage: 32000,
    fuel: "Benzin",
    transmission: "Avtomat",
    color: "Oq marvarid (Pearl)",
    region: "Samarqand",
    engine: "2.5 L / 206 ot kuchi",
    drive: "Oldi (FWD)",
    bodyType: "Sedan",
    sellerName: "Umidjon Soliyev",
    sellerPhone: "+998 90 222-11-99",
    creditAvailable: true,
    barterAvailable: false,
    vip: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1000&q=80",
    description: "Afsonaviy Camry 75 XSE sport qora tom bilan. JBL premium akustika, to'liq elektronik paket. Moshina javob darajada toza."
  },
  {
    id: "car-12",
    brand: "Mercedes-Benz",
    model: "E-Class E200 AMG Line",
    priceUsd: 56000,
    year: 2021,
    mileage: 41000,
    fuel: "Benzin",
    transmission: "Avtomat",
    color: "Qora (Obsidian Black)",
    region: "Toshkent",
    engine: "2.0 Turbo / 197 ot kuchi",
    drive: "Orqa (RWD)",
    bodyType: "Sedan",
    sellerName: "Davron Eshmatov",
    sellerPhone: "+998 99 909-09-09",
    creditAvailable: true,
    barterAvailable: false,
    vip: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80",
    description: "W213 restayling, original AMG paket, multibeam led optika, Burmester audio. Faqat garajda saqlangan, ideal business-klass."
  }
];

// 2. Application State Management
class CarApp {
  constructor() {
    this.exchangeRate = 12800; // 1 USD = 12,800 UZS
    this.currency = localStorage.getItem("avto_currency") || "USD";
    this.theme = localStorage.getItem("avto_theme") || "dark";
    
    // Load Cars from localStorage or fallback
    const savedCars = localStorage.getItem("avto_cars_db");
    this.cars = savedCars ? JSON.parse(savedCars) : DEFAULT_CARS;
    
    // Favorites & Compare ids
    this.favorites = JSON.parse(localStorage.getItem("avto_favorites") || "[]");
    this.compareList = JSON.parse(localStorage.getItem("avto_compare") || "[]");

    // Filter states
    this.activeCategory = "all";
    this.activeFilters = {
      brand: "all",
      region: "all",
      year: "all",
      fuel: "all",
      maxPrice: null,
      searchQuery: ""
    };
    this.sortOrder = "newest";
    this.viewLayout = "grid";

    this.init();
  }

  init() {
    this.applyTheme(this.theme);
    this.bindEvents();
    this.updateCategoryBadges();
    this.renderCars();
    this.updateBadgesCount();
    this.setupCreditCalculator();
  }

  // Save cars to localStorage
  saveCars() {
    localStorage.setItem("avto_cars_db", JSON.stringify(this.cars));
  }

  saveFavorites() {
    localStorage.setItem("avto_favorites", JSON.stringify(this.favorites));
    this.updateBadgesCount();
  }

  saveCompare() {
    localStorage.setItem("avto_compare", JSON.stringify(this.compareList));
    this.updateBadgesCount();
  }

  // Theme Toggler
  applyTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("avto_theme", theme);
  }

  // Currency Converter
  formatPrice(usdAmount) {
    if (this.currency === "UZS") {
      const uzs = Math.round(usdAmount * this.exchangeRate);
      return uzs.toLocaleString("uz-UZ") + " so'm";
    }
    return "$" + usdAmount.toLocaleString("en-US");
  }

  formatSecondaryPrice(usdAmount) {
    if (this.currency === "UZS") {
      return "$" + usdAmount.toLocaleString("en-US");
    }
    const uzs = Math.round(usdAmount * this.exchangeRate);
    return uzs.toLocaleString("uz-UZ") + " so'm";
  }

  // Calculation for monthly loan estimation
  getEstimatedMonthlyLoan(usdPrice) {
    const downPayment = usdPrice * 0.25;
    const loan = usdPrice - downPayment;
    const monthlyRate = 0.22 / 12;
    const months = 36;
    const monthly = (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(monthly);
  }

  // Badge counters in header
  updateBadgesCount() {
    const favCountEl = document.getElementById("favBadgeCount");
    const compCountEl = document.getElementById("compareBadgeCount");
    if (favCountEl) favCountEl.textContent = this.favorites.length;
    if (compCountEl) compCountEl.textContent = this.compareList.length;
  }

  // Category counts
  updateCategoryBadges() {
    const total = this.cars.length;
    const electro = this.cars.filter(c => c.fuel === "Elektr" || c.fuel === "Gibrid").length;
    const budget = this.cars.filter(c => c.priceUsd <= 15000).length;
    const premium = this.cars.filter(c => c.priceUsd >= 30000 || c.bodyType.includes("SUV")).length;
    const credit = this.cars.filter(c => c.creditAvailable).length;

    const elTotal = document.getElementById("catCountAll");
    const elElectro = document.getElementById("catCountElectro");
    const elBudget = document.getElementById("catCountBudget");
    const elPremium = document.getElementById("catCountPremium");
    const elCredit = document.getElementById("catCountCredit");
    const elHeroTotal = document.getElementById("totalCarsCount");

    if (elTotal) elTotal.textContent = total;
    if (elElectro) elElectro.textContent = electro;
    if (elBudget) elBudget.textContent = budget;
    if (elPremium) elPremium.textContent = premium;
    if (elCredit) elCredit.textContent = credit;
    if (elHeroTotal) elHeroTotal.textContent = `${total}+`;
  }

  // Filter and Sort Engine
  getFilteredCars() {
    return this.cars.filter(car => {
      // Category Tab filter
      if (this.activeCategory === "electro") {
        if (car.fuel !== "Elektr" && car.fuel !== "Gibrid") return false;
      } else if (this.activeCategory === "budget") {
        if (car.priceUsd > 15000) return false;
      } else if (this.activeCategory === "premium") {
        if (car.priceUsd < 30000 && !car.bodyType.includes("SUV")) return false;
      } else if (this.activeCategory === "credit") {
        if (!car.creditAvailable) return false;
      }

      // Brand filter
      if (this.activeFilters.brand !== "all" && car.brand.toLowerCase() !== this.activeFilters.brand.toLowerCase()) {
        return false;
      }

      // Region filter
      if (this.activeFilters.region !== "all" && !car.region.toLowerCase().includes(this.activeFilters.region.toLowerCase())) {
        return false;
      }

      // Fuel filter
      if (this.activeFilters.fuel !== "all" && !car.fuel.toLowerCase().includes(this.activeFilters.fuel.toLowerCase())) {
        return false;
      }

      // Year filter
      if (this.activeFilters.year !== "all") {
        const minYear = parseInt(this.activeFilters.year);
        if (car.year < minYear) return false;
      }

      // Max price
      if (this.activeFilters.maxPrice && car.priceUsd > this.activeFilters.maxPrice) {
        return false;
      }

      // Search query
      if (this.activeFilters.searchQuery) {
        const query = this.activeFilters.searchQuery.toLowerCase().trim();
        const matchTitle = (car.brand + " " + car.model).toLowerCase().includes(query);
        const matchRegion = car.region.toLowerCase().includes(query);
        const matchFuel = car.fuel.toLowerCase().includes(query);
        const matchPrice = car.priceUsd.toString().includes(query);
        if (!matchTitle && !matchRegion && !matchFuel && !matchPrice) return false;
      }

      return true;
    }).sort((a, b) => {
      if (this.sortOrder === "price-asc") return a.priceUsd - b.priceUsd;
      if (this.sortOrder === "price-desc") return b.priceUsd - a.priceUsd;
      if (this.sortOrder === "year-desc") return b.year - a.year;
      if (this.sortOrder === "mileage-asc") return a.mileage - b.mileage;
      // default "newest"
      return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0) || b.year - a.year;
    });
  }

  // Render Cars Grid
  renderCars() {
    const grid = document.getElementById("carsGrid");
    const emptyState = document.getElementById("emptyState");
    const activeFiltersBar = document.getElementById("activeFiltersBar");
    const activeChipsList = document.getElementById("activeFilterChips");

    const filtered = this.getFilteredCars();

    // Active filters display
    const activeChips = [];
    if (this.activeFilters.brand !== "all") activeChips.push({ label: `Marka: ${this.activeFilters.brand}`, key: "brand" });
    if (this.activeFilters.region !== "all") activeChips.push({ label: `Shahar: ${this.activeFilters.region}`, key: "region" });
    if (this.activeFilters.fuel !== "all") activeChips.push({ label: `Yoqilg'i: ${this.activeFilters.fuel}`, key: "fuel" });
    if (this.activeFilters.year !== "all") activeChips.push({ label: `Yili: ${this.activeFilters.year}+`, key: "year" });
    if (this.activeFilters.maxPrice) activeChips.push({ label: `Maks: $${this.activeFilters.maxPrice.toLocaleString()}`, key: "maxPrice" });
    if (this.activeFilters.searchQuery) activeChips.push({ label: `Qidiruv: "${this.activeFilters.searchQuery}"`, key: "searchQuery" });

    if (activeChips.length > 0) {
      activeFiltersBar.style.display = "flex";
      activeChipsList.innerHTML = activeChips.map(c => `
        <span class="filter-chip-item">
          ${c.label}
          <i class="fa-solid fa-xmark chip-remove" onclick="window.app.removeSingleFilter('${c.key}')"></i>
        </span>
      `).join("");
    } else {
      activeFiltersBar.style.display = "none";
      activeChipsList.innerHTML = "";
    }

    if (filtered.length === 0) {
      grid.innerHTML = "";
      emptyState.style.display = "block";
      return;
    }

    emptyState.style.display = "none";

    grid.innerHTML = filtered.map(car => {
      const isFav = this.favorites.includes(car.id);
      const isCompare = this.compareList.includes(car.id);
      const monthlyPay = this.formatPrice(this.getEstimatedMonthlyLoan(car.priceUsd));

      return `
        <article class="car-card" id="card-${car.id}">
          <div class="card-media">
            <img src="${car.image}" alt="${car.brand} ${car.model}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80'">
            <div class="media-badges">
              ${car.vip ? '<span class="badge-tag badge-vip"><i class="fa-solid fa-crown"></i> VIP</span>' : ''}
              ${car.isNew ? '<span class="badge-tag badge-new"><i class="fa-solid fa-sparkles"></i> Yangi</span>' : ''}
              ${car.creditAvailable ? '<span class="badge-tag badge-credit"><i class="fa-solid fa-percent"></i> Kredit</span>' : ''}
            </div>
            <div class="card-actions-float">
              <button class="btn-card-action ${isFav ? 'active-fav' : ''}" title="Sevimlilarga qo'shish" onclick="window.app.toggleFavorite('${car.id}')">
                <i class="fa-solid fa-heart"></i>
              </button>
              <button class="btn-card-action ${isCompare ? 'active-compare' : ''}" title="Taqqoslashga qo'shish" onclick="window.app.toggleCompare('${car.id}')">
                <i class="fa-solid fa-scale-balanced"></i>
              </button>
            </div>
          </div>

          <div class="card-content">
            <div class="card-header-info">
              <h3 class="car-brand-model">${car.brand} ${car.model}</h3>
              <span class="car-year-pill">${car.year}</span>
            </div>
            <div class="car-meta-location">
              <i class="fa-solid fa-location-dot"></i>
              <span>${car.region} • ${car.sellerName}</span>
            </div>

            <div class="card-specs-grid">
              <div class="spec-cell">
                <i class="fa-solid fa-gauge-high"></i>
                <span class="spec-val">${car.mileage.toLocaleString()} km</span>
                <span class="spec-lbl">Probeg</span>
              </div>
              <div class="spec-cell">
                <i class="fa-solid fa-gas-pump"></i>
                <span class="spec-val">${car.fuel}</span>
                <span class="spec-lbl">Yoqilg'i</span>
              </div>
              <div class="spec-cell">
                <i class="fa-solid fa-gears"></i>
                <span class="spec-val">${car.transmission}</span>
                <span class="spec-lbl">Uzatma</span>
              </div>
            </div>

            <div class="card-footer-action">
              <div class="price-block">
                <span class="price-main">${this.formatPrice(car.priceUsd)}</span>
                <span class="price-secondary">${monthlyPay} / oy kredit</span>
              </div>
              <button class="btn-card-details" onclick="window.app.openDetailsModal('${car.id}')">
                <span>Batafsil</span>
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  // Toggle favorite
  toggleFavorite(carId) {
    const idx = this.favorites.indexOf(carId);
    if (idx > -1) {
      this.favorites.splice(idx, 1);
      this.showToast("Sevimlilardan olib tashlandi", "info");
    } else {
      this.favorites.push(carId);
      this.showToast("Avtomobil sevimlilarga saqlandi ❤️", "success");
    }
    this.saveFavorites();
    this.renderCars();
  }

  // Toggle compare
  toggleCompare(carId) {
    const idx = this.compareList.indexOf(carId);
    if (idx > -1) {
      this.compareList.splice(idx, 1);
      this.showToast("Taqqoslash ro'yxatidan chiqarildi", "info");
    } else {
      if (this.compareList.length >= 3) {
        this.showToast("Ko'pi bilan 3 ta avtomobilni birdaniga solishtirish mumkin", "warning");
        return;
      }
      this.compareList.push(carId);
      this.showToast("Avtomobil taqqoslashga qo'shildi ⚖️", "success");
    }
    this.saveCompare();
    this.renderCars();
  }

  // Open Details Modal
  openDetailsModal(carId) {
    const car = this.cars.find(c => c.id === carId);
    if (!car) return;

    const modal = document.getElementById("detailsModal");
    const container = document.getElementById("detailsModalContent");

    const pricePrimary = this.formatPrice(car.priceUsd);
    const priceSec = this.formatSecondaryPrice(car.priceUsd);

    container.innerHTML = `
      <div class="details-grid">
        <div>
          <div class="details-media-box">
            <img src="${car.image}" alt="${car.brand} ${car.model}">
          </div>
          <div style="margin-top: 1rem; color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; background: var(--bg-input); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <strong style="color: var(--text-main); display: block; margin-bottom: 0.5rem;"><i class="fa-solid fa-circle-info"></i> Sotuvchi tavsifi:</strong>
            ${car.description}
          </div>
        </div>

        <div>
          <div class="details-header">
            <h2 class="details-title">${car.brand} ${car.model}</h2>
            <div class="details-price-row">
              <span class="details-price-usd">${pricePrimary}</span>
              <span class="details-price-uzs">(${priceSec})</span>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              ${car.creditAvailable ? '<span class="badge-tag badge-credit"><i class="fa-solid fa-hand-holding-dollar"></i> Kredit / Lizing mavjud</span>' : ''}
              ${car.barterAvailable ? '<span class="badge-tag badge-new"><i class="fa-solid fa-arrows-rotate"></i> Barterga rozi</span>' : ''}
            </div>
          </div>

          <table class="details-specs-table">
            <tr><td>Ishlab chiqarilgan yili</td><td>${car.year}</td></tr>
            <tr><td>Bosib o'tgan masofasi (Probeg)</td><td>${car.mileage.toLocaleString()} km</td></tr>
            <tr><td>Yoqilg'i turi</td><td>${car.fuel}</td></tr>
            <tr><td>Uzatma qutisi (Korobka)</td><td>${car.transmission}</td></tr>
            <tr><td>Dvigatel quvvati</td><td>${car.engine}</td></tr>
            <tr><td>Yetaklovchi g'ildiraklar</td><td>${car.drive}</td></tr>
            <tr><td>Kuzov turi</td><td>${car.bodyType}</td></tr>
            <tr><td>Rangi</td><td>${car.color}</td></tr>
            <tr><td>Hudud</td><td>${car.region}</td></tr>
          </table>

          <div class="seller-box">
            <div class="seller-profile-row">
              <div class="seller-avatar">${car.sellerName.charAt(0)}</div>
              <div class="seller-details">
                <h5>${car.sellerName}</h5>
                <span>Haqiqiy egasi • ${car.region}</span>
              </div>
            </div>

            <button class="seller-phone-btn" id="btnRevealPhone" onclick="window.app.revealSellerPhone('${car.sellerPhone}')">
              <i class="fa-solid fa-phone"></i>
              <span id="phoneTextDisplay">Raqamni ko'rish</span>
            </button>
          </div>

          <!-- Quick Offer / Bargaining box -->
          <div class="bargain-offer-box">
            <label style="font-size: 0.8rem; font-weight: 700; color: var(--text-main); display: block;">
              <i class="fa-solid fa-comments-dollar" style="color: var(--accent-primary);"></i> Narx taklif qilish (Savdolashish):
            </label>
            <div class="bargain-input-wrap">
              <input type="number" id="bargainPriceInput" placeholder="Sizning narxingiz ($)" min="1000" style="padding: 0.6rem;">
              <button class="btn-primary" style="white-space: nowrap; padding: 0.6rem 1rem;" onclick="window.app.sendBargainOffer('${car.id}')">
                Yuborish
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.add("open");
  }

  revealSellerPhone(phone) {
    const textDisplay = document.getElementById("phoneTextDisplay");
    if (textDisplay) {
      textDisplay.innerHTML = `<a href="tel:${phone}" style="color: #fff; text-decoration: none;">${phone} (Qo'ng'iroq qilish)</a>`;
      this.showToast("Sotuvchi telefon raqami ko'rsatildi", "success");
    }
  }

  sendBargainOffer(carId) {
    const input = document.getElementById("bargainPriceInput");
    const val = input ? input.value : "";
    if (!val || Number(val) <= 0) {
      this.showToast("Iltimos, taklif qilayotgan narxingizni kiriting", "warning");
      return;
    }
    this.showToast(`Sizning $${Number(val).toLocaleString()} miqdoridagi taklifingiz sotuvchiga yuborildi! Tez orada siz bilan bog'lanishadi.`, "success");
    input.value = "";
  }

  // Open Compare Modal
  openCompareModal() {
    const modal = document.getElementById("compareModal");
    const content = document.getElementById("compareContent");

    if (this.compareList.length === 0) {
      content.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem;">
          <i class="fa-solid fa-scale-balanced" style="font-size: 3rem; color: var(--text-dim); margin-bottom: 1rem;"></i>
          <h4>Solishtirish uchun hali hech qanday avtomobil tanlanmagan</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Katalogdan mashina kartochkalaridagi tarozi belgisini bosib 2 yoki 3 ta avtomobilni qo'shing.</p>
        </div>
      `;
      modal.classList.add("open");
      return;
    }

    const comparedCars = this.cars.filter(c => this.compareList.includes(c.id));

    content.innerHTML = `
      <div class="compare-grid">
        ${comparedCars.map(c => `
          <div class="compare-col">
            <button class="compare-remove-btn" title="Olib tashlash" onclick="window.app.toggleCompare('${c.id}'); window.app.openCompareModal();">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="compare-thumb">
              <img src="${c.image}" alt="${c.brand} ${c.model}">
            </div>
            <h4 style="font-family: 'Outfit'; font-size: 1.2rem; margin-bottom: 0.5rem;">${c.brand} ${c.model}</h4>
            <div style="font-size: 1.4rem; font-weight: 800; color: var(--accent-primary); margin-bottom: 1rem;">
              ${this.formatPrice(c.priceUsd)}
            </div>
            <table class="details-specs-table">
              <tr><td>Yili</td><td>${c.year}</td></tr>
              <tr><td>Probegi</td><td>${c.mileage.toLocaleString()} km</td></tr>
              <tr><td>Yoqilg'i</td><td>${c.fuel}</td></tr>
              <tr><td>Uzatma</td><td>${c.transmission}</td></tr>
              <tr><td>Dvigatel</td><td>${c.engine}</td></tr>
              <tr><td>Privod</td><td>${c.drive}</td></tr>
              <tr><td>Shahar</td><td>${c.region}</td></tr>
              <tr><td>Kredit</td><td>${c.creditAvailable ? 'Ha' : 'Yo\'q'}</td></tr>
            </table>
          </div>
        `).join("")}
      </div>
    `;

    modal.classList.add("open");
  }

  // Open Favorites Modal
  openFavoritesModal() {
    const modal = document.getElementById("favoritesModal");
    const content = document.getElementById("favoritesContent");

    if (this.favorites.length === 0) {
      content.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem;">
          <i class="fa-solid fa-heart-crack" style="font-size: 3rem; color: var(--text-dim); margin-bottom: 1rem;"></i>
          <h4>Sevimlilar ro'yxati hozircha bo'sh</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem;">O'zingizga ma'qul kelgan mashinalarning yurakcha belgisini bosing.</p>
        </div>
      `;
      modal.classList.add("open");
      return;
    }

    const favCars = this.cars.filter(c => this.favorites.includes(c.id));

    content.innerHTML = favCars.map(car => `
      <div class="car-card" style="margin: 0;">
        <div class="card-media" style="height: 160px;">
          <img src="${car.image}" alt="${car.brand} ${car.model}">
          <button class="btn-card-action active-fav" style="position: absolute; top: 8px; right: 8px;" onclick="window.app.toggleFavorite('${car.id}'); window.app.openFavoritesModal();">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
        <div class="card-content" style="padding: 1rem;">
          <h4 style="font-size: 1.1rem; font-weight: 700;">${car.brand} ${car.model} (${car.year})</h4>
          <div style="font-size: 1.25rem; font-weight: 800; color: var(--accent-primary); margin: 0.4rem 0;">
            ${this.formatPrice(car.priceUsd)}
          </div>
          <button class="btn-card-details" style="width: 100%; justify-content: center;" onclick="document.getElementById('favoritesModal').classList.remove('open'); window.app.openDetailsModal('${car.id}');">
            Batafsil ko'rish
          </button>
        </div>
      </div>
    `).join("");

    modal.classList.add("open");
  }

  // Credit Calculator Logic
  setupCreditCalculator() {
    const priceInput = document.getElementById("calcPriceInput");
    const priceRange = document.getElementById("calcPriceRange");
    const downPaymentPercentSpan = document.getElementById("calcDownPaymentPercent");
    const downPaymentInput = document.getElementById("calcDownPaymentInput");
    const downPaymentRange = document.getElementById("calcDownPaymentRange");
    const durationSelect = document.getElementById("calcDurationSelect");
    const interestInput = document.getElementById("calcInterestRate");

    const monthlyPaymentEl = document.getElementById("calcMonthlyPayment");
    const monthlyUzsEl = document.getElementById("calcMonthlyUzs");
    const loanAmountEl = document.getElementById("calcLoanAmount");
    const totalInterestEl = document.getElementById("calcTotalInterest");
    const totalPayoutEl = document.getElementById("calcTotalPayout");

    const calculate = () => {
      const price = parseFloat(priceInput.value) || 20000;
      const downPercent = parseFloat(downPaymentRange.value) || 25;
      const downAmount = (price * downPercent) / 100;
      downPaymentInput.value = Math.round(downAmount);
      downPaymentPercentSpan.textContent = downPercent;

      const loan = price - downAmount;
      const months = parseInt(durationSelect.value) || 36;
      const annualRate = (parseFloat(interestInput.value) || 22) / 100;
      const monthlyRate = annualRate / 12;

      let monthlyPayment = 0;
      if (monthlyRate > 0) {
        monthlyPayment = (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      } else {
        monthlyPayment = loan / months;
      }

      const totalPayout = monthlyPayment * months;
      const totalInterest = totalPayout - loan;

      loanAmountEl.textContent = "$" + Math.round(loan).toLocaleString();
      monthlyPaymentEl.textContent = "$" + Math.round(monthlyPayment).toLocaleString() + " / oy";
      
      const monthlyUzs = Math.round(monthlyPayment * this.exchangeRate);
      monthlyUzsEl.textContent = monthlyUzs.toLocaleString("uz-UZ") + " so'm / oy";

      totalInterestEl.textContent = "$" + Math.round(totalInterest).toLocaleString();
      totalPayoutEl.textContent = "$" + Math.round(totalPayout).toLocaleString();
    };

    priceRange.addEventListener("input", (e) => {
      priceInput.value = e.target.value;
      calculate();
    });

    priceInput.addEventListener("input", (e) => {
      priceRange.value = e.target.value;
      calculate();
    });

    downPaymentRange.addEventListener("input", (e) => {
      calculate();
    });

    downPaymentInput.addEventListener("input", (e) => {
      const price = parseFloat(priceInput.value) || 20000;
      const val = parseFloat(e.target.value) || 0;
      const percent = Math.min(Math.max(Math.round((val / price) * 100), 10), 80);
      downPaymentRange.value = percent;
      downPaymentPercentSpan.textContent = percent;
      calculate();
    });

    durationSelect.addEventListener("change", calculate);
    interestInput.addEventListener("input", calculate);

    calculate();
  }

  // Add Car Form Submission
  handleAddCarSubmit(e) {
    e.preventDefault();

    const brand = document.getElementById("formBrand").value;
    const model = document.getElementById("formModel").value.trim();
    const priceUsd = parseFloat(document.getElementById("formPrice").value);
    const year = parseInt(document.getElementById("formYear").value);
    const mileage = parseInt(document.getElementById("formMileage").value);
    const fuel = document.getElementById("formFuel").value;
    const transmission = document.getElementById("formTransmission").value;
    const color = document.getElementById("formColor").value.trim();
    const region = document.getElementById("formRegion").value;
    const phone = document.getElementById("formPhone").value.trim();
    const userImg = document.getElementById("formImageUrl").value.trim();
    const credit = document.getElementById("formCreditAvailable").checked;
    const barter = document.getElementById("formBarterAvailable").checked;
    const desc = document.getElementById("formDescription").value.trim() || "Yaxshi holatda minilgan mashina. Rasxodi yo'q.";

    // Fallback car images based on brand
    let finalImg = userImg;
    if (!finalImg) {
      if (brand === "Chevrolet") finalImg = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80";
      else if (brand === "BYD") finalImg = "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80";
      else if (brand === "BMW") finalImg = "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80";
      else if (brand === "Kia") finalImg = "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80";
      else if (brand === "Mercedes-Benz") finalImg = "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80";
      else finalImg = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80";
    }

    const newCar = {
      id: "car-" + Date.now(),
      brand,
      model,
      priceUsd,
      year,
      mileage,
      fuel,
      transmission,
      color,
      region,
      engine: "Standart dvigatel",
      drive: "Oldi (FWD)",
      bodyType: "Sedan / Krossover",
      sellerName: "Siz (Egasi)",
      sellerPhone: phone,
      creditAvailable: credit,
      barterAvailable: barter,
      vip: false,
      isNew: (year >= 2024 && mileage < 5000),
      image: finalImg,
      description: desc
    };

    // Prepend to cars list
    this.cars.unshift(newCar);
    this.saveCars();
    this.updateCategoryBadges();
    this.renderCars();

    // Close modal & reset form
    document.getElementById("sellModal").classList.remove("open");
    e.target.reset();

    this.showToast(`🎉 "${brand} ${model}" e'loni muvaffaqiyatli joylashtirildi!`, "success");

    // Scroll to catalog
    document.getElementById("mainCatalog").scrollIntoView({ behavior: "smooth" });
  }

  // Toast notifications
  showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    let iconClass = "fa-circle-info";
    if (type === "success") iconClass = "fa-circle-check";
    if (type === "warning") iconClass = "fa-triangle-exclamation";

    toast.innerHTML = `
      <i class="fa-solid ${iconClass} toast-icon"></i>
      <span class="toast-msg">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  // Remove single active filter chip
  removeSingleFilter(key) {
    if (key === "brand") {
      this.activeFilters.brand = "all";
      document.getElementById("filterBrand").value = "all";
    } else if (key === "region") {
      this.activeFilters.region = "all";
      document.getElementById("filterRegion").value = "all";
    } else if (key === "fuel") {
      this.activeFilters.fuel = "all";
      document.getElementById("filterFuel").value = "all";
    } else if (key === "year") {
      this.activeFilters.year = "all";
      document.getElementById("filterYear").value = "all";
    } else if (key === "maxPrice") {
      this.activeFilters.maxPrice = null;
      document.getElementById("filterMaxPrice").value = "";
    } else if (key === "searchQuery") {
      this.activeFilters.searchQuery = "";
      document.getElementById("quickNavSearch").value = "";
    }
    this.renderCars();
  }

  resetAllFilters() {
    this.activeFilters = {
      brand: "all",
      region: "all",
      year: "all",
      fuel: "all",
      maxPrice: null,
      searchQuery: ""
    };
    this.activeCategory = "all";
    document.querySelectorAll(".cat-tab").forEach(t => t.classList.remove("active"));
    document.querySelector('.cat-tab[data-category="all"]').classList.add("active");

    document.getElementById("filterBrand").value = "all";
    document.getElementById("filterRegion").value = "all";
    document.getElementById("filterYear").value = "all";
    document.getElementById("filterFuel").value = "all";
    document.getElementById("filterMaxPrice").value = "";
    document.getElementById("quickNavSearch").value = "";
    document.getElementById("sortOrderSelect").value = "newest";
    this.sortOrder = "newest";

    this.renderCars();
    this.showToast("Barcha filtrlar tozalandi", "info");
  }

  // Bind UI Events
  bindEvents() {
    // Currency Switcher
    const currBtn = document.getElementById("currencyToggleBtn");
    currBtn.addEventListener("click", () => {
      this.currency = this.currency === "USD" ? "UZS" : "USD";
      localStorage.setItem("avto_currency", this.currency);
      currBtn.querySelectorAll(".curr-opt").forEach(opt => {
        opt.classList.toggle("active", opt.dataset.curr === this.currency);
      });
      this.renderCars();
      this.setupCreditCalculator();
      this.showToast(`Valyuta ${this.currency === "USD" ? "$ AQSH Dollari" : "O'zbek so'mi"}ga o'zgartirildi`, "info");
    });

    // Theme Toggle
    const themeBtn = document.getElementById("themeToggleBtn");
    themeBtn.addEventListener("click", () => {
      const nextTheme = this.theme === "dark" ? "light" : "dark";
      this.applyTheme(nextTheme);
    });

    // Search input in header
    const quickSearch = document.getElementById("quickNavSearch");
    const clearQuickBtn = document.getElementById("clearQuickSearch");
    quickSearch.addEventListener("input", (e) => {
      this.activeFilters.searchQuery = e.target.value;
      clearQuickBtn.style.display = e.target.value ? "block" : "none";
      this.renderCars();
    });

    clearQuickBtn.addEventListener("click", () => {
      quickSearch.value = "";
      this.activeFilters.searchQuery = "";
      clearQuickBtn.style.display = "none";
      this.renderCars();
    });

    // Hero Form Apply
    document.getElementById("btnApplyHeroSearch").addEventListener("click", () => {
      this.activeFilters.brand = document.getElementById("filterBrand").value;
      this.activeFilters.region = document.getElementById("filterRegion").value;
      this.activeFilters.year = document.getElementById("filterYear").value;
      this.activeFilters.fuel = document.getElementById("filterFuel").value;
      const maxP = document.getElementById("filterMaxPrice").value;
      this.activeFilters.maxPrice = maxP ? parseFloat(maxP) : null;
      this.renderCars();
      document.getElementById("mainCatalog").scrollIntoView({ behavior: "smooth" });
    });

    // Quick tags
    document.querySelectorAll(".quick-tag-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const query = chip.dataset.quick;
        this.activeFilters.searchQuery = query;
        quickSearch.value = query;
        clearQuickBtn.style.display = "block";
        this.renderCars();
        document.getElementById("mainCatalog").scrollIntoView({ behavior: "smooth" });
      });
    });

    // Category Tabs
    document.querySelectorAll(".cat-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        document.querySelectorAll(".cat-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        this.activeCategory = tab.dataset.category;
        this.renderCars();
      });
    });

    // Sort order
    document.getElementById("sortOrderSelect").addEventListener("change", (e) => {
      this.sortOrder = e.target.value;
      this.renderCars();
    });

    // Layout switch (Grid / List)
    const gridBtn = document.getElementById("layoutGridBtn");
    const listBtn = document.getElementById("layoutListBtn");
    const gridEl = document.getElementById("carsGrid");

    gridBtn.addEventListener("click", () => {
      gridBtn.classList.add("active");
      listBtn.classList.remove("active");
      gridEl.classList.remove("list-view");
    });

    listBtn.addEventListener("click", () => {
      listBtn.classList.add("active");
      gridBtn.classList.remove("active");
      gridEl.classList.add("list-view");
    });

    // Reset buttons
    document.getElementById("resetAllFiltersBtn").addEventListener("click", () => this.resetAllFilters());
    document.getElementById("clearAllChipsBtn").addEventListener("click", () => this.resetAllFilters());
    document.getElementById("emptyResetBtn").addEventListener("click", () => this.resetAllFilters());

    // Modals openers
    document.getElementById("openSellModalBtn").addEventListener("click", () => {
      document.getElementById("sellModal").classList.add("open");
    });
    document.getElementById("footerSellLink").addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("sellModal").classList.add("open");
    });

    document.getElementById("openCreditCalcBtn").addEventListener("click", () => {
      document.getElementById("creditModal").classList.add("open");
    });
    document.getElementById("footerCalcLink").addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("creditModal").classList.add("open");
    });

    document.getElementById("navCompareBtn").addEventListener("click", () => this.openCompareModal());
    document.getElementById("footerCompareLink").addEventListener("click", (e) => {
      e.preventDefault();
      this.openCompareModal();
    });

    document.getElementById("navFavoritesBtn").addEventListener("click", () => this.openFavoritesModal());
    document.getElementById("footerFavsLink").addEventListener("click", (e) => {
      e.preventDefault();
      this.openFavoritesModal();
    });

    // Modals Closers
    document.querySelectorAll(".modal-close-btn, #cancelSellBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("open"));
      });
    });

    // Close when clicked on backdrop
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          overlay.classList.remove("open");
        }
      });
    });

    // Form submit
    document.getElementById("sellCarForm").addEventListener("submit", (e) => this.handleAddCarSubmit(e));
  }
}

// Global brand helper for footer links
window.applyBrandFilter = function(brand) {
  window.app.resetAllFilters();
  window.app.activeFilters.brand = brand;
  document.getElementById("filterBrand").value = brand;
  window.app.renderCars();
  document.getElementById("mainCatalog").scrollIntoView({ behavior: "smooth" });
};

// Initialize App on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  window.app = new CarApp();
});
