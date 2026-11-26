/* ==========================================================
   1. PAGE NAVIGATION SWITCHER (Flipkart / Myntra Style Views)
========================================================== */
function openPage(pageId) {
    let pages = document.querySelectorAll(".page-view");
    pages.forEach(function(page) {
        page.classList.add("hidden");
    });

    document.getElementById(pageId).classList.remove("hidden");

    let navBtns = document.querySelectorAll(".nav-btn");
    navBtns.forEach(function(btn) {
        btn.classList.remove("active");
    });

    let activeBtn = document.getElementById("btn-" + pageId);
    if (activeBtn) {
        activeBtn.classList.add("active");
    }

    window.scrollTo(0, 0);
}

/* ==========================================================
   2. 20 IMAGE-MATCHED MODERN & INDIAN SUSTAINABLE PRODUCTS
========================================================== */
let products = [
    {
        id: 1,
        name: "Kanchipuram Ahimsa Silk Saree",
        category: "Women",
        price: 4800,
        rating: 4.9,
        material: "Ahimsa Peace Silk",
        ecoScore: 98,
        waterSaved: 3400,
        description: "Handwoven in Tamil Nadu using cruelty-free Ahimsa peace silk where silkworms are never harmed. Colored with natural botanical dyes.",
        ecoFeatures: ["100% Cruelty-Free Peace Silk", "Botanical Temple Dyes", "Zero Synthetic Zari", "Biodegradable Packaging"],
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Vintage Wash Organic Baggy Jeans",
        category: "Men",
        price: 2899,
        rating: 4.9,
        material: "100% Organic Cotton Denim",
        ecoScore: 96,
        waterSaved: 4900,
        description: "Relaxed wide-leg streetwear baggy jeans crafted from 13 oz GOTS-certified organic cotton denim using waterless ozone wash technology.",
        ecoFeatures: ["Ozone Waterless Vintage Wash", "13 oz Organic Cotton Denim", "Recycled Steel Buttons", "Zero Toxic Chemicals"],
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Midnight Black Festive Saree & Kurti Set",
        category: "Women",
        price: 3299,
        rating: 4.9,
        material: "Organic Charcoal Silk-Cotton",
        ecoScore: 96,
        waterSaved: 2650,
        description: "Elegant deep-toned Indian ethnic ensemble crafted from breathable organic mulmul and peace silk with natural mineral dyes.",
        ecoFeatures: ["Natural Mineral Eco-Dye", "100% GOTS Organic Fabric", "Handcrafted Indian Weave", "Zero Chemical Fixatives"],
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Himalayan Hemp Tailored Blazer Suit",
        category: "Men",
        price: 4500,
        rating: 4.9,
        material: "100% Organic Hemp",
        ecoScore: 98,
        waterSaved: 3600,
        description: "Sharp structured blazer suit tailored from wild Himalayan hemp fibers. Uses 70% less water than conventional suiting fabrics.",
        ecoFeatures: ["Carbon-Negative Hemp Fabric", "Biodegradable Buttons", "Anti-Microbial & Breathable", "Zero Polyester Lining"],
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Upcycled Classic Blue Denim Jacket",
        category: "Upcycled",
        price: 3000,
        rating: 4.9,
        material: "Reclaimed Vintage Denim",
        ecoScore: 99,
        waterSaved: 7500,
        description: "Iconic streetwear trucker jacket reconstructed from salvaged post-consumer denim jeans, saving 7,500 litres of fresh water.",
        ecoFeatures: ["100% Post-Consumer Upcycled", "Saves 7,500L Fresh Water", "Zero New Dyeing Required", "Recycled Metal Rivets"],
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Vegan Cork & Cactus Leather Sandals",
        category: "Accessories",
        price: 2100,
        rating: 4.7,
        material: "Cactus & Cork Vegan Leather",
        ecoScore: 94,
        waterSaved: 2100,
        description: "All-day comfort double-strap sandals crafted with harvested cork footbeds and cruelty-free plant-based vegan leather straps.",
        ecoFeatures: ["100% Cruelty-Free Vegan Straps", "Natural Harvested Cork Sole", "Chrome-Free Tanning", "Handcrafted Finish"],
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "Organic Hemp Oversized Zipper Hoodie",
        category: "Men",
        price: 3199,
        rating: 4.9,
        material: "Hemp & Organic French Terry",
        ecoScore: 97,
        waterSaved: 3200,
        description: "Heavyweight 420 GSM relaxed-fit streetwear hoodie knitted from Himalayan hemp and organic cotton French terry.",
        ecoFeatures: ["420 GSM Hemp-Cotton Terry", "Recycled Brass Zipper", "Zero Microplastic Shedding", "Botanical Carbon Wash"],
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "Artisan Woven Cork & Vegan Tote Bag",
        category: "Accessories",
        price: 2550,
        rating: 4.7,
        material: "Cork & Plant Leather",
        ecoScore: 93,
        waterSaved: 1950,
        description: "Structured luxury handbag crafted from woven plant fibers and water-resistant vegan leather with zero animal cruelty.",
        ecoFeatures: ["100% Cruelty-Free Material", "Hand-Woven Artisan Craft", "Plastic-Free Packaging", "Water & Scratch Resistant"],
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        name: "Crimson Botanical Flowy Maxi Dress",
        category: "Women",
        price: 3499,
        rating: 4.8,
        material: "Organic Bamboo Viscose",
        ecoScore: 95,
        waterSaved: 2600,
        description: "Statement evening maxi dress crafted from closed-loop bamboo silk and dyed with natural madder root crimson extracts.",
        ecoFeatures: ["Closed-Loop Bamboo Fiber", "Natural Madder Root Dye", "Zero Synthetic Microfibers", "Compostable Garment Tag"],
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        name: "Wine Organic Cotton Midi Dress",
        category: "Women",
        price: 2950,
        rating: 4.8,
        material: "GOTS Organic Cotton",
        ecoScore: 96,
        waterSaved: 2700,
        description: "Minimalist button-down midi dress made from breathable unbleached organic cotton dyed with natural grape-skin & pomegranate pigments.",
        ecoFeatures: ["GOTS Certified Organic Cotton", "AZO-Free Botanical Dyes", "Zero-Waste Pattern Cutting", "Breathable All-Day Fit"],
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        name: "Reclaimed Selvedge Denim Stack",
        category: "Upcycled",
        price: 2999,
        rating: 4.8,
        material: "Deadstock Selvedge Denim",
        ecoScore: 97,
        waterSaved: 6800,
        description: "Relaxed straight-fit jeans cut from factory deadstock selvedge denim rolls that would otherwise end up in landfills.",
        ecoFeatures: ["100% Factory Deadstock Denim", "Laser-Washed (Zero Water)", "Recycled Metal Rivets", "High-Durability Stitching"],
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        name: "Organic Hemp Indigo Casual Shirt",
        category: "Men",
        price: 2450,
        rating: 4.8,
        material: "Uttarakhand Hemp & Cotton",
        ecoScore: 96,
        waterSaved: 3100,
        description: "Smart-casual button-down shirt woven from pesticide-free hemp and dyed in natural fermented indigo vats.",
        ecoFeatures: ["Pesticide-Free Hemp Crop", "Natural Fermented Indigo", "UV & Odor Resistant", "3x Stronger Than Cotton"],
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 13,
        name: "Oversized Organic Cotton Graphic Tee",
        category: "Upcycled",
        price: 1399,
        rating: 4.9,
        material: "240 GSM Recycled Cotton",
        ecoScore: 97,
        waterSaved: 2400,
        description: "Drop-shoulder streetwear oversized t-shirt knitted from 100% recycled pre-consumer cotton yarn with water-based eco ink.",
        ecoFeatures: ["240 GSM Recycled Cotton", "Water-Based Non-Toxic Ink", "Pre-Shrunk & Bio-Washed", "Zero Plastic Packaging"],
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 14,
        name: "Sky Blue Organic Linen Formal Shirt",
        category: "Men",
        price: 2299,
        rating: 4.7,
        material: "Flax Linen & Organic Cotton",
        ecoScore: 95,
        waterSaved: 2500,
        description: "Crisp breathable linen-cotton shirt crafted with rain-fed flax fibers and biodegradable mother-of-pearl buttons.",
        ecoFeatures: ["Rain-Fed Flax Linen Blend", "Biodegradable Shell Buttons", "Low-Impact Eco Dye", "100% Soil-Biodegradable"],
        image: "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 15,
        name: "Piñatex Pineapple Fiber Sneakers",
        category: "Accessories",
        price: 4200,
        rating: 4.9,
        material: "Pineapple Leaf & Rubber",
        ecoScore: 97,
        waterSaved: 2900,
        description: "Luxury minimalist sneakers crafted from Piñatex (agricultural pineapple leaf waste) with natural tree-rubber soles and organic laces.",
        ecoFeatures: ["Upcycled Pineapple Leaf Upper", "Natural Tree-Rubber Sole", "100% Vegan & Cruelty-Free", "Breathable Cork Insole"],
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 16,
        name: "Recycled Bamboo & Minimalist Watch",
        category: "Accessories",
        price: 3499,
        rating: 4.8,
        material: "Reclaimed Wood & Vegan Strap",
        ecoScore: 95,
        waterSaved: 1800,
        description: "Ultra-lightweight minimalist timepiece crafted with FSC-certified sustainable wood casing and an apple-peel vegan leather strap.",
        ecoFeatures: ["FSC-Certified Sustainable Wood", "Apple-Peel Vegan Strap", "Solar-Assisted Movement", "Plastic-Free Gift Box"],
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 17,
        name: "Upcycled Noir Quilted Crossbody Bag",
        category: "Upcycled",
        price: 2650,
        rating: 4.8,
        material: "Recycled Microfiber Leather",
        ecoScore: 96,
        waterSaved: 3100,
        description: "Chic quilted crossbody sling crafted from GRS-certified recycled vegan leather and salvaged brass chain hardware.",
        ecoFeatures: ["GRS-Certified Recycled Material", "100% Cruelty-Free Vegan", "Recycled Brass Chain", "Zero Animal By-Products"],
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 18,
        name: "Floral Botanical Organic Sundress",
        category: "Women",
        price: 2699,
        rating: 4.8,
        material: "Organic Cotton Poplin",
        ecoScore: 95,
        waterSaved: 2350,
        description: "Breezy modern summer dress printed with non-toxic water-based botanical inks on 100% organic cotton poplin.",
        ecoFeatures: ["100% Organic Cotton Poplin", "Water-Based Botanical Prints", "Zero Synthetic Polyester", "Fair-Trade Tailored"],
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 19,
        name: "Upcycled Streetwear Snapback Cap",
        category: "Upcycled",
        price: 1199,
        rating: 4.6,
        material: "Upcycled Wool & Cotton Scraps",
        ecoScore: 94,
        waterSaved: 1400,
        description: "Structured 6-panel streetwear cap stitched from leftover factory textile rolls and recycled plastic brim core.",
        ecoFeatures: ["100% Upcycled Textile Scraps", "Recycled Ocean-Plastic Brim", "Organic Cotton Sweatband", "Zero Landfill Waste"],
        image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 20,
        name: "Recycled Brass & Rose-Gold Cuff",
        category: "Accessories",
        price: 1599,
        rating: 4.8,
        material: "100% Recycled Brass",
        ecoScore: 94,
        waterSaved: 1200,
        description: "Handcrafted filigree statement bracelet forged from 100% recycled brass with tarnish-resistant eco-plating.",
        ecoFeatures: ["100% Recycled Metal Alloy", "Lead & Nickel Free", "Zero New Mining Impact", "Artisan Hand-Finished"],
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80"
    }
];

let cart = [];
let reviews = [
    { name: "Muskanpreet Kaur", rating: 5, comment: "Amazing quality and every product matches the exact sustainable vibe!" },
    { name: "Jasleen Kaur", rating: 5, comment: "Love the mix of modern streetwear and Indian handloom pieces." },
    { name: "Ayushman Singh", rating: 5, comment: "The baggy jeans, oversized tee, and hemp zipper hoodie fit is 10/10!" }
];
let registeredUser = null;

/* ==========================================================
   3. DISPLAY PRODUCTS, SEARCH, FILTER & SORT
========================================================== */
function displayProducts(list) {
    let container = document.getElementById("product-list");
    container.innerHTML = "";

    list.forEach(function(item) {
        let emiPerMonth = Math.round(item.price / 3);

        container.innerHTML += `
            <div class="product-card">
                <span class="eco-badge">🌿 Eco ${item.ecoScore}/100</span>
                <img src="${item.image}" alt="${item.name}" style="cursor:pointer;" onclick="viewDetails(${item.id})" onerror="this.src='https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=500&q=80'">
                <h4 style="cursor:pointer;" onclick="viewDetails(${item.id})">${item.name}</h4>
                <p style="color:#D4AF37; font-size:13px; margin-bottom:2px;">★ ${item.rating} Rating</p>
                <p style="color:#9CA3AF; font-size:13px;">${item.category} • ${item.material}</p>
                <h3>₹${item.price}</h3>
                <p class="emi-text">Or ₹${emiPerMonth}/mo (3M No-Cost EMI)</p>
                <button class="btn-gold" onclick="viewDetails(${item.id})">View Details</button>
                <button class="btn-emerald" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        `;
    });
}

function filterProducts() {
    let searchText = document.getElementById("search-input").value.toLowerCase();
    let category = document.getElementById("category-filter").value;
    let sortType = document.getElementById("sort-filter").value;

    let result = products.filter(function(item) {
        let matchName = item.name.toLowerCase().includes(searchText) ||
                        item.material.toLowerCase().includes(searchText);
        let matchCat = (category === "All") || (item.category === category);
        return matchName && matchCat;
    });

    if (sortType === "low") {
        result.sort(function(a, b) { return a.price - b.price; });
    } else if (sortType === "high") {
        result.sort(function(a, b) { return b.price - a.price; });
    }

    displayProducts(result);
}

/* ==========================================================
   4. PRODUCT DETAILS PAGE (DESCRIPTION + ECO FEATURES + RATING + EMI)
========================================================== */
function viewDetails(id) {
    let item = products.find(function(p) { return p.id === id; });
    let detailBox = document.getElementById("product-detail-box");

    let ecoListHTML = item.ecoFeatures.map(function(feat) {
        return `<li style="margin-bottom:4px; color:#D1D5DB;">✔ ${feat}</li>`;
    }).join("");

    detailBox.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width:100%; height:270px; object-fit:cover; border-radius:10px; margin-bottom:14px;">
        
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="background:#10B981; color:#062118; padding:3px 10px; border-radius:12px; font-size:12px; font-weight:bold;">
                ${item.category} • ${item.material}
            </span>
            <span style="color:#D4AF37; font-weight:bold; font-size:16px;">
                ★ ${item.rating} / 5.0 Rating
            </span>
        </div>

        <h2 style="margin:10px 0 6px; color:#F3F4F6;">${item.name}</h2>
        
        <p style="color:#9CA3AF; font-size:14px; margin-bottom:14px; line-height:1.6;">
            ${item.description}
        </p>

        <div style="background:#0B0F0E; border:1px solid #10B981; padding:12px; border-radius:8px; margin-bottom:14px;">
            <p style="color:#10B981; font-weight:bold; margin-bottom:6px;">
                🌿 Sustainability & Eco-Features (Eco-Score: ${item.ecoScore}/100 • Saves ${item.waterSaved}L Water):
            </p>
            <ul style="list-style:none; font-size:13px; padding-left:4px;">
                ${ecoListHTML}
            </ul>
        </div>

        <h2 style="margin:10px 0; color:#D4AF37;">Price: ₹${item.price}</h2>

        <label>Select Size:</label>
        <select id="product-size">
            <option value="S">Size: S (Small)</option>
            <option value="M" selected>Size: M (Medium)</option>
            <option value="L">Size: L (Large)</option>
            <option value="XL">Size: XL (Extra Large)</option>
        </select>

        <label>Calculate Easy EMI:</label>
        <select id="emi-months" onchange="calculateEMI(${item.price})">
            <option value="3">3 Months (0% No-Cost EMI)</option>
            <option value="6">6 Months (10% Interest)</option>
            <option value="9">9 Months (12% Interest)</option>
        </select>
        <p id="emi-output" style="color:#D4AF37; font-weight:bold; margin:10px 0;">
            Monthly EMI: ₹${Math.round(item.price / 3)} / month
        </p>

        <button class="btn-emerald" style="width:100%;" onclick="addToCart(${item.id})">+ Add to Clothify Bag</button>
    `;

    openPage("detail-page");
}

function calculateEMI(price) {
    let months = Number(document.getElementById("emi-months").value);
    let total = price;

    if (months === 6) total = price * 1.05;
    if (months === 9) total = price * 1.08;

    let monthly = Math.round(total / months);
    document.getElementById("emi-output").innerText = "Monthly EMI: ₹" + monthly + " / month";
}

/* ==========================================================
   5. SHOPPING CART (WITH LIVE WATER SAVED) & CHECKOUT
========================================================== */
function addToCart(id) {
    let item = products.find(function(p) { return p.id === id; });
    cart.push(item);
    updateCart();
    alert(item.name + " added to Clothify Bag!");
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    let cartBox = document.getElementById("cart-items");
    let totalSpan = document.getElementById("cart-total");
    let countSpan = document.getElementById("cart-count");
    let waterSpan = document.getElementById("cart-water-saved");

    countSpan.innerText = cart.length;

    if (cart.length === 0) {
        cartBox.innerHTML = "Your cart is empty.";
        totalSpan.innerText = "0";
        waterSpan.innerText = "0";
        return;
    }

    let total = 0;
    let totalWater = 0;
    cartBox.innerHTML = "";

    cart.forEach(function(item, index) {
        total += item.price;
        totalWater += item.waterSaved;
        cartBox.innerHTML += `
            <div class="cart-row">
                <span>${item.name} - ₹${item.price}</span>
                <button class="btn-red" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    totalSpan.innerText = total;
    waterSpan.innerText = totalWater;
}

function placeOrder(event) {
    event.preventDefault();
    if (cart.length === 0) {
        alert("Your bag is empty! Add items from Shop first.");
        return;
    }

    let name = document.getElementById("cust-name").value;
    let payment = document.getElementById("payment-method").value;
    let total = document.getElementById("cart-total").innerText;
    let water = document.getElementById("cart-water-saved").innerText;

    document.getElementById("order-receipt").innerHTML =
        "✅ Order Confirmed for " + name + "! Paid ₹" + total + " via " + payment + ". You saved " + water + "L water!";

    cart = [];
    updateCart();
}

/* ==========================================================
   6. USER REGISTRATION & LOGIN
========================================================== */
function registerUser(event) {
    event.preventDefault();
    let name = document.getElementById("reg-name").value;
    let email = document.getElementById("reg-email").value;
    let pass = document.getElementById("reg-pass").value;

    registeredUser = { name: name, email: email, pass: pass };
    document.getElementById("auth-status").innerText = "Registered & Logged in as: " + name;
    document.getElementById("nav-user").innerText = "Hi, " + name;
    alert("Registration Successful! Welcome to Clothify.");
    openPage("shop-page");
}

function loginUser(event) {
    event.preventDefault();
    let email = document.getElementById("login-email").value;
    let pass = document.getElementById("login-pass").value;

    if (registeredUser && registeredUser.email === email && registeredUser.pass === pass) {
        document.getElementById("auth-status").innerText = "Logged in as: " + registeredUser.name;
        document.getElementById("nav-user").innerText = "Hi, " + registeredUser.name;
        alert("Login Successful!");
        openPage("shop-page");
    } else {
        alert("Invalid credentials! Register first or click Demo Login.");
    }
}

function demoLogin() {
    document.getElementById("auth-status").innerText = "Logged in as: Ayushman Singh (Demo User)";
    document.getElementById("nav-user").innerText = "Hi, Ayushman";
    alert("Logged in as Ayushman Singh!");
}

/* ==========================================================
   7. CUSTOMER REVIEWS
========================================================== */
function displayReviews() {
    let box = document.getElementById("reviews-list");
    box.innerHTML = "";

    reviews.forEach(function(r) {
        box.innerHTML += `
            <div class="review-item">
                <b>${r.name}</b> <span style="color:#D4AF37;">(${"★".repeat(r.rating)})</span>
                <p style="color:#9CA3AF; font-size:14px;">${r.comment}</p>
            </div>
        `;
    });
}

function addReview(event) {
    event.preventDefault();
    let name = document.getElementById("rev-name").value;
    let rating = Number(document.getElementById("rev-rating").value);
    let comment = document.getElementById("rev-comment").value;

    reviews.push({ name: name, rating: rating, comment: comment });
    displayReviews();
    event.target.reset();
}

/* ==========================================================
   8. ADMIN CRUD (CREATE, READ, UPDATE, DELETE)
========================================================== */
function renderAdminTable() {
    let tbody = document.getElementById("admin-table-body");
    tbody.innerHTML = "";

    products.forEach(function(item, index) {
        tbody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>₹${item.price}</td>
                <td>
                    <button class="btn-gold" onclick="editProduct(${index})">Edit</button>
                    <button class="btn-red" onclick="deleteProduct(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function saveProduct(event) {
    event.preventDefault();
    let editIndex = Number(document.getElementById("edit-index").value);

    let newObj = {
        id: Date.now(),
        name: document.getElementById("admin-name").value,
        category: document.getElementById("admin-category").value,
        price: Number(document.getElementById("admin-price").value),
        rating: 4.8,
        material: document.getElementById("admin-material").value,
        ecoScore: 95,
        waterSaved: Number(document.getElementById("admin-water").value),
        description: "Handcrafted sustainable garment made with ethically sourced eco-friendly fibers.",
        ecoFeatures: ["100% Sustainable Material", "Plastic-Free Packaging", "Artisan Fair-Trade Certified"],
        image: document.getElementById("admin-image").value
    };

    if (editIndex === -1) {
        products.push(newObj);
        alert("New Product Added to Clothify!");
    } else {
        products[editIndex] = newObj;
        document.getElementById("edit-index").value = "-1";
        document.getElementById("admin-heading").innerText = "Add New Sustainable Product";
        alert("Product Updated!");
    }

    event.target.reset();
    displayProducts(products);
    renderAdminTable();
}

function editProduct(index) {
    let item = products[index];
    document.getElementById("edit-index").value = index;
    document.getElementById("admin-name").value = item.name;
    document.getElementById("admin-category").value = item.category;
    document.getElementById("admin-price").value = item.price;
    document.getElementById("admin-material").value = item.material;
    document.getElementById("admin-water").value = item.waterSaved;
    document.getElementById("admin-image").value = item.image;
    document.getElementById("admin-heading").innerText = "Edit Product";
}

function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts(products);
    renderAdminTable();
}

// Initial Render on Page Load
displayProducts(products);
displayReviews();
renderAdminTable();