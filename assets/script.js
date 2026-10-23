// ==========================================================================
// FRANCOS. BAKES & BREWS - OFFICIAL MENU BASED ON ACTUAL STORE MENU CARDS
// ==========================================================================

const defaultProducts = [
    // ---------------------------------------------------------
    // 1. SLEEPLESS (Caffeinated Mixes)
    // ---------------------------------------------------------
    { 
        id: 101, name: "Coffee Jelly", category: "sleepless", isStar: true,
        prices: { iced16: 120, iced22: 130 },
        price: 120, stock: 25, rating: 4.9, reviewsCount: 28,
        description: "Signature cold brewed espresso paired with chewy coffee jelly.",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 102, name: "Creme Brûlée Latte", category: "sleepless", isStar: true,
        prices: { iced16: 130, iced22: 140 },
        price: 130, stock: 20, rating: 5.0, reviewsCount: 34,
        description: "Creamy iced espresso crowned with rich torched caramelized sugar layer.",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 103, name: "Mocha Latte", category: "sleepless", isStar: false,
        prices: { hot12: 90, iced16: 120, iced22: 150 },
        price: 120, stock: 18, rating: 4.8, reviewsCount: 16,
        description: "Bold espresso blended with sweet dark chocolate cocoa and fresh milk.",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 104, name: "Nutella Espresso", category: "sleepless", isStar: true,
        prices: { hot12: 110, iced16: 140, iced22: 150 },
        price: 140, stock: 19, rating: 5.0, reviewsCount: 42,
        description: "Decadent hazelnut Nutella spread swirled into double-shot espresso milk.",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 105, name: "Orange Americano", category: "sleepless", isStar: false,
        prices: { iced16: 120, iced22: 130 },
        price: 120, stock: 15, rating: 4.7, reviewsCount: 14,
        description: "Crisp and zesty citrus orange juice fused with robust espresso shots.",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 106, name: "Roasted Almond", category: "sleepless", isStar: true,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 20, rating: 4.9, reviewsCount: 22,
        description: "Nutty roasted almond syrup perfectly balanced with smooth espresso.",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 107, name: "Salted Caramel", category: "sleepless", isStar: false,
        prices: { hot12: 90, iced16: 120, iced22: 130 },
        price: 120, stock: 24, rating: 4.8, reviewsCount: 27,
        description: "Sweet caramel drizzle with a touch of savory sea salt over milk espresso.",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 108, name: "Seasalt Tropical", category: "sleepless", isStar: false,
        prices: { hot12: 90, iced16: 140, iced22: 150 },
        price: 140, stock: 12, rating: 4.7, reviewsCount: 11,
        description: "Tropical flavored blend layered with rich savory sea salt cream foam.",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 109, name: "Skippy Espresso", category: "sleepless", isStar: true,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 20, rating: 4.9, reviewsCount: 31,
        description: "Original creamy Skippy peanut butter infused with strong fresh espresso.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 110, name: "Spanish Latte", category: "sleepless", isStar: true,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 35, rating: 5.0, reviewsCount: 65,
        description: "Store Crowd Favorite. Double espresso mixed with silky condensed milk.",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 111, name: "Tropical Americano", category: "sleepless", isStar: false,
        prices: { hot12: 90, iced16: 110, iced22: 120 },
        price: 110, stock: 16, rating: 4.6, reviewsCount: 15,
        description: "Fruity tropical undertones mixed with double espresso and ice cold water.",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 112, name: "Vietnamese Egg Coffee", category: "sleepless", isStar: false,
        prices: { hot12: 90, iced16: 110, iced22: 120 },
        price: 110, stock: 18, rating: 4.9, reviewsCount: 29,
        description: "Traditional whipped egg yolk custard cream floated over bold espresso.",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80"
    },

    // ---------------------------------------------------------
    // 2. SO GREEN (Premium Matcha Drinks)
    // ---------------------------------------------------------
    { 
        id: 201, name: "Matcha Milk", category: "sogreen", isStar: true,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 25, rating: 4.9, reviewsCount: 36,
        description: "Authentic ceremonial Uji matcha whisked fresh with velvety steamed or cold milk.",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 202, name: "Matcha Oat", category: "sogreen", isStar: false,
        prices: { hot12: 120, iced16: 140, iced22: 150 },
        price: 140, stock: 20, rating: 4.9, reviewsCount: 25,
        description: "Ceremonial Uji green tea paired with smooth lactose-free oat milk.",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 203, name: "Strawberry Matcha", category: "sogreen", isStar: true,
        prices: { iced16: 130, iced22: 140 },
        price: 130, stock: 22, rating: 5.0, reviewsCount: 54,
        description: "Layered real strawberry compote puree, cold fresh milk, and rich Uji matcha.",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 204, name: "Blueberry Matcha", category: "sogreen", isStar: false,
        prices: { iced16: 130, iced22: 140 },
        price: 130, stock: 16, rating: 4.8, reviewsCount: 19,
        description: "Sweet blueberry fruit compote layered with ceremonial green tea.",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 205, name: "Caramel Glaze Matcha", category: "sogreen", isStar: false,
        prices: { hot12: 110, iced16: 130, iced22: 140 },
        price: 130, stock: 18, rating: 4.7, reviewsCount: 16,
        description: "Uji matcha green tea drizzled with deep caramel glaze sauce.",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 206, name: "Pistachio Matcha", category: "sogreen", isStar: false,
        prices: { hot12: 110, iced16: 130, iced22: 140 },
        price: 130, stock: 15, rating: 4.9, reviewsCount: 24,
        description: "Nutty pistachio flavor fused with ceremonial Japanese matcha milk.",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 207, name: "Espresso Matcha", category: "sogreen", isStar: false,
        prices: { hot12: 120, iced16: 140, iced22: 150 },
        price: 140, stock: 15, rating: 5.0, reviewsCount: 30,
        description: "Dirty Matcha. The ultimate fusion of double-shot espresso and green tea.",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 208, name: "MatchaTella", category: "sogreen", isStar: true,
        prices: { hot12: 110, iced16: 140, iced22: 150 },
        price: 140, stock: 18, rating: 4.9, reviewsCount: 26,
        description: "Creamy Uji matcha blended with decadent Italian Nutella hazelnut chocolate.",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 209, name: "Oreo Matcha", category: "sogreen", isStar: false,
        prices: { hot12: 110, iced16: 130, iced22: 140 },
        price: 130, stock: 20, rating: 4.8, reviewsCount: 22,
        description: "Crunchy crushed Oreo cookie crumble dusted over sweet matcha milk.",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 210, name: "Egg Matcha Brûlée", category: "sogreen", isStar: false,
        prices: { iced16: 140, iced22: 150 },
        price: 140, stock: 14, rating: 5.0, reviewsCount: 25,
        description: "Ceremonial matcha finished with torch-caramelized egg cream crust.",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 211, name: "Earl Grey Matcha", category: "sogreen", isStar: false,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 16, rating: 4.7, reviewsCount: 14,
        description: "Floral Earl Grey bergamot notes combined with ceremonial Japanese matcha.",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 212, name: "Soda Matcha", category: "sogreen", isStar: false,
        prices: { iced16: 110, iced22: 120 },
        price: 110, stock: 15, rating: 4.6, reviewsCount: 12,
        description: "Sparkling effervescent soda water infused with pure Uji matcha extract.",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80"
    },

    // ---------------------------------------------------------
    // 3. SNOW (Frappes - All Fixed at 22oz)
    // ---------------------------------------------------------
    { 
        id: 301, name: "Coffee Jelly Snow", category: "snow", isStar: true,
        prices: { iced22: 160 }, price: 160, stock: 20, rating: 5.0, reviewsCount: 40,
        description: "22oz Espresso frappe loaded with sweet chewy coffee jelly chunks.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 302, name: "Choco Caramel Snow", category: "snow", isStar: true,
        prices: { iced22: 160 }, price: 160, stock: 18, rating: 4.9, reviewsCount: 29,
        description: "22oz Ice blended espresso with rich chocolate and caramel ribbons.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 303, name: "Caramel Snow", category: "snow", isStar: false,
        prices: { iced22: 150 }, price: 150, stock: 16, rating: 4.8, reviewsCount: 20,
        description: "22oz Sweet golden caramel blended with ice, milk, and espresso.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 304, name: "Mocha Snow", category: "snow", isStar: false,
        prices: { iced22: 150 }, price: 150, stock: 16, rating: 4.8, reviewsCount: 19,
        description: "22oz Chocolate espresso blended ice frappe with whipped cream.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 305, name: "Roasted Almond Snow", category: "snow", isStar: false,
        prices: { iced22: 150 }, price: 150, stock: 14, rating: 4.8, reviewsCount: 15,
        description: "22oz Almond syrup infused blended frozen espresso frappe.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 306, name: "Spanish Latte Snow", category: "snow", isStar: false,
        prices: { iced22: 150 }, price: 150, stock: 22, rating: 5.0, reviewsCount: 32,
        description: "22oz Condensed milk espresso blended into creamy frozen perfection.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 307, name: "Matcha Snow", category: "snow", isStar: true,
        prices: { iced22: 150 }, price: 150, stock: 20, rating: 4.9, reviewsCount: 26,
        description: "22oz Pure ceremonial Uji matcha blended ice shake with sweet milk.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 308, name: "Strawberry Matcha Snow", category: "snow", isStar: true,
        prices: { iced22: 160 }, price: 160, stock: 18, rating: 5.0, reviewsCount: 45,
        description: "22oz Real strawberry puree layered with blended ceremonial Uji matcha.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 309, name: "Cookies and Cream Snow", category: "snow", isStar: false,
        prices: { iced22: 150 }, price: 150, stock: 22, rating: 4.8, reviewsCount: 33,
        description: "22oz Crushed Oreo cookies blended in sweet vanilla cream ice.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 310, name: "Hershey's Chocolate Snow", category: "snow", isStar: true,
        prices: { iced22: 150 }, price: 150, stock: 19, rating: 4.9, reviewsCount: 31,
        description: "22oz Rich genuine Hershey's chocolate syrup blended with ice and dairy.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 311, name: "Strawberry Snow", category: "snow", isStar: true,
        prices: { iced22: 140 }, price: 140, stock: 17, rating: 4.8, reviewsCount: 25,
        description: "22oz Refreshing strawberry fruit compote ice blended shake.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 312, name: "Blueberry Snow", category: "snow", isStar: false,
        prices: { iced22: 140 }, price: 140, stock: 16, rating: 4.8, reviewsCount: 20,
        description: "22oz Wild blueberry blended ice smoothie refreshment.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80"
    },

    // ---------------------------------------------------------
    // 4. SWEET TOOTH (Non-Coffee Mixes)
    // ---------------------------------------------------------
    { 
        id: 401, name: "Dark Chocolate", category: "sweettooth", isStar: false,
        prices: { hot12: 80, iced16: 110, iced22: 120 },
        price: 110, stock: 25, rating: 4.8, reviewsCount: 21,
        description: "Comforting dark chocolate cocoa drink served hot or iced.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 402, name: "Oreo Milk", category: "sweettooth", isStar: false,
        prices: { hot12: 80, iced16: 110, iced22: 120 },
        price: 110, stock: 24, rating: 4.8, reviewsCount: 25,
        description: "Fresh cold milk blended with real crushed Oreo cookies.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 403, name: "Nutella Milk", category: "sweettooth", isStar: false,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 20, rating: 5.0, reviewsCount: 36,
        description: "Steamed or iced fresh milk fused with hazelnut Nutella chocolate.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 404, name: "Milky Cheesecake", category: "sweettooth", isStar: false,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 18, rating: 4.9, reviewsCount: 24,
        description: "Smooth cheesecake sweet cream infused cold milk beverage.",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 405, name: "Blueberry Cheesecake", category: "sweettooth", isStar: true,
        prices: { iced16: 130, iced22: 140 },
        price: 130, stock: 20, rating: 5.0, reviewsCount: 48,
        description: "Cheesecake cream drink topped with rich wild blueberry compote.",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 406, name: "Pistachio Cheesecake", category: "sweettooth", isStar: false,
        prices: { iced16: 130, iced22: 140 },
        price: 130, stock: 15, rating: 4.9, reviewsCount: 27,
        description: "Decadent pistachio and creamy cheesecake milk fusion.",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80"
    },

    // ---------------------------------------------------------
    // 5. FRUIT FAVES (Soda Sparkling or Dirty Chia - 22oz)
    // ---------------------------------------------------------
    { 
        id: 501, name: "Strawberry Sparkling / Dirty Chia", category: "fruitfaves", isStar: false,
        prices: { iced22: 90 }, price: 90, stock: 22, rating: 4.7, reviewsCount: 18,
        description: "22oz Fizzy sparkling soda or dirty chia infused with strawberry flavor.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 502, name: "Green Apple Sparkling / Dirty Chia", category: "fruitfaves", isStar: false,
        prices: { iced22: 90 }, price: 90, stock: 20, rating: 4.8, reviewsCount: 15,
        description: "22oz Crisp green apple sparkling soda or dirty chia cooler.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 503, name: "Passion Fruit Sparkling / Dirty Chia", category: "fruitfaves", isStar: false,
        prices: { iced22: 90 }, price: 90, stock: 19, rating: 4.8, reviewsCount: 22,
        description: "22oz Tropical passionfruit fizz cooler with optional chia seed blend.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 504, name: "Blueberry Sparkling / Dirty Chia", category: "fruitfaves", isStar: false,
        prices: { iced22: 90 }, price: 90, stock: 18, rating: 4.7, reviewsCount: 17,
        description: "22oz Wild blueberry fizzy sparkling refreshment or dirty chia.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 505, name: "Orange Punch Sparkling / Dirty Chia", category: "fruitfaves", isStar: false,
        prices: { iced22: 90 }, price: 90, stock: 17, rating: 4.6, reviewsCount: 14,
        description: "22oz Sweet citrus orange punch cooler with sparkling soda.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 506, name: "Fruit of Choice plus Milk", category: "fruitfaves", isStar: false,
        prices: { iced22: 100 }, price: 100, stock: 20, rating: 4.8, reviewsCount: 19,
        description: "22oz Any chosen fruit flavor (Strawberry, Apple, Blueberry) mixed with fresh milk.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 507, name: "Fruit of Choice plus Yakult", category: "fruitfaves", isStar: false,
        prices: { iced22: 120 }, price: 120, stock: 22, rating: 4.9, reviewsCount: 26,
        description: "22oz Refreshing fruit syrup paired with probiotic Yakult.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 508, name: "Fruit of Choice + Frappe", category: "fruitfaves", isStar: false,
        prices: { iced22: 140 }, price: 140, stock: 16, rating: 4.9, reviewsCount: 21,
        description: "22oz Blended ice fruit frappe of your favorite fruit choice.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80"
    },

    // ---------------------------------------------------------
    // 6. OAT MILK (Milk Alternative - Espresso-based)
    // ---------------------------------------------------------
    { 
        id: 601, name: "Skippy Espresso Oat", category: "oatmilk", isStar: false,
        prices: { hot12: 120, iced16: 140, iced22: 150 },
        price: 140, stock: 18, rating: 4.8, reviewsCount: 18,
        description: "Skippy peanut butter espresso blended with plant-based oat milk.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 602, name: "Café Oat Latte", category: "oatmilk", isStar: false,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 20, rating: 4.7, reviewsCount: 15,
        description: "Classic rich espresso paired with steamed or iced creamy oat milk.",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 603, name: "Roasted Almond Oat", category: "oatmilk", isStar: true,
        prices: { hot12: 120, iced16: 140, iced22: 150 },
        price: 140, stock: 18, rating: 4.9, reviewsCount: 26,
        description: "Roasted almond syrup with smooth double-shot espresso over oat milk.",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 604, name: "Spanish Oat", category: "oatmilk", isStar: false,
        prices: { hot12: 120, iced16: 140, iced22: 150 },
        price: 140, stock: 22, rating: 5.0, reviewsCount: 35,
        description: "Condensed sweet milk with double-shot espresso and creamy oat milk.",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 605, name: "Nutella Espresso Oat", category: "oatmilk", isStar: false,
        prices: { hot12: 130, iced16: 160, iced22: 170 },
        price: 160, stock: 16, rating: 5.0, reviewsCount: 29,
        description: "Decadent Nutella spread and bold espresso over non-dairy oat milk.",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 606, name: "Matcha Oat", category: "oatmilk", isStar: true,
        prices: { hot12: 120, iced16: 140, iced22: 150 },
        price: 140, stock: 20, rating: 5.0, reviewsCount: 38,
        description: "Premium ceremonial Uji matcha whisked with plant-based oat milk.",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80"
    },

    // ---------------------------------------------------------
    // 7. COFFEE BOOTH EVENT PACKAGES (Mobile Cart)
    // ---------------------------------------------------------
    { 
        id: 701, name: "Coffee Booth (Good for 50 Cups)", category: "package", isStar: false,
        prices: { default: 5000 }, price: 5000, stock: 5, rating: 5.0, reviewsCount: 15,
        description: "5,000 PhP. Total of 3 pre-chosen drinks (2 Espresso-based, 1 Non-Espresso). Max 3.5 hrs service.",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 702, name: "Coffee Booth (Good for 75 Cups)", category: "package", isStar: false,
        prices: { default: 7000 }, price: 7000, stock: 4, rating: 5.0, reviewsCount: 18,
        description: "7,000 PhP. Total of 3 pre-chosen drinks (2 Espresso-based, 1 Non-Espresso). Max 3.5 hrs service.",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 703, name: "Coffee Booth (Good for 100 Cups)", category: "package", isStar: false,
        prices: { default: 9000 }, price: 9000, stock: 3, rating: 5.0, reviewsCount: 22,
        description: "9,000 PhP. Total of 3 pre-chosen drinks (2 Espresso-based, 1 Non-Espresso). Max 3.5 hrs service.",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80"
    }
];

// Official Store Add Ons
const availableAddOns = [
    { id: 'addon_oat', name: 'Oat Milk', price: 20 },
    { id: 'addon_espresso', name: 'Espresso Shot', price: 30 },
    { id: 'addon_cream', name: 'Whipped Cream', price: 20 },
    { id: 'addon_brulee', name: 'Egg Brûlée', price: 20 },
    { id: 'addon_jam', name: 'Extra Jam', price: 10 }
];

localStorage.setItem("adminMenuItems", JSON.stringify(defaultProducts));

function getLiveProducts() {
    return JSON.parse(localStorage.getItem("adminMenuItems")) || defaultProducts;
}

// Global initialization
document.addEventListener("DOMContentLoaded", () => {
    setupAnnouncementBar();
    setupSiteFooter();
    updateCartCount();
    setupDynamicNavbar();
    setupQuickViewModalContainer();
    setupCoffeeQuizModal();
    initThemeToggle();
});

// Top Marquee Ticker
function setupAnnouncementBar() {
    if (document.getElementById("top-announcement-bar")) return;
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    const bar = document.createElement("div");
    bar.id = "top-announcement-bar";
    bar.className = "announcement-bar";

    const tickerHTML = `
        <div class="marquee-track">
            <span class="marquee-item"><i class="fa-solid fa-motorcycle"></i> Flat ₱50 Local Delivery around Binalonan</span>
            <span class="marquee-item"><i class="fa-solid fa-leaf"></i> Authentic Ceremonial Japanese Uji Matcha</span>
            <span class="marquee-item"><i class="fa-solid fa-ticket"></i> Member Perk: Use code FRANCOS50 for ₱50 OFF</span>
            <span class="marquee-item"><i class="fa-solid fa-mug-hot"></i> Freshly Roasted Double-Shot Espresso</span>
            <span class="marquee-item"><i class="fa-solid fa-champagne-glasses"></i> Book Our Mobile Coffee Booth for Events</span>
            <!-- Seamless loop -->
            <span class="marquee-item"><i class="fa-solid fa-motorcycle"></i> Flat ₱50 Local Delivery around Binalonan</span>
            <span class="marquee-item"><i class="fa-solid fa-leaf"></i> Authentic Ceremonial Japanese Uji Matcha</span>
            <span class="marquee-item"><i class="fa-solid fa-ticket"></i> Member Perk: Use code FRANCOS50 for ₱50 OFF</span>
            <span class="marquee-item"><i class="fa-solid fa-mug-hot"></i> Freshly Roasted Double-Shot Espresso</span>
            <span class="marquee-item"><i class="fa-solid fa-champagne-glasses"></i> Book Our Mobile Coffee Booth for Events</span>
        </div>
    `;
    bar.innerHTML = tickerHTML;
    navbar.parentNode.insertBefore(bar, navbar);
}

// Universal 4-Column Footer (Malinis: Wala nang Rider Portal sa public view)
function setupSiteFooter() {
    const footer = document.querySelector("footer");
    if (!footer) return;
    
    const isInAdmin = /[\\/]admin[\\/]/.test(window.location.pathname) || window.location.pathname.startsWith("admin");
    const prefix = isInAdmin ? "../" : "";

    footer.className = "site-footer";
    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-grid">
                
                <div class="footer-col">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px;">
                        <img src="${prefix}assets/images/logo.jpg" alt="Francos Logo" style="height: 38px; border-radius: 6px;">
                        <span style="font-family: 'DM Serif Display', serif; font-size: 22px; font-weight: bold; color: #fff;">
                            Francos<span style="color: var(--accent-color);">.</span>
                        </span>
                    </div>
                    <p>Artisanal espresso brews, authentic Japanese Uji matcha, and handcrafted bakes served fresh daily in Binalonan, Pangasinan.</p>
                    
                    <div class="footer-social-links">
                        <a href="https://facebook.com" target="_blank" class="social-circle-btn" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://instagram.com" target="_blank" class="social-circle-btn" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://tiktok.com" target="_blank" class="social-circle-btn" title="TikTok"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="https://maps.google.com/?q=Canarvacanan+Binalonan+Pangasinan" target="_blank" class="social-circle-btn" title="Google Maps"><i class="fa-solid fa-location-dot"></i></a>
                    </div>
                </div>

                <div class="footer-col">
                    <h4>Navigation</h4>
                    <ul class="footer-links">
                        <li><a href="${prefix}index.html">Home</a></li>
                        <li><a href="${prefix}menu.html">Official Menu</a></li>
                        <li><a href="${prefix}promo.html">Special Promos</a></li>
                        <li><a href="${prefix}my_orders.html">Track My Orders</a></li>
                        <li><a href="${prefix}faq.html">Help & FAQs</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Café Hours</h4>
                    <p style="margin-bottom: 8px;"><strong style="color: #fff;">Monday – Sunday</strong><br>8:00 AM – 6:00 PM</p>
                    <p style="margin-bottom: 8px;"><strong style="color: #fff;">Location:</strong><br>Brgy. Canarvacanan, Binalonan, Pangasinan, 2436</p>
                    <span style="display: inline-block; background: rgba(46, 125, 50, 0.2); color: #81c784; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 700; border: 1px solid rgba(129, 199, 132, 0.3);">
                        🟢 Dine-In, Pickup & Delivery
                    </span>
                </div>

                <div class="footer-col">
                    <h4>Get In Touch</h4>
                    <div class="footer-contact-item">
                        <i class="fa-solid fa-phone"></i>
                        <span>+63 912 345 6789</span>
                    </div>
                    <div class="footer-contact-item">
                        <i class="fa-solid fa-envelope"></i>
                        <span>hello@francosbakes.local</span>
                    </div>
                    <p style="margin-top: 14px; font-size: 12px; color: #d4c1b5;">
                        Planning an event? Rent our <strong>Mobile Coffee Bar</strong> directly via our Event Packages!
                    </p>
                </div>

            </div>

            <div class="footer-bottom">
                <span>&copy; 2026 Francos. Bakes and Brews · All Rights Reserved.</span>
                <span style="display: flex; align-items: center; gap: 6px;">
                    Handcrafted with <i class="fa-solid fa-heart" style="color: var(--accent-color); font-size: 11px;"></i> in Pangasinan
                </span>
            </div>
        </div>
    `;
}

// Dark/Light Theme Handler
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

    themeBtn.innerHTML = savedTheme === "dark" 
        ? '<i class="fa-solid fa-sun" style="color: #ffd8b1;"></i>' 
        : '<i class="fa-solid fa-moon" style="color: #ffffff;"></i>';

    themeBtn.onclick = () => {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        themeBtn.style.transform = "rotate(360deg) scale(1.1)";
        setTimeout(() => {
            themeBtn.innerHTML = newTheme === "dark" 
                ? '<i class="fa-solid fa-sun" style="color: #ffd8b1;"></i>' 
                : '<i class="fa-solid fa-moon" style="color: #ffffff;"></i>';
            themeBtn.style.transform = "none";
        }, 150);

        showToast(newTheme === "dark" ? "Switched to Dark Mode 🌙" : "Switched to Light Mode ☀️");
    };
}

// Dynamic Navbar Setup (Malinis: Walang Rider sa Customer & Guest!)
function setupDynamicNavbar() {
    const navbar = document.querySelector(".navbar");
    const navLinksContainer = document.querySelector(".nav-links");
    if (!navbar || !navLinksContainer) return;

    let menuBtn = document.getElementById("mobile-menu-toggle");
    if (!menuBtn) {
        menuBtn = document.createElement("button");
        menuBtn.id = "mobile-menu-toggle";
        menuBtn.className = "hamburger-btn";
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        menuBtn.onclick = () => {
            navLinksContainer.classList.toggle("open");
            menuBtn.innerHTML = navLinksContainer.classList.contains("open") 
                ? '<i class="fa-solid fa-xmark"></i>' 
                : '<i class="fa-solid fa-bars"></i>';
        };
        navbar.appendChild(menuBtn);
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const isInAdmin = /[\\/]admin[\\/]/.test(window.location.pathname) || window.location.pathname.startsWith("admin");
    const prefix = isInAdmin ? "../" : "";

    if (currentUser && currentUser.role === "admin") {
        const dashPath = isInAdmin ? "dashboard.html" : "admin/dashboard.html";
        navLinksContainer.innerHTML = `
            <a href="${prefix}index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a>
            <a href="${prefix}menu.html" class="${currentPage === 'menu.html' ? 'active' : ''}">Menu</a>
            <a href="${prefix}promo.html" class="${currentPage === 'promo.html' ? 'active' : ''}">Promos</a>
            <a href="${dashPath}" style="color: #ffd8b1; font-weight: bold;">Dashboard</a>
            <a href="#" onclick="logoutAppUser(event)">Logout</a>
        `;
    } else if (currentUser && currentUser.role === "customer") {
        let allOrders = JSON.parse(localStorage.getItem("storeOrders")) || [];
        let userOrders = allOrders.filter(o => o.customerEmail === currentUser.email);
        let notifCount = userOrders.length;
        let notifBadge = notifCount > 0 ? `<span style="background:var(--accent-color); color:#fff; font-size:10px; font-weight:bold; padding:2px 6px; border-radius:10px; margin-left:3px;">${notifCount}</span>` : '';

        navLinksContainer.innerHTML = `
            <a href="${prefix}index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a>
            <a href="${prefix}menu.html" class="${currentPage === 'menu.html' ? 'active' : ''}">Menu</a>
            <a href="${prefix}cart.html" class="${currentPage === 'cart.html' ? 'active' : ''}">Cart (<span id="cart-count">0</span>)</a>
            <a href="${prefix}my_orders.html" class="${currentPage === 'my_orders.html' ? 'active' : ''}">My Orders</a>
            <a href="${prefix}notifications.html" class="${currentPage === 'notifications.html' ? 'active' : ''}">Alerts ${notifBadge}</a>
            <a href="${prefix}promo.html" class="${currentPage === 'promo.html' ? 'active' : ''}">Promos</a>
            <a href="${prefix}profile.html" class="${currentPage === 'profile.html' || currentPage === 'settings.html' ? 'active' : ''}">Profile</a>
            <a href="#" onclick="logoutAppUser(event)" style="color: #ffd8b1;">Logout</a>
        `;
    } else {
        navLinksContainer.innerHTML = `
            <a href="${prefix}index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a>
            <a href="${prefix}menu.html" class="${currentPage === 'menu.html' ? 'active' : ''}">Menu</a>
            <a href="${prefix}promo.html" class="${currentPage === 'promo.html' ? 'active' : ''}">Promos</a>
            <a href="${prefix}faq.html" class="${currentPage === 'faq.html' ? 'active' : ''}">FAQ</a>
            <a href="${prefix}login.html" class="${currentPage === 'login.html' ? 'active' : ''}">Login</a>
        `;
    }

    updateCartCount();
    initThemeToggle();
}

function logoutAppUser(e) {
    if (e) e.preventDefault();
    localStorage.removeItem("currentUser");
    showToast("Logged out successfully.");
    
    const isInAdmin = /[\\/]admin[\\/]/.test(window.location.pathname) || window.location.pathname.startsWith("admin");
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

// Cart Counter & Floating Cart Bar
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    let countEl = document.getElementById("cart-count");
    if (countEl) countEl.textContent = totalQty;

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    if (currentPage === "cart.html" || currentPage === "order_success.html") return;

    let floatBar = document.getElementById("floating-cart-pill");
    if (!floatBar) {
        floatBar = document.createElement("a");
        floatBar.id = "floating-cart-pill";
        floatBar.href = "cart.html";
        floatBar.className = "floating-cart-bar";
        document.body.appendChild(floatBar);
    }

    if (totalQty > 0) {
        floatBar.innerHTML = `
            <div class="floating-cart-info">
                <span class="floating-cart-badge">${totalQty}</span>
                <span>₱${totalPrice.toFixed(2)}</span>
            </div>
            <div class="floating-cart-btn-text">
                Checkout Basket <i class="fa-solid fa-arrow-right"></i>
            </div>
        `;
        floatBar.classList.add("visible");
    } else {
        floatBar.classList.remove("visible");
    }
}

// Favorites Wishlist
function getFavorites() {
    return JSON.parse(localStorage.getItem("userFavorites")) || [];
}

function toggleFavorite(productId, e) {
    if (e) e.stopPropagation();
    let favs = getFavorites();
    let idx = favs.indexOf(productId);
    let products = getLiveProducts();
    let p = products.find(item => item.id === productId);
    let pName = p ? p.name : "Drink";

    if (idx > -1) {
        favs.splice(idx, 1);
        showToast("Removed " + pName + " from Favorites");
    } else {
        favs.push(productId);
        showToast("Saved " + pName + " to Favorites!");
    }
    localStorage.setItem("userFavorites", JSON.stringify(favs));
    
    let favBadge = document.getElementById("count-favorites");
    if (favBadge) favBadge.textContent = favs.length;

    if (typeof renderMenuWithSorting === "function") {
        renderMenuWithSorting();
    } else if (document.getElementById("menu-grid")) {
        renderMenu("all", "");
    }
}

// Render Menu Cards
function renderMenu(category = "all", searchQuery = "", sortOrder = "featured") {
    let grid = document.getElementById("menu-grid");
    if (!grid) return;
    grid.innerHTML = "";

    let products = [...getLiveProducts()];
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let favs = getFavorites();

    let favBadge = document.getElementById("count-favorites");
    if (favBadge) favBadge.textContent = favs.length;

    if (category === "favorites") {
        products = products.filter(p => favs.includes(p.id));
    } else if (category !== "all") {
        products = products.filter(p => p.category === category);
    }

    if (searchQuery !== "") {
        products = products.filter(p => 
            p.name.toLowerCase().includes(searchQuery) || 
            p.description.toLowerCase().includes(searchQuery)
        );
    }

    if (sortOrder === "price-low") {
        products.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-high") {
        products.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "top-rated") {
        products.sort((a, b) => (b.rating || 5) - (a.rating || 5));
    }

    if (products.length === 0) {
        let emptyMsg = category === "favorites" 
            ? "You haven't saved any favorite drinks yet. Tap the heart icon on any drink to add it here!"
            : "No drinks found. Try searching for another keyword or select a different category.";

        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; color: var(--text-secondary); background: var(--card-bg); border-radius: 16px; border: 1px solid var(--border-color);">
                <div style="width: 54px; height: 54px; border-radius: 50%; background: rgba(229, 57, 53, 0.12); color: #e53935; display: inline-flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 12px;">
                    <i class="fa-solid fa-heart"></i>
                </div>
                <h3 style="color: var(--text-color); margin: 6px 0;">No Drinks Found</h3>
                <p style="font-size: 13px; margin: 0; max-width: 480px; margin: 0 auto;">${emptyMsg}</p>
            </div>
        `;
        return;
    }

    products.forEach(p => {
        let card = document.createElement("div");
        card.className = "card";
        
        let stock = p.stock !== undefined ? p.stock : 10;
        let isAvailable = stock > 0;
        let isFav = favs.includes(p.id);

        let ribbonHTML = "";
        if (!isAvailable) {
            ribbonHTML = `<span style="position: absolute; top: 12px; left: 12px; background: rgba(198,40,40,0.92); color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 10.5px; font-weight: bold; z-index: 5;">🔴 Sold Out</span>`;
        } else if (stock <= 5) {
            ribbonHTML = `<span style="position: absolute; top: 12px; left: 12px; background: rgba(230,81,0,0.92); color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 10.5px; font-weight: bold; z-index: 5;">⚠️ Only ${stock} left</span>`;
        } else if (p.isStar) {
            ribbonHTML = `<span class="badge-best-seller"><i class="fa-solid fa-star"></i> Store Star</span>`;
        }

        let btnHTML = "";
        if (currentUser && currentUser.role === "admin") {
            btnHTML = `<button onclick="window.location.href='admin/dashboard.html'" style="width: 100%; padding: 11px; background: var(--accent-color); color: #fff; border: none; border-radius: 10px; font-weight: bold; cursor: pointer; font-size: 13px;"><i class="fa-solid fa-boxes-stacked"></i> Manage Stock</button>`;
        } else if (!isAvailable) {
            btnHTML = `<button disabled style="width: 100%; padding: 11px; background: var(--border-color); color: var(--text-secondary); border: none; border-radius: 10px; font-weight: bold; font-size: 13px; cursor: not-allowed;">Out of Stock</button>`;
        } else if (p.category === 'package') {
            btnHTML = `<button class="btn-add" onclick="handleAddToCartClick(${p.id}, true)"><i class="fa-solid fa-champagne-glasses"></i> Book Event Booth</button>`;
        } else {
            btnHTML = `<button class="btn-add" onclick="openQuickViewModal(${p.id})"><i class="fa-solid fa-sliders"></i> Customize & Add</button>`;
        }

        let startingPrice = p.price;
        if (p.prices) {
            let allP = Object.values(p.prices);
            startingPrice = Math.min(...allP);
        }

        card.innerHTML = `
            <div style="position: relative; cursor: pointer; overflow: hidden; height: 190px;" onclick="openQuickViewModal(${p.id})">
                <img src="${p.image}" alt="${p.name}">
                ${ribbonHTML}
                
                <span style="position: absolute; bottom: 12px; left: 12px; background: rgba(0,0,0,0.85); color: #fff; padding: 5px 12px; border-radius: 20px; font-size: 13px; font-weight: 800; backdrop-filter: blur(5px); border: 1px solid rgba(255,255,255,0.2); z-index: 5;">
                    ₱${startingPrice.toFixed(2)}${p.prices && Object.keys(p.prices).length > 1 ? '+' : ''}
                </span>

                <button class="favorite-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(${p.id}, event)" title="${isFav ? 'Remove from favorites' : 'Save to favorites'}">
                    <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
            </div>
            <div class="card-body">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <span class="card-cat">${p.category.toUpperCase()}</span>
                    <div style="display: flex; align-items: center; gap: 4px; font-size: 11px; color: #f59e0b;">
                        <i class="fa-solid fa-star"></i>
                        <strong style="color: var(--text-color);">${p.rating || 4.9}</strong>
                        <span style="color: var(--text-secondary);">(${p.reviewsCount || 15})</span>
                    </div>
                </div>
                <h3 style="cursor: pointer;" onclick="openQuickViewModal(${p.id})">${p.name}</h3>
                <p>${p.description}</p>
                <div class="card-footer" style="width: 100%;">
                    ${btnHTML}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
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
        showToast("Coffee Booth Package added to basket!");
        return;
    }

    openQuickViewModal(productId);
}

// Drink Customizer Modal with Size Selection
let selectedQuickViewProduct = null;
let currentSelectedSize = "iced16";
let currentTemp = "Iced";
let currentSugar = "100%";
let currentIce = "Regular Ice";

function setupQuickViewModalContainer() {
    if (document.getElementById("quickview-modal-overlay")) return;

    let modalHTML = `
        <div id="quickview-modal-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.65); z-index: 2500; align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(6px);">
            <div style="background: var(--card-bg); color: var(--text-color); border: 1px solid var(--border-color); max-width: 480px; width: 100%; border-radius: 22px; overflow: hidden; box-shadow: var(--card-shadow); position: relative; max-height: 92vh; display: flex; flex-direction: column;">
                
                <div style="position: relative; height: 165px; flex-shrink: 0;">
                    <img id="qv-product-image" src="" alt="Product Image" style="width: 100%; height: 100%; object-fit: cover;">
                    <button onclick="closeQuickViewModal()" style="position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.6); color: #fff; border: none; width: 34px; height: 34px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 15px;"><i class="fa-solid fa-xmark"></i></button>
                    <span id="qv-product-price" style="position: absolute; bottom: 12px; right: 12px; background: rgba(0,0,0,0.8); color: #fff; padding: 6px 14px; border-radius: 20px; font-weight: bold; font-size: 15px;">₱0.00</span>
                </div>

                <div style="padding: 20px; overflow-y: auto;">
                    <span id="qv-product-cat" style="font-size: 10.5px; font-weight: 800; color: var(--accent-color); text-transform: uppercase; letter-spacing: 1px;">Category</span>
                    <h2 id="qv-product-name" style="font-family: 'DM Serif Display', serif; font-size: 23px; color: var(--text-color); margin: 2px 0 6px;">Product Name</h2>
                    <p id="qv-product-desc" style="font-size: 12.5px; color: var(--text-secondary); margin-bottom: 16px; line-height: 1.5;">Description goes here...</p>

                    <div id="modal-preview-box" class="modal-cup-preview-card">
                        <div class="cup-visual-icon" id="preview-cup-icon">
                            <i class="fa-solid fa-snowflake"></i>
                        </div>
                        <div class="cup-config-details" style="flex: 1;">
                            <strong id="preview-drink-headline">Iced 16oz · Regular Ice</strong>
                            <span id="preview-drink-sub">Sweetness: 100% · Standard Recipe</span>
                        </div>
                    </div>

                    <div id="drink-customizer-controls">
                        <div class="pref-group" id="size-pref-group">
                            <span class="pref-label">Select Serving & Cup Size:</span>
                            <div class="pref-pills-row" id="size-pills"></div>
                        </div>

                        <div class="pref-group">
                            <span class="pref-label">Sweetness / Sugar Level:</span>
                            <div class="pref-pills-row" id="sugar-pills">
                                <button type="button" class="pref-pill" onclick="selectSugarPref('0%', this)">0%</button>
                                <button type="button" class="pref-pill" onclick="selectSugarPref('25%', this)">25%</button>
                                <button type="button" class="pref-pill" onclick="selectSugarPref('50%', this)">50%</button>
                                <button type="button" class="pref-pill active" onclick="selectSugarPref('100%', this)">100%</button>
                            </div>
                        </div>

                        <div class="pref-group" id="ice-pref-group">
                            <span class="pref-label">Ice Level:</span>
                            <div class="pref-pills-row" id="ice-pills">
                                <button type="button" class="pref-pill active" onclick="selectIcePref('Regular Ice', this)">Regular Ice</button>
                                <button type="button" class="pref-pill" onclick="selectIcePref('Less Ice', this)">Less Ice</button>
                                <button type="button" class="pref-pill" onclick="selectIcePref('No Ice', this)">No Ice</button>
                            </div>
                        </div>
                    </div>

                    <div style="margin-top: 14px;">
                        <span class="pref-label">Extra Add-ons:</span>
                        <div id="qv-addons-container" style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;"></div>
                    </div>
                </div>

                <div style="padding: 15px 20px; border-top: 1px solid var(--border-color); display: flex; gap: 10px; background: var(--card-bg); flex-shrink: 0;">
                    <button onclick="closeQuickViewModal()" style="flex: 1; padding: 12px; background: transparent; border: 1px solid var(--border-color); color: var(--text-color); border-radius: 10px; font-weight: bold; cursor: pointer;">Cancel</button>
                    <button id="qv-submit-btn" onclick="confirmQuickViewAddToCart()" style="flex: 2; padding: 12px; background: var(--accent-color); color: #fff; border: none; border-radius: 10px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 14px rgba(212, 122, 36, 0.35);">
                        Add to Basket · ₱0.00
                    </button>
                </div>
            </div>
        </div>
    `;
    let div = document.createElement("div");
    div.innerHTML = modalHTML;
    document.body.appendChild(div);
}

function selectSizePref(sizeKey, btn) {
    currentSelectedSize = sizeKey;
    document.querySelectorAll("#size-pills .pref-pill").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");

    let isHot = sizeKey.startsWith("hot");
    currentTemp = isHot ? "Hot" : "Iced";

    let iceGroup = document.getElementById("ice-pref-group");
    if (iceGroup) {
        iceGroup.style.display = isHot ? "none" : "block";
        if (isHot) currentIce = "No Ice (Hot)";
        else if (currentIce.includes("Hot")) currentIce = "Regular Ice";
    }

    updateModalPreviewCard();
}

function selectSugarPref(val, btn) {
    currentSugar = val;
    document.querySelectorAll("#sugar-pills .pref-pill").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    updateModalPreviewCard();
}

function selectIcePref(val, btn) {
    currentIce = val;
    document.querySelectorAll("#ice-pills .pref-pill").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    updateModalPreviewCard();
}

function updateModalPreviewCard() {
    let iconEl = document.getElementById("preview-cup-icon");
    let headlineEl = document.getElementById("preview-drink-headline");
    let subEl = document.getElementById("preview-drink-sub");

    if (!headlineEl) return;

    let sizeLabel = "16oz";
    if (currentSelectedSize === "hot12") sizeLabel = "Hot (12oz)";
    else if (currentSelectedSize === "iced16") sizeLabel = "Iced (16oz)";
    else if (currentSelectedSize === "iced22") sizeLabel = "Iced (22oz)";

    if (currentTemp === "Hot") {
        iconEl.innerHTML = '<i class="fa-solid fa-mug-hot" style="color: #e65100;"></i>';
        headlineEl.textContent = `Steaming Hot · ${sizeLabel}`;
    } else {
        iconEl.innerHTML = '<i class="fa-solid fa-snowflake" style="color: #0288d1;"></i>';
        headlineEl.textContent = `${sizeLabel} · ${currentIce}`;
    }

    subEl.textContent = `Sweetness: ${currentSugar} · Francos Standard Recipe`;
    updateLiveModalPrice();
}

function getBasePriceForCurrentSelection() {
    if (!selectedQuickViewProduct) return 0;
    let p = selectedQuickViewProduct;
    if (p.prices) {
        return p.prices[currentSelectedSize] || p.price;
    }
    return p.price;
}

function updateLiveModalPrice() {
    if (!selectedQuickViewProduct) return;
    let basePrice = getBasePriceForCurrentSelection();
    let addOnsSum = 0;

    let checkboxes = document.querySelectorAll(".qv-addon-checkbox:checked");
    checkboxes.forEach(cb => {
        addOnsSum += parseFloat(cb.getAttribute("data-price")) || 0;
    });

    let total = basePrice + addOnsSum;
    let submitBtn = document.getElementById("qv-submit-btn");
    let priceBanner = document.getElementById("qv-product-price");

    if (submitBtn) submitBtn.innerHTML = `Add to Basket · ₱${total.toFixed(2)}`;
    if (priceBanner) priceBanner.innerHTML = `₱${total.toFixed(2)}`;
}

function openQuickViewModal(productId) {
    let liveProducts = getLiveProducts();
    let product = liveProducts.find(p => p.id === productId);
    if (!product) return;

    selectedQuickViewProduct = product;
    
    currentSugar = "100%";
    currentIce = "Regular Ice";

    document.getElementById("qv-product-image").src = product.image;
    document.getElementById("qv-product-cat").textContent = product.category.toUpperCase();
    document.getElementById("qv-product-name").textContent = product.name;
    document.getElementById("qv-product-desc").textContent = product.description || "Handcrafted recipe.";

    let sizePillsContainer = document.getElementById("size-pills");
    let availableSizes = product.prices ? Object.keys(product.prices) : ['default'];

    currentSelectedSize = availableSizes.includes("iced16") ? "iced16" : availableSizes[0];
    currentTemp = currentSelectedSize.startsWith("hot") ? "Hot" : "Iced";

    sizePillsContainer.innerHTML = availableSizes.map(sz => {
        let label = "Standard";
        let cost = product.prices ? product.prices[sz] : product.price;
        if (sz === "hot12") label = `☕ Hot 12oz (₱${cost})`;
        else if (sz === "iced16") label = `🧊 Iced 16oz (₱${cost})`;
        else if (sz === "iced22") label = `🧊 Iced 22oz (₱${cost})`;
        else if (sz === "default") label = `Standard (₱${cost})`;

        let isActive = sz === currentSelectedSize ? "active" : "";
        return `<button type="button" class="pref-pill ${isActive}" onclick="selectSizePref('${sz}', this)">${label}</button>`;
    }).join("");

    let iceGroup = document.getElementById("ice-pref-group");
    if (iceGroup) iceGroup.style.display = currentTemp === "Hot" ? "none" : "block";

    document.querySelectorAll("#sugar-pills .pref-pill").forEach((p, idx) => {
        p.classList.toggle("active", idx === 3);
    });
    document.querySelectorAll("#ice-pills .pref-pill").forEach((p, idx) => {
        p.classList.toggle("active", idx === 0);
    });

    let customizerControls = document.getElementById("drink-customizer-controls");
    let previewBox = document.getElementById("modal-preview-box");
    let addonsContainer = document.getElementById("qv-addons-container");

    if (product.category === 'package') {
        customizerControls.style.display = "none";
        if (previewBox) previewBox.style.display = "none";
        addonsContainer.innerHTML = `<span style="font-size: 12px; color: var(--text-secondary);">Event packages include fixed mobile coffee cart service.</span>`;
    } else {
        customizerControls.style.display = "block";
        if (previewBox) previewBox.style.display = "flex";
        addonsContainer.innerHTML = availableAddOns.map(addon => `
            <label style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: var(--bg-color); border: 1px solid var(--border-color); border-radius: 10px; cursor: pointer; font-size: 13px; color: var(--text-color);">
                <span style="display: flex; align-items: center; gap: 10px;">
                    <input type="checkbox" class="qv-addon-checkbox" onchange="updateLiveModalPrice()" value="${addon.id}" data-name="${addon.name}" data-price="${addon.price}" style="accent-color: var(--accent-color);">
                    ${addon.name}
                </span>
                <span style="font-weight: bold; color: var(--accent-color);">+₱${addon.price}</span>
            </label>
        `).join('');
    }

    updateModalPreviewCard();
    document.getElementById("quickview-modal-overlay").style.display = "flex";
}

function closeQuickViewModal() {
    let overlay = document.getElementById("quickview-modal-overlay");
    if (overlay) overlay.style.display = "none";
    selectedQuickViewProduct = null;
}

function confirmQuickViewAddToCart() {
    if (!selectedQuickViewProduct) return;

    let product = selectedQuickViewProduct;
    let chosenAddons = [];
    let addOnsTotal = 0;

    if (product.category !== 'package') {
        let checkboxes = document.querySelectorAll(".qv-addon-checkbox:checked");
        checkboxes.forEach(cb => {
            chosenAddons.push({
                id: cb.value,
                name: cb.getAttribute("data-name"),
                price: parseFloat(cb.getAttribute("data-price"))
            });
            addOnsTotal += parseFloat(cb.getAttribute("data-price"));
        });
    }

    let basePrice = getBasePriceForCurrentSelection();
    let finalPrice = basePrice + addOnsTotal;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let sizeLabel = "16oz";
    if (currentSelectedSize === "hot12") sizeLabel = "12oz Hot";
    else if (currentSelectedSize === "iced16") sizeLabel = "16oz Iced";
    else if (currentSelectedSize === "iced22") sizeLabel = "22oz Iced";

    let customSummary = product.category === 'package' 
        ? "Event Package" 
        : `${sizeLabel} · Sugar: ${currentSugar} · Ice: ${currentIce}`;

    let cartItemKey = product.id + "_" + customSummary + "_" + chosenAddons.map(a => a.id).sort().join("-");
    let existing = cart.find(item => {
        let existingKey = item.id + "_" + (item.customSummary || "") + "_" + (item.addOns || []).map(a => a.id).sort().join("-");
        return existingKey === cartItemKey;
    });

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            ...product,
            price: finalPrice,
            basePrice: basePrice,
            addOns: chosenAddons,
            customSummary: customSummary,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    closeQuickViewModal();
    showToast(`Added ${product.name} (${customSummary})!`);
}

// Coffee Matcher Quiz Engine
let quizAnswers = { energy: '', serve: '', flavor: '' };
let currentQuizStep = 1;

function setupCoffeeQuizModal() {
    if (document.getElementById("coffee-quiz-modal-overlay")) return;

    let modalHTML = `
        <div id="coffee-quiz-modal-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); z-index: 3000; align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(6px);">
            <div style="background: var(--card-bg); color: var(--text-color); border: 1px solid var(--border-color); max-width: 460px; width: 100%; border-radius: 20px; padding: 28px; box-shadow: var(--card-shadow); position: relative;">
                <button onclick="closeCoffeeQuizModal()" style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 18px; color: var(--text-secondary); cursor: pointer; font-weight: bold;">✕</button>
                
                <div class="quiz-step-dots" id="quiz-dots-wrap">
                    <span class="quiz-dot active"></span>
                    <span class="quiz-dot"></span>
                    <span class="quiz-dot"></span>
                </div>

                <div id="quiz-step-content"></div>
            </div>
        </div>
    `;
    let div = document.createElement("div");
    div.innerHTML = modalHTML;
    document.body.appendChild(div);
}

function openCoffeeQuizModal() {
    currentQuizStep = 1;
    quizAnswers = { energy: '', serve: '', flavor: '' };
    document.getElementById("coffee-quiz-modal-overlay").style.display = "flex";
    renderQuizStep();
}

function closeCoffeeQuizModal() {
    document.getElementById("coffee-quiz-modal-overlay").style.display = "none";
}

function renderQuizStep() {
    let container = document.getElementById("quiz-step-content");
    let dots = document.querySelectorAll(".quiz-dot");
    dots.forEach((d, i) => d.classList.toggle("active", i === (currentQuizStep - 1)));

    if (currentQuizStep === 1) {
        container.innerHTML = `
            <div style="text-align: center; margin-bottom: 20px;">
                <span style="font-size: 11px; font-weight: 800; color: var(--accent-color); letter-spacing: 1px;">QUESTION 1 OF 3</span>
                <h3 style="font-family: 'DM Serif Display', serif; font-size: 22px; color: var(--text-color); margin: 4px 0 6px;">What kind of energy do you crave?</h3>
                <p style="font-size: 12.5px; color: var(--text-secondary); margin: 0;">Select your current mood or caffeine need:</p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <button class="quiz-option-btn" onclick="answerQuiz('energy', 'caffeine')"><i class="fa-solid fa-bolt" style="color: #f59e0b;"></i> Strong Double-Shot Caffeine Boost</button>
                <button class="quiz-option-btn" onclick="answerQuiz('energy', 'matcha')"><i class="fa-solid fa-leaf" style="color: #2e7d32;"></i> Smooth, Calm & Focused (Matcha)</button>
                <button class="quiz-option-btn" onclick="answerQuiz('energy', 'sweet')"><i class="fa-solid fa-cookie-bite" style="color: #d47a24;"></i> Sweet Comfort & Pure Indulgence</button>
                <button class="quiz-option-btn" onclick="answerQuiz('energy', 'fruity')"><i class="fa-solid fa-lemon" style="color: #0288d1;"></i> Light, Fruity & Thirst-Quenching</button>
            </div>
        `;
    } else if (currentQuizStep === 2) {
        container.innerHTML = `
            <div style="text-align: center; margin-bottom: 20px;">
                <span style="font-size: 11px; font-weight: 800; color: var(--accent-color); letter-spacing: 1px;">QUESTION 2 OF 3</span>
                <h3 style="font-family: 'DM Serif Display', serif; font-size: 22px; color: var(--text-color); margin: 4px 0 6px;">How should your brew be served?</h3>
                <p style="font-size: 12.5px; color: var(--text-secondary); margin: 0;">Choose your ideal drink temperature:</p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <button class="quiz-option-btn" onclick="answerQuiz('serve', 'iced')"><i class="fa-solid fa-snowflake" style="color: #0288d1;"></i> Over Ice (Crisp & Refreshing)</button>
                <button class="quiz-option-btn" onclick="answerQuiz('serve', 'hot')"><i class="fa-solid fa-mug-hot" style="color: #e65100;"></i> Steaming Hot & Comforting</button>
                <button class="quiz-option-btn" onclick="answerQuiz('serve', 'snow')"><i class="fa-solid fa-blender" style="color: #9c27b0;"></i> Ice-Blended Frappe (Snow Series)</button>
            </div>
        `;
    } else if (currentQuizStep === 3) {
        container.innerHTML = `
            <div style="text-align: center; margin-bottom: 20px;">
                <span style="font-size: 11px; font-weight: 800; color: var(--accent-color); letter-spacing: 1px;">QUESTION 3 OF 3</span>
                <h3 style="font-family: 'DM Serif Display', serif; font-size: 22px; color: var(--text-color); margin: 4px 0 6px;">What's your favorite flavor note?</h3>
                <p style="font-size: 12.5px; color: var(--text-secondary); margin: 0;">Pick the taste you love the most:</p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <button class="quiz-option-btn" onclick="answerQuiz('flavor', 'caramel')"><i class="fa-solid fa-droplet" style="color: #d47a24;"></i> Caramel, Vanilla or Condensed Milk</button>
                <button class="quiz-option-btn" onclick="answerQuiz('flavor', 'nutty')"><i class="fa-solid fa-seedling" style="color: #795548;"></i> Nutty Almond, Nutella or Pistachio</button>
                <button class="quiz-option-btn" onclick="answerQuiz('flavor', 'berry')"><i class="fa-solid fa-apple-whole" style="color: #e91e63;"></i> Fresh Berry & Fruit Puree</button>
                <button class="quiz-option-btn" onclick="answerQuiz('flavor', 'bold')"><i class="fa-solid fa-mug-saucer" style="color: #4e342e;"></i> Classic Bold & Torched Brûlée</button>
            </div>
        `;
    }
}

function answerQuiz(key, value) {
    quizAnswers[key] = value;
    if (currentQuizStep < 3) {
        currentQuizStep++;
        renderQuizStep();
    } else {
        calculateQuizResult();
    }
}

function calculateQuizResult() {
    let container = document.getElementById("quiz-step-content");
    document.getElementById("quiz-dots-wrap").style.display = "none";

    let matchedId = 110;
    let reason = "Rich, silky double-shot espresso with creamy condensed milk sweetness!";

    if (quizAnswers.energy === 'matcha') {
        if (quizAnswers.flavor === 'berry') {
            matchedId = 203;
            reason = "Layered fresh strawberry puree whisked into ceremonial Uji green tea!";
        } else {
            matchedId = 201;
            reason = "Pure authentic ceremonial Japanese Uji matcha over velvety milk.";
        }
    } else if (quizAnswers.energy === 'fruity') {
        matchedId = 501;
        reason = "Fizzy, sparkling thirst quencher infused with real fruit flavor!";
    } else if (quizAnswers.serve === 'snow') {
        matchedId = 301;
        reason = "Frozen blended espresso frappe loaded with chewy coffee jelly chunks!";
    } else if (quizAnswers.flavor === 'nutty') {
        matchedId = 106;
        reason = "Aromatic roasted almond syrup fused with smooth double-shot espresso.";
    } else if (quizAnswers.flavor === 'caramel') {
        matchedId = 107;
        reason = "The ultimate balance of rich salty caramel drizzle and creamy espresso!";
    }

    let products = getLiveProducts();
    let product = products.find(p => p.id === matchedId) || products[0];

    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 16px;">
            <span style="font-size: 11px; font-weight: 800; color: #2e7d32; background: rgba(46,125,50,0.15); padding: 4px 12px; border-radius: 20px; letter-spacing: 1px;">
                🎉 100% FLAVOR MATCH FOUND!
            </span>
            <h3 style="font-family: 'DM Serif Display', serif; font-size: 24px; color: var(--text-color); margin: 8px 0 2px;">Your Perfect Brew is:</h3>
        </div>

        <div style="background: var(--bg-color); border: 1px solid var(--border-color); border-radius: 14px; overflow: hidden; margin-bottom: 20px; box-shadow: var(--card-shadow);">
            <img src="${product.image}" style="width: 100%; height: 160px; object-fit: cover;">
            <div style="padding: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <strong style="font-size: 17px; color: var(--text-color);">${product.name}</strong>
                    <span style="font-size: 16px; font-weight: 800; color: var(--accent-color);">₱${product.price.toFixed(2)}</span>
                </div>
                <p style="font-size: 12.5px; color: var(--text-secondary); margin: 0 0 10px; line-height: 1.5;">${reason}</p>
                <div style="font-size: 11px; color: #f59e0b; display: flex; align-items: center; gap: 4px;">
                    <i class="fa-solid fa-star"></i><strong>${product.rating || 5.0}</strong> · Verified Customer Favorite
                </div>
            </div>
        </div>

        <div style="display: flex; gap: 10px;">
            <button onclick="openCoffeeQuizModal()" style="flex: 1; padding: 11px; background: transparent; border: 1px solid var(--border-color); color: var(--text-color); border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 13px;">Retake Quiz</button>
            <button onclick="orderQuizResult(${product.id})" style="flex: 2; padding: 11px; background: var(--accent-color); color: #fff; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 13px; box-shadow: 0 4px 12px rgba(212, 122, 36, 0.35);">Customize & Add ➔</button>
        </div>
    `;
}

function orderQuizResult(productId) {
    closeCoffeeQuizModal();
    openQuickViewModal(productId);
}