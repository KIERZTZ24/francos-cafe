// Complete Francos Official Menu Data (Full Catalog - 55+ Items & Packages)
const defaultProducts = [
    { id: 101, name: "Coffee Jelly", category: "sleepless", price: 120, stock: 25, rating: 4.9, reviewsCount: 18, description: "Signature coffee mixed with chewy coffee jelly.", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80" },
    { id: 102, name: "Creme Brûlée Latte", category: "sleepless", price: 130, stock: 20, rating: 4.8, reviewsCount: 22, description: "Creamy latte topped with torched caramelized layer.", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80" },
    { id: 103, name: "Mocha Latte", category: "sleepless", price: 120, stock: 15, rating: 4.7, reviewsCount: 15, description: "Rich espresso blended with sweet chocolate and fresh milk.", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80" },
    { id: 104, name: "Nutella Espresso", category: "sleepless", price: 140, stock: 18, rating: 5.0, reviewsCount: 30, description: "Rich double espresso blended with hazelnut Nutella spread.", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80" },
    { id: 105, name: "Orange Americano", category: "sleepless", price: 120, stock: 12, rating: 4.6, reviewsCount: 11, description: "Refreshing citrus orange juice fused with bold espresso shot.", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80" },
    { id: 106, name: "Roasted Almond Latte", category: "sleepless", price: 120, stock: 14, rating: 4.8, reviewsCount: 14, description: "Smooth espresso infused with aromatic roasted almond syrup.", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80" },
    { id: 107, name: "Salted Caramel Latte", category: "sleepless", price: 120, stock: 22, rating: 4.9, reviewsCount: 25, description: "Balanced sweet and salty caramel drizzle over espresso.", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80" },
    { id: 108, name: "Seasalt Tropical", category: "sleepless", price: 140, stock: 10, rating: 4.7, reviewsCount: 9, description: "Tropical flavored coffee topped with savory sea salt cream foam.", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80" },
    { id: 109, name: "Skippy Espresso", category: "sleepless", price: 120, stock: 16, rating: 4.8, reviewsCount: 19, description: "Espresso infused with creamy Skippy peanut butter flavor.", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80" },
    { id: 110, name: "Spanish Latte", category: "sleepless", price: 120, stock: 30, rating: 5.0, reviewsCount: 42, description: "Rich double-shot espresso blended with condensed milk.", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80" },
    { id: 111, name: "Tropical Americano", category: "sleepless", price: 110, stock: 15, rating: 4.7, reviewsCount: 12, description: "Fruity tropical twist combined with bold espresso shots.", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80" },
    { id: 112, name: "Vietnamese Egg Coffee", category: "sleepless", price: 110, stock: 18, rating: 4.9, reviewsCount: 25, description: "Traditional sweet Vietnamese egg cream layer over strong espresso.", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80" },

    // 2. SO GREEN
    { id: 201, name: "Matcha Milk", category: "sogreen", price: 120, stock: 25, rating: 4.8, reviewsCount: 24, description: "Classic high-grade Uji matcha whisked with fresh milk.", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80" },
    { id: 202, name: "Matcha Oat", category: "sogreen", price: 140, stock: 18, rating: 4.9, reviewsCount: 20, description: "Premium Uji matcha blended with dairy-free oat milk.", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80" },
    { id: 203, name: "Strawberry Matcha", category: "sogreen", price: 130, stock: 20, rating: 5.0, reviewsCount: 38, description: "Layered fresh strawberry fruit puree and creamy matcha.", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80" },
    { id: 204, name: "Blueberry Matcha", category: "sogreen", price: 130, stock: 15, rating: 4.8, reviewsCount: 16, description: "Sweet blueberry fruit compote layered with Uji matcha.", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80" },
    { id: 205, name: "Caramel Glaze Matcha", category: "sogreen", price: 130, stock: 16, rating: 4.7, reviewsCount: 14, description: "Matcha green tea drizzled with rich caramel glaze.", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80" },
    { id: 206, name: "Pistachio Matcha", category: "sogreen", price: 130, stock: 14, rating: 4.9, reviewsCount: 19, description: "Nutty pistachio flavor fused into creamy Uji matcha.", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80" },
    { id: 207, name: "Espresso Matcha", category: "sogreen", price: 140, stock: 12, rating: 5.0, reviewsCount: 27, description: "Dirty matcha combining bold espresso with Uji green tea.", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80" },
    { id: 208, name: "MatchaTella", category: "sogreen", price: 140, stock: 15, rating: 4.9, reviewsCount: 22, description: "Matcha latte blended with hazelnut Nutella spread.", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80" },
    { id: 209, name: "Oreo Matcha", category: "sogreen", price: 130, stock: 18, rating: 4.8, reviewsCount: 21, description: "Crushed Oreo cookies sprinkled over creamy matcha milk.", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80" },
    { id: 210, name: "Egg Matcha Brûlée", category: "sogreen", price: 140, stock: 10, rating: 5.0, reviewsCount: 18, description: "Matcha topped with torched egg brûlée sweet cream layer.", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80" },
    { id: 211, name: "Earl Grey Matcha", category: "sogreen", price: 120, stock: 15, rating: 4.7, reviewsCount: 13, description: "Fragrant Earl Grey tea blended with ceremonial matcha.", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80" },
    { id: 212, name: "Soda Matcha", category: "sogreen", price: 110, stock: 12, rating: 4.6, reviewsCount: 11, description: "Refreshing sparkling soda infused with Uji matcha extract.", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80" },

    // 3. SNOW
    { id: 301, name: "Coffee Jelly Snow", category: "snow", price: 160, stock: 15, rating: 4.9, reviewsCount: 29, description: "Espresso frappe blended with chewy coffee jelly chunks.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { id: 302, name: "Choco Caramel Snow", category: "snow", price: 160, stock: 14, rating: 4.8, reviewsCount: 23, description: "Blended ice coffee with rich chocolate and caramel drizzle.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { id: 303, name: "Caramel Snow", category: "snow", price: 150, stock: 16, rating: 4.7, reviewsCount: 18, description: "Sweet caramel blended ice frappe.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { id: 304, name: "Mocha Snow", category: "snow", price: 150, stock: 15, rating: 4.8, reviewsCount: 20, description: "Blended chocolate espresso frozen drink.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { id: 305, name: "Roasted Almond Snow", category: "snow", price: 150, stock: 12, rating: 4.9, reviewsCount: 15, description: "Almond syrup blended with iced espresso frappe.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { id: 306, name: "Spanish Latte Snow", category: "snow", price: 150, stock: 18, rating: 5.0, reviewsCount: 26, description: "Condensed milk espresso blended icy beverage.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { id: 307, name: "Matcha Snow", category: "snow", price: 150, stock: 14, rating: 4.8, reviewsCount: 22, description: "Blended Uji matcha ice frappe.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { id: 308, name: "Strawberry Matcha Snow", category: "snow", price: 160, stock: 12, rating: 5.0, reviewsCount: 35, description: "Layered strawberry puree and blended matcha snow.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { id: 309, name: "Cookies and Cream Snow", category: "snow", price: 150, stock: 20, rating: 4.8, reviewsCount: 31, description: "Crushed Oreo cookies blended in vanilla cream ice.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { id: 310, name: "Hershey's Chocolate Snow", category: "snow", price: 150, stock: 16, rating: 4.9, reviewsCount: 28, description: "Rich Hershey's chocolate syrup blended with ice and cream.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { id: 311, name: "Strawberry Snow", category: "snow", price: 140, stock: 15, rating: 4.7, reviewsCount: 19, description: "Sweet strawberry fruit flavor ice blended shake.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { id: 312, name: "Blueberry Snow", category: "snow", price: 140, stock: 14, rating: 4.8, reviewsCount: 17, description: "Refreshing blueberry fruit blended frozen beverage.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },

    // 4. SWEET TOOTH
    { id: 401, name: "Dark Chocolate Drink", category: "sweettooth", price: 110, stock: 25, rating: 4.8, reviewsCount: 14, description: "Rich dark chocolate cocoa mix drink.", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80" },
    { id: 402, name: "Oreo Milk", category: "sweettooth", price: 110, stock: 22, rating: 4.8, reviewsCount: 20, description: "Creamy fresh milk blended with crushed Oreo cookies.", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80" },
    { id: 403, name: "Nutella Milk", category: "sweettooth", price: 120, stock: 18, rating: 5.0, reviewsCount: 28, description: "Warm or iced milk blended with decadent Nutella spread.", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80" },
    { id: 404, name: "Milky Cheesecake", category: "sweettooth", price: 120, stock: 15, rating: 4.9, reviewsCount: 25, description: "Smooth cheesecake flavored creamy milk beverage.", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80" },
    { id: 405, name: "Blueberry Cheesecake", category: "sweettooth", price: 130, stock: 14, rating: 5.0, reviewsCount: 41, description: "Cheesecake milk drink topped with blueberry compote.", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80" },
    { id: 406, name: "Pistachio Cheesecake", category: "sweettooth", price: 130, stock: 12, rating: 4.9, reviewsCount: 22, description: "Creamy cheesecake blend infused with pistachio flavor.", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80" },

    // 5. FRUIT FAVES
    { id: 501, name: "Strawberry Soda Sparkling", category: "fruitfaves", price: 90, stock: 20, rating: 4.7, reviewsCount: 16, description: "Fizzy sparkling soda or dirty chia with strawberry flavor.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80" },
    { id: 502, name: "Green Apple Soda Sparkling", category: "fruitfaves", price: 90, stock: 18, rating: 4.8, reviewsCount: 15, description: "Crisp green apple fizzy sparkling refreshment.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80" },
    { id: 503, name: "Passion Fruit Soda Sparkling", category: "fruitfaves", price: 90, stock: 18, rating: 4.8, reviewsCount: 21, description: "Tropical passionfruit sparkling soda.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80" },
    { id: 504, name: "Blueberry Soda Sparkling", category: "fruitfaves", price: 90, stock: 16, rating: 4.7, reviewsCount: 14, description: "Sweet blueberry fizzy sparkling drink.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80" },
    { id: 505, name: "Orange Punch Sparkling", category: "fruitfaves", price: 90, stock: 15, rating: 4.6, reviewsCount: 13, description: "Citrus orange punch sparkling soda.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80" },
    { id: 506, name: "Fruit of Choice plus Milk", category: "fruitfaves", price: 100, stock: 20, rating: 4.8, reviewsCount: 18, description: "Any chosen fruit flavor blended with fresh milk.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80" },
    { id: 507, name: "Fruit of Choice plus Yakult", category: "fruitfaves", price: 120, stock: 22, rating: 4.9, reviewsCount: 24, description: "Refreshing fruit flavor combined with probiotic Yakult.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80" },
    { id: 508, name: "Fruit of Choice plus Frappe", category: "fruitfaves", price: 140, stock: 15, rating: 4.9, reviewsCount: 20, description: "Blended ice frappe version with your choice of fruit.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80" },

    // 6. EVENT PACKAGES
    { id: 701, name: "Coffee Booth (Good for 50 Cups)", category: "package", price: 5000, stock: 5, rating: 5.0, reviewsCount: 10, description: "TOTAL of 3 pre-chosen drinks (2 Espresso based, 1 Non-Espresso). Max 3.5 hours service.", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80" },
    { id: 702, name: "Coffee Booth (Good for 75 Cups)", category: "package", price: 7000, stock: 4, rating: 5.0, reviewsCount: 12, description: "TOTAL of 3 pre-chosen drinks (2 Espresso based, 1 Non-Espresso). Max 3.5 hours service.", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80" },
    { id: 703, name: "Coffee Booth (Good for 100 Cups)", category: "package", price: 9000, stock: 3, rating: 5.0, reviewsCount: 15, description: "TOTAL of 3 pre-chosen drinks (2 Espresso based, 1 Non-Espresso). Max 3.5 hours service.", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80" }
];

const availableAddOns = [
    { id: 'addon_oat', name: 'Oat Milk', price: 20 },
    { id: 'addon_espresso', name: 'Espresso Shot', price: 30 },
    { id: 'addon_cream', name: 'Whipped Cream', price: 20 },
    { id: 'addon_brulee', name: 'Egg Brûlée', price: 20 },
    { id: 'addon_jam', name: 'Extra Jam', price: 10 }
];

if (!localStorage.getItem("adminMenuItems") || JSON.parse(localStorage.getItem("adminMenuItems")).length < 20) {
    localStorage.setItem("adminMenuItems", JSON.stringify(defaultProducts));
}

function getLiveProducts() {
    return JSON.parse(localStorage.getItem("adminMenuItems")) || defaultProducts;
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    setupDynamicNavbar();
    if (document.getElementById("menu-grid")) {
        renderMenu("all", "");
    }
    if (document.getElementById("cart-items-list")) {
        renderCartPage();
    }
    setupAddOnModalContainer();
    initThemeToggle();
});

// --- DARK / LIGHT MODE THEME HANDLER ---
function initThemeToggle() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);

    const navLinksContainer = document.querySelector(".nav-links");
    if (!navLinksContainer) return;

    let themeBtn = document.getElementById("theme-toggle-btn");
    if (!themeBtn) {
        themeBtn = document.createElement("button");
        themeBtn.id = "theme-toggle-btn";
        themeBtn.className = "theme-toggle-btn";
        themeBtn.title = "Toggle Dark/Light Mode";
        navLinksContainer.appendChild(themeBtn);
    }

    themeBtn.innerHTML = savedTheme === "dark" ? '<i class="fa-solid fa-sun" style="color: #ffd8b1;"></i>' : '<i class="fa-solid fa-moon" style="color: #ffffff;"></i>';

    themeBtn.onclick = () => {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        themeBtn.innerHTML = newTheme === "dark" ? '<i class="fa-solid fa-sun" style="color: #ffd8b1;"></i>' : '<i class="fa-solid fa-moon" style="color: #ffffff;"></i>';
    };
}

// Dynamic Navbar Setup based on User Session
function setupDynamicNavbar() {
    const navLinksContainer = document.querySelector(".nav-links");
    if (!navLinksContainer) return;

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const isInAdmin = window.location.pathname.includes("/admin/");

    if (currentUser && currentUser.role === "admin") {
        const prefix = isInAdmin ? "../" : "";
        const dashPath = isInAdmin ? "dashboard.html" : "admin/dashboard.html";

        navLinksContainer.innerHTML = `
            <a href="${prefix}index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a>
            <a href="${prefix}menu.html" class="${currentPage === 'menu.html' ? 'active' : ''}">Menu</a>
            <a href="${prefix}promo.html" class="${currentPage === 'promo.html' ? 'active' : ''}">Promos</a>
            <a href="${dashPath}" style="color: #f1c40f; font-weight: bold;">Dashboard</a>
            <a href="#" onclick="logoutAppUser(event)">Logout</a>
        `;
    } else if (currentUser && currentUser.role === "customer") {
        navLinksContainer.innerHTML = `
            <a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a>
            <a href="menu.html" class="${currentPage === 'menu.html' ? 'active' : ''}">Menu</a>
            <a href="cart.html" class="${currentPage === 'cart.html' ? 'active' : ''}">Cart (<span id="cart-count">0</span>)</a>
            <a href="my_orders.html" class="${currentPage === 'my_orders.html' ? 'active' : ''}">My Orders</a>
            <a href="promo.html" class="${currentPage === 'promo.html' ? 'active' : ''}">Promos</a>
            <a href="notifications.html" class="${currentPage === 'notifications.html' ? 'active' : ''}">Notifications</a>
            <a href="profile.html" class="${currentPage === 'profile.html' || currentPage === 'settings.html' ? 'active' : ''}">Profile</a>
            <a href="#" onclick="logoutAppUser(event)" style="color: #ffd8b1;">Logout</a>
        `;
    } else {
        navLinksContainer.innerHTML = `
            <a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a>
            <a href="menu.html" class="${currentPage === 'menu.html' ? 'active' : ''}">Menu</a>
            <a href="promo.html" class="${currentPage === 'promo.html' ? 'active' : ''}">Promos</a>
            <a href="login.html" class="${currentPage === 'login.html' ? 'active' : ''}">Login</a>
        `;
    }

    updateCartCount();
    initThemeToggle();
}

function logoutAppUser(e) {
    if (e) e.preventDefault();
    localStorage.removeItem("currentUser");
    showToast("Logged out successfully.");
    
    const isInAdmin = window.location.pathname.includes("/admin/");
    setTimeout(() => {
        window.location.href = isInAdmin ? "../login.html" : "login.html";
    }, 800);
}

function showToast(message) {
    let toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(() => { toast.className = "toast"; }, 3000);
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    let countEl = document.getElementById("cart-count");
    if (countEl) countEl.textContent = totalQty;
}

// Render Menu Cards with Real-time Category & Search Filtering
function renderMenu(category = "all", searchQuery = "") {
    let grid = document.getElementById("menu-grid");
    if (!grid) return;
    grid.innerHTML = "";

    let liveProducts = getLiveProducts();
    let filtered = liveProducts;
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
    }
    if (searchQuery !== "") {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchQuery) || p.description.toLowerCase().includes(searchQuery));
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary); background: var(--card-bg); border-radius: 12px; border: 1px solid var(--border-color);">No drinks found matching your search.</div>`;
        return;
    }

    filtered.forEach(p => {
        let card = document.createElement("div");
        card.className = "card";
        
        let isAvailable = (p.stock !== undefined) ? p.stock > 0 : true;

        let statusBadgeHTML = isAvailable 
            ? `<span style="position: absolute; top: 10px; left: 10px; background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: bold; border: 1px solid #c8e6c9;">🟢 Available (${p.stock} pcs)</span>`
            : `<span style="position: absolute; top: 10px; left: 10px; background: #ffebee; color: #c62828; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: bold; border: 1px solid #ffcdd2;">🔴 Sold Out</span>`;

        let btnHTML = "";

        if (currentUser && currentUser.role === "admin") {
            btnHTML = `<button onclick="window.location.href='admin/dashboard.html'" style="width: 100%; padding: 10px; background: var(--accent-color); color: #fff; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 13px;"><i class="fa-solid fa-pen-to-square"></i> Manage Item / Stock</button>`;
        } else if (!isAvailable) {
            btnHTML = `<button disabled style="width: 100%; padding: 10px; background: #cbd5e1; color: #64748b; border: none; border-radius: 8px; font-weight: bold; font-size: 13px; cursor: not-allowed;">Out of Stock</button>`;
        } else if (p.category === 'package') {
            btnHTML = `<button onclick="handleAddToCartClick(${p.id}, true)" style="width: 100%; padding: 10px; background: var(--accent-color); color: #fff; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 13px;">Book Coffee Booth</button>`;
        } else {
            btnHTML = `<button class="btn-add" onclick="handleAddToCartClick(${p.id}, false)">Add to Cart</button>`;
        }

        card.innerHTML = `
            <div style="position: relative;">
                <img src="${p.image}" alt="${p.name}">
                ${statusBadgeHTML}
                <span style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.75); color: #fff; padding: 4px 8px; border-radius: 6px; font-size: 11px; font-weight: bold;">₱${p.price}</span>
            </div>
            <div class="card-body">
                <span class="card-cat">${p.category.toUpperCase()}</span>
                <h3>${p.name}</h3>
                <p>${p.description}</p>
                <div class="card-footer" style="width: 100%;">
                    ${btnHTML}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Add-on Modal Handler & Cart Management
let selectedProductForCart = null;

function setupAddOnModalContainer() {
    if (document.getElementById("addon-modal-overlay")) return;

    let modalHTML = `
        <div id="addon-modal-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 2000; align-items: center; justify-content: center; padding: 20px;">
            <div style="background: var(--card-bg); color: var(--text-color); border: 1px solid var(--border-color); max-width: 420px; width: 100%; border-radius: 16px; padding: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); position: relative;">
                <h3 id="modal-product-title" style="font-family: 'DM Serif Display', serif; font-size: 22px; margin-bottom: 5px; color: var(--text-color);">Customize Drink</h3>
                <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 20px;">Select your preferred add-ons below:</p>
                
                <div id="modal-addons-list" style="display: flex; flex-direction: column; gap: 10px; max-height: 220px; overflow-y: auto; margin-bottom: 20px; padding-right: 5px;">
                    <!-- Injected dynamically -->
                </div>

                <div style="display: flex; gap: 10px;">
                    <button onclick="closeAddOnModal()" style="flex: 1; padding: 10px; background: transparent; border: 1px solid var(--border-color); color: var(--text-color); border-radius: 8px; font-weight: bold; cursor: pointer;">Cancel</button>
                    <button onclick="confirmAddToCartWithAddons()" style="flex: 1; padding: 10px; background: var(--accent-color); border: none; color: #fff; border-radius: 8px; font-weight: bold; cursor: pointer;">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
    let div = document.createElement("div");
    div.innerHTML = modalHTML;
    document.body.appendChild(div);
}

function handleAddToCartClick(productId, isPackage) {
    let liveProducts = getLiveProducts();
    let product = liveProducts.find(p => p.id === productId);
    if (!product) return;

    if (isPackage) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let existing = cart.find(item => item.id === product.id && (!item.addOns || item.addOns.length === 0));
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ ...product, qty: 1, addOns: [] });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        showToast("Coffee Booth booked & added to cart!");
        return;
    }

    selectedProductForCart = product;
    let listContainer = document.getElementById("modal-addons-list");
    let titleEl = document.getElementById("modal-product-title");
    if (!listContainer || !titleEl) return;

    titleEl.textContent = product.name;
    listContainer.innerHTML = availableAddOns.map(addon => `
        <label style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: var(--bg-color); border: 1px solid var(--border-color); border-radius: 8px; cursor: pointer; font-size: 13px;">
            <span style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" class="addon-checkbox" value="${addon.id}" data-name="${addon.name}" data-price="${addon.price}" style="accent-color: var(--accent-color);">
                ${addon.name}
            </span>
            <span style="font-weight: bold; color: var(--accent-color);">+₱${addon.price}</span>
        </label>
    `).join('');

    document.getElementById("addon-modal-overlay").style.display = "flex";
}

function closeAddOnModal() {
    let overlay = document.getElementById("addon-modal-overlay");
    if (overlay) overlay.style.display = "none";
    selectedProductForCart = null;
}

function confirmAddToCartWithAddons() {
    if (!selectedProductForCart) return;

    let checkboxes = document.querySelectorAll(".addon-checkbox:checked");
    let chosenAddons = [];
    let addOnsTotal = 0;

    checkboxes.forEach(cb => {
        chosenAddons.push({
            id: cb.value,
            name: cb.getAttribute("data-name"),
            price: parseFloat(cb.getAttribute("data-price"))
        });
        addOnsTotal += parseFloat(cb.getAttribute("data-price"));
    });

    let finalPrice = selectedProductForCart.price + addOnsTotal;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItemKey = selectedProductForCart.id + "_" + chosenAddons.map(a => a.id).sort().join("-");
    let existing = cart.find(item => {
        let existingKey = item.id + "_" + (item.addOns || []).map(a => a.id).sort().join("-");
        return existingKey === cartItemKey;
    });

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            ...selectedProductForCart,
            price: finalPrice,
            basePrice: selectedProductForCart.price,
            addOns: chosenAddons,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    closeAddOnModal();
    showToast("Added to cart with add-ons!");
}