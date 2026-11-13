// ==========================================================================
// FRANCOS. BAKES & BREWS - OFFICIAL MENU BASED ON ACTUAL STORE MENU CARDS
// ==========================================================================

const defaultProducts = [
    // ---------------------------------------------------------
    // 1. SLEEPLESS (Caffeinated Mixes - Kumpletong 24 Drinks)
    // ---------------------------------------------------------
    // --- Card A (Bagong Dagdag mula sa Menu Card) ---
    { 
        id: 113, name: "Americano", category: "sleepless", isStar: false,
        prices: { hot12: 70, iced16: 90, iced22: 100 },
        price: 90, stock: 25, rating: 4.8, reviewsCount: 20,
        description: "Classic rich double-shot espresso poured over hot or ice-cold water.",
        image: "https://i.pinimg.com/736x/9d/1e/40/9d1e40851b721ad6718997102ec752ea.jpg"
    },
    { 
        id: 114, name: "Biscoff Latte", category: "sleepless", isStar: true,
        prices: { hot12: 110, iced16: 140, iced22: 150 },
        price: 140, stock: 22, rating: 5.0, reviewsCount: 45,
        description: "Signature espresso milk infused with spiced Lotus Biscoff cookie spread.",
        image: "https://i.pinimg.com/736x/2d/7e/8e/2d7e8e1f40a6345b65e39b606f4de757.jpg"
    },
    { 
        id: 115, name: "Black Vanilla", category: "sleepless", isStar: true,
        prices: { hot12: 90, iced16: 110, iced22: 120 },
        price: 110, stock: 20, rating: 4.9, reviewsCount: 30,
        description: "Dark rich espresso paired with aromatic sweet French vanilla syrup.",
        image: "https://i.pinimg.com/736x/1e/7b/f9/1e7bf906bf4bdd59e5782b0602fdf85c.jpg"
    },
    { 
        id: 116, name: "Blue Americano", category: "sleepless", isStar: false,
        prices: { hot12: 90, iced16: 110, iced22: 120 },
        price: 110, stock: 15, rating: 4.7, reviewsCount: 16,
        description: "Zesty blue curaçao citrus notes combined with robust espresso shots.",
        image: "https://i.pinimg.com/1200x/55/50/cc/5550ccaa7f4eeef39804c8cd85004426.jpg"
    },
    { 
        id: 117, name: "Cafe Latte", category: "sleepless", isStar: false,
        prices: { hot12: 80, iced16: 100, iced22: 110 },
        price: 100, stock: 30, rating: 4.8, reviewsCount: 28,
        description: "Smooth, velvety steamed milk poured over pure double espresso shots.",
        image: "https://i.pinimg.com/1200x/55/f8/7b/55f87b082c2e6f655957e29725e8a0d8.jpg"
    },
    { 
        id: 118, name: "Cappuccino", category: "sleepless", isStar: false,
        prices: { hot12: 90, iced16: 110, iced22: 120 },
        price: 110, stock: 20, rating: 4.8, reviewsCount: 22,
        description: "Traditional equal layers of espresso, warm milk, and dense foam crown.",
        image: "https://i.pinimg.com/736x/f8/56/1e/f8561ea80e14bd1989b4fe87736e1468.jpg"
    },
    { 
        id: 119, name: "Caramel Macchiato", category: "sleepless", isStar: true,
        prices: { hot12: 110, iced16: 130, iced22: 140 },
        price: 130, stock: 25, rating: 5.0, reviewsCount: 52,
        description: "Vanilla steamed milk marked with rich espresso and buttery caramel drizzle.",
        image: "https://i.pinimg.com/1200x/7f/7c/0a/7f7c0a441577459d9a0a01ee28b59cc5.jpg"
    },
    { 
        id: 120, name: "Cheese Macchiato", category: "sleepless", isStar: false,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 18, rating: 4.8, reviewsCount: 21,
        description: "Bold espresso milk layered with savory, velvety sweet salted cheese foam.",
        image: "https://i.pinimg.com/1200x/3b/8b/4d/3b8b4d78ab51453fd51bb5dc00937bb4.jpg"
    },
    { 
        id: 121, name: "Choco Caramel", category: "sleepless", isStar: true,
        prices: { hot12: 110, iced16: 130, iced22: 140 },
        price: 130, stock: 22, rating: 4.9, reviewsCount: 34,
        description: "Indulgent dark chocolate combined with silky caramel and double espresso.",
        image: "https://i.pinimg.com/1200x/fa/d8/4a/fad84a32af114b081663bcae8f71bf31.jpg"
    },
    { 
        id: 122, name: "Coco Latte", category: "sleepless", isStar: false,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 16, rating: 4.7, reviewsCount: 18,
        description: "Tropical roasted coconut aroma blended smoothly into creamy espresso milk.",
        image: "https://i.pinimg.com/1200x/12/f3/1f/12f31f9d4abb1d33e8069573a460e07e.jpg"
    },
    { 
        id: 123, name: "Coco Mocha", category: "sleepless", isStar: false,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 16, rating: 4.8, reviewsCount: 19,
        description: "Rich dark chocolate cocoa fused with sweet coconut milk and espresso.",
        image: "https://i.pinimg.com/736x/1f/b1/64/1fb16469948fe4d6b43067bd6bd87572.jpg"
    },
    { 
        id: 124, name: "Cold Brew", category: "sleepless", isStar: false,
        prices: { hot12: 70, iced16: 90, iced22: 100 },
        price: 90, stock: 24, rating: 4.9, reviewsCount: 26,
        description: "Steeped slowly for 18 hours. Ultra-smooth, bold, and naturally low-acid.",
        image: "https://i.pinimg.com/1200x/ed/73/0d/ed730dae8b0a366e17eb42fc6f0cc928.jpg"
    },

    // --- Card B (Mga dati nang nandoon na may Pinterest Links mo) ---
    { 
        id: 101, name: "Coffee Jelly", category: "sleepless", isStar: true,
        prices: { iced16: 120, iced22: 130 },
        price: 120, stock: 25, rating: 4.9, reviewsCount: 28,
        description: "Signature cold brewed espresso paired with chewy coffee jelly.",
        image: "https://i.pinimg.com/736x/92/bd/cb/92bdcbd0c0bc8b54e3b86ce99d405c5a.jpg"
    },
    { 
        id: 102, name: "Creme Brûlée Latte", category: "sleepless", isStar: true,
        prices: { iced16: 130, iced22: 140 },
        price: 130, stock: 20, rating: 5.0, reviewsCount: 34,
        description: "Creamy iced espresso crowned with rich torched caramelized sugar layer.",
        image: "https://i.pinimg.com/736x/03/df/11/03df11f8c782d196c9eafb72e6e0a590.jpg"
    },
    { 
        id: 103, name: "Mocha Latte", category: "sleepless", isStar: false,
        prices: { hot12: 90, iced16: 120, iced22: 150 },
        price: 120, stock: 18, rating: 4.8, reviewsCount: 16,
        description: "Bold espresso blended with sweet dark chocolate cocoa and fresh milk.",
        image: "https://i.pinimg.com/1200x/96/e9/d4/96e9d431dd057818d58a0cc984e8390e.jpg"
    },
    { 
        id: 104, name: "Nutella Espresso", category: "sleepless", isStar: true,
        prices: { hot12: 110, iced16: 140, iced22: 150 },
        price: 140, stock: 19, rating: 5.0, reviewsCount: 42,
        description: "Decadent hazelnut Nutella spread swirled into double-shot espresso milk.",
        image: "https://i.pinimg.com/736x/6f/e8/b9/6fe8b90fa1432f223abefd2cc7289ad4.jpg"
    },
    { 
        id: 105, name: "Orange Americano", category: "sleepless", isStar: false,
        prices: { iced16: 120, iced22: 130 },
        price: 120, stock: 15, rating: 4.7, reviewsCount: 14,
        description: "Crisp and zesty citrus orange juice fused with robust espresso shots.",
        image: "https://i.pinimg.com/736x/59/2b/bc/592bbc9cfd37515c57f3799131a2f217.jpg"
    },
    { 
        id: 106, name: "Roasted Almond", category: "sleepless", isStar: true,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 20, rating: 4.9, reviewsCount: 22,
        description: "Nutty roasted almond syrup perfectly balanced with smooth espresso.",
        image: "https://i.pinimg.com/736x/e5/51/36/e5513666aecbbaed2336fd920cfea5b8.jpg"
    },
    { 
        id: 107, name: "Salted Caramel", category: "sleepless", isStar: false,
        prices: { hot12: 90, iced16: 120, iced22: 130 },
        price: 120, stock: 24, rating: 4.8, reviewsCount: 27,
        description: "Sweet caramel drizzle with a touch of savory sea salt over milk espresso.",
        image: "https://i.pinimg.com/736x/5c/3c/8d/5c3c8d7db5b5078e0a8501ab060269c8.jpg"
    },
    { 
        id: 108, name: "Seasalt Tropical", category: "sleepless", isStar: false,
        prices: { hot12: 90, iced16: 140, iced22: 150 },
        price: 140, stock: 12, rating: 4.7, reviewsCount: 11,
        description: "Tropical flavored blend layered with rich savory sea salt cream foam.",
        image: "https://i.pinimg.com/1200x/59/e4/7d/59e47d27696fa7b6dce5586a6f97a295.jpg"
    },
    { 
        id: 109, name: "Skippy Espresso", category: "sleepless", isStar: true,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 20, rating: 4.9, reviewsCount: 31,
        description: "Original creamy Skippy peanut butter infused with strong fresh espresso.",
        image: "https://i.pinimg.com/736x/f0/15/29/f01529236fdda32fa28573cc544bdddb.jpg"
    },
    { 
        id: 110, name: "Spanish Latte", category: "sleepless", isStar: true,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 35, rating: 5.0, reviewsCount: 65,
        description: "Store Crowd Favorite. Double espresso mixed with silky condensed milk.",
        image: "https://i.pinimg.com/736x/6b/ea/97/6bea97bcfffe35012b50aa71d6bd2295.jpg"
    },
    { 
        id: 111, name: "Tropical Americano", category: "sleepless", isStar: false,
        prices: { hot12: 90, iced16: 110, iced22: 120 },
        price: 110, stock: 16, rating: 4.6, reviewsCount: 15,
        description: "Fruity tropical undertones mixed with double espresso and ice cold water.",
        image: "https://i.pinimg.com/736x/d4/ca/10/d4ca10fb9fe3d9438318ea8f92edfb7c.jpg"
    },
    { 
        id: 112, name: "Vietnamese Egg Coffee", category: "sleepless", isStar: false,
        prices: { hot12: 90, iced16: 110, iced22: 120 },
        price: 110, stock: 18, rating: 4.9, reviewsCount: 29,
        description: "Traditional whipped egg yolk custard cream floated over bold espresso.",
        image: "https://i.pinimg.com/736x/5a/7d/46/5a7d46ae08c9ab44f524fe2809c464c1.jpg"
    },

    // ---------------------------------------------------------
    // 2. SO GREEN (Premium Matcha Drinks)
    // ---------------------------------------------------------
    { 
        id: 201, name: "Matcha Milk", category: "sogreen", isStar: true,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 25, rating: 4.9, reviewsCount: 36,
        description: "Authentic ceremonial Uji matcha whisked fresh with velvety steamed or cold milk.",
        image: "https://i.pinimg.com/736x/16/6b/d0/166bd08582b84f62ec20ba9aa2110d3c.jpg"
    },
    { 
        id: 202, name: "Matcha Oat", category: "sogreen", isStar: false,
        prices: { hot12: 120, iced16: 140, iced22: 150 },
        price: 140, stock: 20, rating: 4.9, reviewsCount: 25,
        description: "Ceremonial Uji green tea paired with smooth lactose-free oat milk.",
        image: "https://i.pinimg.com/736x/1f/af/6b/1faf6be586d0302df77ca2f41d9d0fb3.jpg"
    },
    { 
        id: 203, name: "Strawberry Matcha", category: "sogreen", isStar: true,
        prices: { iced16: 130, iced22: 140 },
        price: 130, stock: 22, rating: 5.0, reviewsCount: 54,
        description: "Layered real strawberry compote puree, cold fresh milk, and rich Uji matcha.",
        image: "https://i.pinimg.com/736x/cb/53/65/cb5365d31aee37de2893a79a1d078a39.jpg"
    },
    { 
        id: 204, name: "Blueberry Matcha", category: "sogreen", isStar: false,
        prices: { iced16: 130, iced22: 140 },
        price: 130, stock: 16, rating: 4.8, reviewsCount: 19,
        description: "Sweet blueberry fruit compote layered with ceremonial green tea.",
        image: "https://i.pinimg.com/736x/2d/0f/b0/2d0fb06e3562ab988926b216b6f2b209.jpg"
    },
    { 
        id: 205, name: "Caramel Glaze Matcha", category: "sogreen", isStar: false,
        prices: { hot12: 110, iced16: 130, iced22: 140 },
        price: 130, stock: 18, rating: 4.7, reviewsCount: 16,
        description: "Uji matcha green tea drizzled with deep caramel glaze sauce.",
        image: "https://i.pinimg.com/736x/cb/4e/d7/cb4ed7af054b8b34f134a42a724bc093.jpg"
    },
    { 
        id: 206, name: "Pistachio Matcha", category: "sogreen", isStar: false,
        prices: { hot12: 110, iced16: 130, iced22: 140 },
        price: 130, stock: 15, rating: 4.9, reviewsCount: 24,
        description: "Nutty pistachio flavor fused with ceremonial Japanese matcha milk.",
        image: "https://i.pinimg.com/736x/52/c3/f6/52c3f6e6c8380e5e3c2624d34e9a848d.jpg"
    },
    { 
        id: 207, name: "Espresso Matcha", category: "sogreen", isStar: false,
        prices: { hot12: 120, iced16: 140, iced22: 150 },
        price: 140, stock: 15, rating: 5.0, reviewsCount: 30,
        description: "Dirty Matcha. The ultimate fusion of double-shot espresso and green tea.",
        image: "https://i.pinimg.com/1200x/77/62/5c/77625cb1be9317d556ea5e0c3d1a35a1.jpg"
    },
    { 
        id: 208, name: "MatchaTella", category: "sogreen", isStar: true,
        prices: { hot12: 110, iced16: 140, iced22: 150 },
        price: 140, stock: 18, rating: 4.9, reviewsCount: 26,
        description: "Creamy Uji matcha blended with decadent Italian Nutella hazelnut chocolate.",
        image: "https://i.pinimg.com/736x/7b/2c/2d/7b2c2df39e249e9a9d732b8ec4e2b2be.jpg"
    },
    { 
        id: 209, name: "Oreo Matcha", category: "sogreen", isStar: false,
        prices: { hot12: 110, iced16: 130, iced22: 140 },
        price: 130, stock: 20, rating: 4.8, reviewsCount: 22,
        description: "Crunchy crushed Oreo cookie crumble dusted over sweet matcha milk.",
        image: "https://i.pinimg.com/736x/81/c9/7d/81c97d824ae831d4e1e421a70086ffea.jpg"
    },
    { 
        id: 210, name: "Egg Matcha Brûlée", category: "sogreen", isStar: false,
        prices: { iced16: 140, iced22: 150 },
        price: 140, stock: 14, rating: 5.0, reviewsCount: 25,
        description: "Ceremonial matcha finished with torch-caramelized egg cream crust.",
        image: "https://i.pinimg.com/736x/87/4d/d4/874dd4629adb18280e1d1b7e104319da.jpg"
    },
    { 
        id: 211, name: "Earl Grey Matcha", category: "sogreen", isStar: false,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 16, rating: 4.7, reviewsCount: 14,
        description: "Floral Earl Grey bergamot notes combined with ceremonial Japanese matcha.",
        image: "https://i.pinimg.com/736x/a4/70/95/a4709576a600723e169f1d704888e2b0.jpg"
    },
    { 
        id: 212, name: "Soda Matcha", category: "sogreen", isStar: false,
        prices: { iced16: 110, iced22: 120 },
        price: 110, stock: 15, rating: 4.6, reviewsCount: 12,
        description: "Sparkling effervescent soda water infused with pure Uji matcha extract.",
        image: "https://i.pinimg.com/736x/fc/7f/e4/fc7fe490f453ef8a29161c134c1b422a.jpg"
    },

    // ---------------------------------------------------------
    // 3. SNOW (Frappes - All Fixed at 22oz)
    // ---------------------------------------------------------
    { 
        id: 301, name: "Coffee Jelly Snow", category: "snow", isStar: true,
        prices: { iced22: 160 }, price: 160, stock: 20, rating: 5.0, reviewsCount: 40,
        description: "22oz Espresso frappe loaded with sweet chewy coffee jelly chunks.",
        image: "https://i.pinimg.com/736x/24/63/1e/24631e2f67a67cd0d30e69a9eee14fb4.jpg"
    },
    { 
        id: 302, name: "Choco Caramel Snow", category: "snow", isStar: true,
        prices: { iced22: 160 }, price: 160, stock: 18, rating: 4.9, reviewsCount: 29,
        description: "22oz Ice blended espresso with rich chocolate and caramel ribbons.",
        image: "https://i.pinimg.com/736x/1c/95/5f/1c955f9a51deff759c0789d9e49185e1.jpg"
    },
    { 
        id: 303, name: "Caramel Snow", category: "snow", isStar: false,
        prices: { iced22: 150 }, price: 150, stock: 16, rating: 4.8, reviewsCount: 20,
        description: "22oz Sweet golden caramel blended with ice, milk, and espresso.",
        image: "https://i.pinimg.com/736x/b7/46/b4/b746b418c11c88c79f677d108894e953.jpg"
    },
    { 
        id: 304, name: "Mocha Snow", category: "snow", isStar: false,
        prices: { iced22: 150 }, price: 150, stock: 16, rating: 4.8, reviewsCount: 19,
        description: "22oz Chocolate espresso blended ice frappe with whipped cream.",
        image: "https://i.pinimg.com/736x/13/f6/b9/13f6b98c56af4374fe89b17958a1a7cc.jpg"
    },
    { 
        id: 305, name: "Roasted Almond Snow", category: "snow", isStar: false,
        prices: { iced22: 150 }, price: 150, stock: 14, rating: 4.8, reviewsCount: 15,
        description: "22oz Almond syrup infused blended frozen espresso frappe.",
        image: "https://i.pinimg.com/736x/4f/6d/d2/4f6dd2f36218e1b39b064e953fe978bd.jpg"
    },
    { 
        id: 306, name: "Spanish Latte Snow", category: "snow", isStar: false,
        prices: { iced22: 150 }, price: 150, stock: 22, rating: 5.0, reviewsCount: 32,
        description: "22oz Condensed milk espresso blended into creamy frozen perfection.",
        image: "https://i.pinimg.com/736x/df/c6/b5/dfc6b583ec0d0fa30203935b46082a65.jpg"
    },
    { 
        id: 307, name: "Matcha Snow", category: "snow", isStar: true,
        prices: { iced22: 150 }, price: 150, stock: 20, rating: 4.9, reviewsCount: 26,
        description: "22oz Pure ceremonial Uji matcha blended ice shake with sweet milk.",
        image: "https://i.pinimg.com/736x/93/ef/b3/93efb372dd7bada6067f301455d66321.jpg"
    },
    { 
        id: 308, name: "Strawberry Matcha Snow", category: "snow", isStar: true,
        prices: { iced22: 160 }, price: 160, stock: 18, rating: 5.0, reviewsCount: 45,
        description: "22oz Real strawberry puree layered with blended ceremonial Uji matcha.",
        image: "https://i.pinimg.com/736x/a6/21/a4/a621a4e79d3b03d357f26595a7db4104.jpg"
    },
    { 
        id: 309, name: "Cookies and Cream Snow", category: "snow", isStar: false,
        prices: { iced22: 150 }, price: 150, stock: 22, rating: 4.8, reviewsCount: 33,
        description: "22oz Crushed Oreo cookies blended in sweet vanilla cream ice.",
        image: "https://i.pinimg.com/736x/3c/06/82/3c0682af92b2c29f2e8f3de5986cbfd0.jpg"
    },
    { 
        id: 310, name: "Hershey's Chocolate Snow", category: "snow", isStar: true,
        prices: { iced22: 150 }, price: 150, stock: 19, rating: 4.9, reviewsCount: 31,
        description: "22oz Rich genuine Hershey's chocolate syrup blended with ice and dairy.",
        image: "https://i.pinimg.com/1200x/78/c1/78/78c178a7b840c04446accae291456072.jpg"
    },
    { 
        id: 311, name: "Strawberry Snow", category: "snow", isStar: true,
        prices: { iced22: 140 }, price: 140, stock: 17, rating: 4.8, reviewsCount: 25,
        description: "22oz Refreshing strawberry fruit compote ice blended shake.",
        image: "https://i.pinimg.com/1200x/dd/f9/e6/ddf9e64aefdd7fafbad644eb61ed2204.jpg"
    },
    { 
        id: 312, name: "Blueberry Snow", category: "snow", isStar: false,
        prices: { iced22: 140 }, price: 140, stock: 16, rating: 4.8, reviewsCount: 20,
        description: "22oz Wild blueberry blended ice smoothie refreshment.",
        image: "https://i.pinimg.com/736x/48/c3/d2/48c3d26d695213054e89018d518f1b6d.jpg"
    },

    // ---------------------------------------------------------
    // 4. SWEET TOOTH (Non-Coffee Mixes)
    // ---------------------------------------------------------
    { 
        id: 401, name: "Dark Chocolate", category: "sweettooth", isStar: false,
        prices: { hot12: 80, iced16: 110, iced22: 120 },
        price: 110, stock: 25, rating: 4.8, reviewsCount: 21,
        description: "Comforting dark chocolate cocoa drink served hot or iced.",
        image: "https://i.pinimg.com/736x/c7/72/de/c772de7cd52a80fa5233ded75ac96603.jpg"
    },
    { 
        id: 402, name: "Oreo Milk", category: "sweettooth", isStar: false,
        prices: { hot12: 80, iced16: 110, iced22: 120 },
        price: 110, stock: 24, rating: 4.8, reviewsCount: 25,
        description: "Fresh cold milk blended with real crushed Oreo cookies.",
        image: "https://i.pinimg.com/736x/8a/65/4e/8a654efe8aaa2fd7d452a6d201913202.jpg"
    },
    { 
        id: 403, name: "Nutella Milk", category: "sweettooth", isStar: false,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 20, rating: 5.0, reviewsCount: 36,
        description: "Steamed or iced fresh milk fused with hazelnut Nutella chocolate.",
        image: "https://i.pinimg.com/1200x/b4/82/10/b4821034e74d3d7880ae988637c3d968.jpg"
    },
    { 
        id: 404, name: "Milky Cheesecake", category: "sweettooth", isStar: false,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 18, rating: 4.9, reviewsCount: 24,
        description: "Smooth cheesecake sweet cream infused cold milk beverage.",
        image: "https://i.pinimg.com/736x/3a/39/83/3a3983c3552f79253d0c71eb2ce0d25a.jpg"
    },
    { 
        id: 405, name: "Blueberry Cheesecake", category: "sweettooth", isStar: true,
        prices: { iced16: 130, iced22: 140 },
        price: 130, stock: 20, rating: 5.0, reviewsCount: 48,
        description: "Cheesecake cream drink topped with rich wild blueberry compote.",
        image: "https://i.pinimg.com/736x/76/a0/db/76a0db9b4c518a92b8dd5be79abcd074.jpg"
    },
    { 
        id: 406, name: "Pistachio Cheesecake", category: "sweettooth", isStar: false,
        prices: { iced16: 130, iced22: 140 },
        price: 130, stock: 15, rating: 4.9, reviewsCount: 27,
        description: "Decadent pistachio and creamy cheesecake milk fusion.",
        image: "https://i.pinimg.com/1200x/f6/91/40/f69140bdb51da34c2733c9ed8f6753fb.jpg"
    },

    // ---------------------------------------------------------
    // 5. FRUIT FAVES (Soda Sparkling or Dirty Chia - 22oz)
    // ---------------------------------------------------------
    { 
        id: 501, name: "Strawberry Sparkling / Dirty Chia", category: "fruitfaves", isStar: false,
        prices: { iced22: 90 }, price: 90, stock: 22, rating: 4.7, reviewsCount: 18,
        description: "22oz Fizzy sparkling soda or dirty chia infused with strawberry flavor.",
        image: "https://i.pinimg.com/736x/bd/b8/54/bdb8543a2e476b23e15d1015859d7bd5.jpg"
    },
    { 
        id: 502, name: "Green Apple Sparkling / Dirty Chia", category: "fruitfaves", isStar: false,
        prices: { iced22: 90 }, price: 90, stock: 20, rating: 4.8, reviewsCount: 15,
        description: "22oz Crisp green apple sparkling soda or dirty chia cooler.",
        image: "https://i.pinimg.com/736x/41/e3/0c/41e30cf542b209b38a13915c9eeef4c8.jpg"
    },
    { 
        id: 503, name: "Passion Fruit Sparkling / Dirty Chia", category: "fruitfaves", isStar: false,
        prices: { iced22: 90 }, price: 90, stock: 19, rating: 4.8, reviewsCount: 22,
        description: "22oz Tropical passionfruit fizz cooler with optional chia seed blend.",
        image: "https://i.pinimg.com/1200x/af/55/8a/af558acd517d41b2e4d2b8934114f5b7.jpg"
    },
    { 
        id: 504, name: "Blueberry Sparkling / Dirty Chia", category: "fruitfaves", isStar: false,
        prices: { iced22: 90 }, price: 90, stock: 18, rating: 4.7, reviewsCount: 17,
        description: "22oz Wild blueberry fizzy sparkling refreshment or dirty chia.",
        image: "https://i.pinimg.com/736x/b4/80/1a/b4801ad13fd5206c031418364b26e30b.jpg"
    },
    { 
        id: 505, name: "Orange Punch Sparkling / Dirty Chia", category: "fruitfaves", isStar: false,
        prices: { iced22: 90 }, price: 90, stock: 17, rating: 4.6, reviewsCount: 14,
        description: "22oz Sweet citrus orange punch cooler with sparkling soda.",
        image: "https://i.pinimg.com/736x/68/de/78/68de7853c491362aac954d109eb9ddc7.jpg"
    },
    { 
        id: 506, name: "Fruit of Choice plus Milk", category: "fruitfaves", isStar: false,
        prices: { iced22: 100 }, price: 100, stock: 20, rating: 4.8, reviewsCount: 19,
        description: "22oz Any chosen fruit flavor (Strawberry, Apple, Blueberry) mixed with fresh milk.",
        image: "https://i.pinimg.com/1200x/01/15/7c/01157c7db737b4a474700db22159521e.jpg"
    },
    { 
        id: 507, name: "Fruit of Choice plus Yakult", category: "fruitfaves", isStar: false,
        prices: { iced22: 120 }, price: 120, stock: 22, rating: 4.9, reviewsCount: 26,
        description: "22oz Refreshing fruit syrup paired with probiotic Yakult.",
        image: "https://i.pinimg.com/1200x/0f/12/5e/0f125e1e8a7e7023bde5a5564f3f7dd7.jpg"
    },
    { 
        id: 508, name: "Fruit of Choice + Frappe", category: "fruitfaves", isStar: false,
        prices: { iced22: 140 }, price: 140, stock: 16, rating: 4.9, reviewsCount: 21,
        description: "22oz Blended ice fruit frappe of your favorite fruit choice.",
        image: "https://i.pinimg.com/1200x/f3/a3/e7/f3a3e79d662b87dca0c68b729446d755.jpg"
    },

    // ---------------------------------------------------------
    // 6. OAT MILK (Milk Alternative - Espresso-based)
    // ---------------------------------------------------------
    { 
        id: 601, name: "Skippy Espresso Oat", category: "oatmilk", isStar: false,
        prices: { hot12: 120, iced16: 140, iced22: 150 },
        price: 140, stock: 18, rating: 4.8, reviewsCount: 18,
        description: "Skippy peanut butter espresso blended with plant-based oat milk.",
        image: "https://i.pinimg.com/1200x/42/53/90/4253907452944fcb01dba9ab02bca4ef.jpg"
    },
    { 
        id: 602, name: "Café Oat Latte", category: "oatmilk", isStar: false,
        prices: { hot12: 100, iced16: 120, iced22: 130 },
        price: 120, stock: 20, rating: 4.7, reviewsCount: 15,
        description: "Classic rich espresso paired with steamed or iced creamy oat milk.",
        image: "https://i.pinimg.com/736x/42/23/07/422307e70aadcb681e30a9ceaeef9f70.jpg"
    },
    { 
        id: 603, name: "Roasted Almond Oat", category: "oatmilk", isStar: true,
        prices: { hot12: 120, iced16: 140, iced22: 150 },
        price: 140, stock: 18, rating: 4.9, reviewsCount: 26,
        description: "Roasted almond syrup with smooth double-shot espresso over oat milk.",
        image: "https://i.pinimg.com/1200x/3f/67/bc/3f67bcdc53ce2580635b74ed1377a80b.jpg"
    },
    { 
        id: 604, name: "Spanish Oat", category: "oatmilk", isStar: false,
        prices: { hot12: 120, iced16: 140, iced22: 150 },
        price: 140, stock: 22, rating: 5.0, reviewsCount: 35,
        description: "Condensed sweet milk with double-shot espresso and creamy oat milk.",
        image: "https://i.pinimg.com/736x/19/da/67/19da672d6775ac9e3b2aa5bbf01c67b3.jpg"
    },
    { 
        id: 605, name: "Nutella Espresso Oat", category: "oatmilk", isStar: false,
        prices: { hot12: 130, iced16: 160, iced22: 170 },
        price: 160, stock: 16, rating: 5.0, reviewsCount: 29,
        description: "Decadent Nutella spread and bold espresso over non-dairy oat milk.",
        image: "https://i.pinimg.com/1200x/00/e4/b8/00e4b8d9f1175007de54641ad1dce443.jpg"
    },
    { 
        id: 606, name: "Matcha Oat", category: "oatmilk", isStar: true,
        prices: { hot12: 120, iced16: 140, iced22: 150 },
        price: 140, stock: 20, rating: 5.0, reviewsCount: 38,
        description: "Premium ceremonial Uji matcha whisked with plant-based oat milk.",
        image: "https://i.pinimg.com/736x/f1/82/d4/f182d4d2adf1ef3e41f52e2f0c9fa7ed.jpg"
    },

    // ---------------------------------------------------------
    // 7. FOOD BOX (Rice Meals, Sandwiches, Pasta, Waffles, Fries)
    // ---------------------------------------------------------
    { 
        id: 801, name: "Chicken Pastil Rice Meal", category: "foodbox", isFood: true, isStar: true,
        prices: { solo: 120, combo: 160 }, price: 120, stock: 25, rating: 5.0, reviewsCount: 42,
        description: "Savory shredded seasoned chicken pastil over warm steamed rice with egg & cucumber garnish.",
        image: "https://i.pinimg.com/1200x/ba/23/d7/ba23d7820a76adc20bdd66cc49854538.jpg"
    },
    { 
        id: 802, name: "Pork Sisig Rice Meal", category: "foodbox", isFood: true, isStar: true,
        prices: { solo: 120, combo: 160 }, price: 120, stock: 20, rating: 4.9, reviewsCount: 38,
        description: "Crispy savory pork sisig topped with chili and sunny-side egg over rice.",
        image: "https://i.pinimg.com/1200x/7e/de/8a/7ede8a196c8738d6bf17bc40ef9f6889.jpg"
    },
    { 
        id: 803, name: "Binalonan Longanisa Rice Meal", category: "foodbox", isFood: true, isStar: true,
        prices: { solo: 120, combo: 160 }, price: 120, stock: 22, rating: 5.0, reviewsCount: 50,
        description: "Local town favorite garlic Binalonan longanisa served with double sunny eggs & rice.",
        image: "https://i.pinimg.com/1200x/1c/f2/26/1cf226b1f7e8ed8fa93571ac32161001.jpg"
    },
    { 
        id: 804, name: "Pork Tocino Rice Meal", category: "foodbox", isFood: true, isStar: false,
        prices: { solo: 120, combo: 160 }, price: 120, stock: 18, rating: 4.8, reviewsCount: 22,
        description: "Sweet cured pork tocino glazed to caramelized perfection with sunny egg and rice.",
        image: "https://i.pinimg.com/1200x/f1/37/ba/f137bae53af0c5d53a2a52963e6134d2.jpg"
    },
    { 
        id: 805, name: "Chicken Tocino Rice Meal", category: "foodbox", isFood: true, isStar: false,
        prices: { solo: 120, combo: 160 }, price: 120, stock: 18, rating: 4.8, reviewsCount: 19,
        description: "Tender sweet chicken tocino served with fresh egg and fluffy steamed rice.",
        image: "https://i.pinimg.com/736x/62/61/cf/6261cfac0be98a3d0b41f77a1055f921.jpg"
    },
    { 
        id: 806, name: "Bacon & Egg Rice Meal", category: "foodbox", isFood: true, isStar: false,
        prices: { solo: 120, combo: 160 }, price: 120, stock: 20, rating: 4.8, reviewsCount: 24,
        description: "Crispy fried bacon strips paired with double eggs over steamed rice.",
        image: "https://i.pinimg.com/736x/69/1a/15/691a15422bc4f1ab210ff7615db1470e.jpg"
    },
    { 
        id: 807, name: "Hotdog & Egg Rice Meal", category: "foodbox", isFood: true, isStar: false,
        prices: { solo: 120, combo: 160 }, price: 120, stock: 20, rating: 4.7, reviewsCount: 16,
        description: "Jumbo sliced hotdog served with double fried eggs and steamed rice.",
        image: "https://i.pinimg.com/736x/16/e8/2a/16e82a66a76817963ac1441ce54be0c1.jpg"
    },
    { 
        id: 808, name: "Spam & Egg Rice Meal", category: "foodbox", isFood: true, isStar: true,
        prices: { solo: 120, combo: 160 }, price: 120, stock: 22, rating: 4.9, reviewsCount: 30,
        description: "Thick slices of savory golden Spam with fried egg and steamed white rice.",
        image: "https://i.pinimg.com/736x/ec/64/a1/ec64a13f9a0c7aaab7e97fc10c1d8cda.jpg"
    },
    { 
        id: 809, name: "Cheesy Mushroom & Tomato Pasta", category: "foodbox", isFood: true, isStar: true,
        prices: { default: 120 }, price: 120, stock: 15, rating: 5.0, reviewsCount: 28,
        description: "Al dente pasta tossed in rich tomato mushroom sauce and topped with melted cheese.",
        image: "https://i.pinimg.com/736x/50/b0/e5/50b0e5ed067eb1b556b35ced311448d6.jpg"
    },
    { 
        id: 810, name: "Bacon & Egg Sandwich", category: "foodbox", isFood: true, isStar: false,
        prices: { default: 80 }, price: 80, stock: 20, rating: 4.8, reviewsCount: 18,
        description: "Toasted sandwich loaded with crispy bacon and fresh cooked egg.",
        image: "https://i.pinimg.com/1200x/92/37/6d/92376dee06a588b55a33b9ef50ed5569.jpg"
    },
    { 
        id: 811, name: "Ham & Egg Sandwich", category: "foodbox", isFood: true, isStar: false,
        prices: { default: 80 }, price: 80, stock: 20, rating: 4.7, reviewsCount: 15,
        description: "Classic café sandwich layered with sliced sweet ham and fried egg.",
        image: "https://i.pinimg.com/236x/5e/fc/84/5efc847bc1ed137fa74ae82b8f5cd74f.jpg"
    },
    { 
        id: 812, name: "Pastil & Egg Sandwich", category: "foodbox", isFood: true, isStar: true,
        prices: { default: 80 }, price: 80, stock: 18, rating: 4.9, reviewsCount: 21,
        description: "Savory chicken pastil flakes and fluffy egg nestled in toasted bread.",
        image: "https://i.pinimg.com/736x/01/29/81/012981943abe7bb1dc13b7bb81d3ff6d.jpg"
    },
    { 
        id: 813, name: "Golden Waffles with Toppings", category: "foodbox", isFood: true, isStar: true,
        prices: { default: 70 }, price: 70, stock: 25, rating: 4.9, reviewsCount: 35,
        description: "Warm golden crispy waffles with choice of Strawberry, Blueberry, or Chocolate topping.",
        image: "https://i.pinimg.com/736x/ce/63/83/ce63832c3eb2eab61a474724266947dd.jpg"
    },
    { 
        id: 814, name: "Cheesy French Fries", category: "foodbox", isFood: true, isStar: true,
        prices: { default: 70 }, price: 70, stock: 30, rating: 4.8, reviewsCount: 29,
        description: "Crispy golden fried potatoes dusted with rich savory cheese flavor.",
        image: "https://i.pinimg.com/736x/13/89/c1/1389c105c25b7c98b467b2926bcaf6ab.jpg"
    },

    // ---------------------------------------------------------
    // 8. COFFEE BOOTH EVENT PACKAGES (Mobile Cart)
    // ---------------------------------------------------------
    { 
        id: 701, name: "Coffee Booth (Good for 50 Cups)", category: "package", isStar: false,
        prices: { default: 5000 }, price: 5000, stock: 5, rating: 5.0, reviewsCount: 15,
        description: "5,000 PhP. Total of 3 pre-chosen drinks (2 Espresso-based, 1 Non-Espresso). Max 3.5 hrs service.",
        image: "https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-6/541313579_1124829316378934_2533291424044184363_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x2048&ctp=s1365x2048&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGQOvWxR5nLpco0jUGwLkav-X4n8kX4M2j5fifyRfgzaM9GdaOKHn6Rfo5SJoCxWbnbN9N-t891MVIcd8yeEcNY&_nc_ohc=lfAl10wzBFUQ7kNvwF8wx7d&_nc_oc=AdrNHMsDCKSpmbNdHJGcxpjg_5a3M7dRKdwIBil44Oko7DTGoI1xrwUghrrWCVgndWw&_nc_zt=23&_nc_ht=scontent.fcrk1-1.fna&_nc_gid=OOJAr8k19J5itVGpHFmzaA&_nc_ss=7b2a8&oh=00_AQRNnTJlUfNy6qSQp8TqBnoA86vSRozAGQXVor6bkYRwzg&oe=6AFC4A7C"
    },
    { 
        id: 702, name: "Coffee Booth (Good for 75 Cups)", category: "package", isStar: false,
        prices: { default: 7000 }, price: 7000, stock: 4, rating: 5.0, reviewsCount: 18,
        description: "7,000 PhP. Total of 3 pre-chosen drinks (2 Espresso-based, 1 Non-Espresso). Max 3.5 hrs service.",
        image: "https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-6/541313579_1124829316378934_2533291424044184363_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x2048&ctp=s1365x2048&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGQOvWxR5nLpco0jUGwLkav-X4n8kX4M2j5fifyRfgzaM9GdaOKHn6Rfo5SJoCxWbnbN9N-t891MVIcd8yeEcNY&_nc_ohc=lfAl10wzBFUQ7kNvwF8wx7d&_nc_oc=AdrNHMsDCKSpmbNdHJGcxpjg_5a3M7dRKdwIBil44Oko7DTGoI1xrwUghrrWCVgndWw&_nc_zt=23&_nc_ht=scontent.fcrk1-1.fna&_nc_gid=OOJAr8k19J5itVGpHFmzaA&_nc_ss=7b2a8&oh=00_AQRNnTJlUfNy6qSQp8TqBnoA86vSRozAGQXVor6bkYRwzg&oe=6AFC4A7C"
    },
    { 
        id: 703, name: "Coffee Booth (Good for 100 Cups)", category: "package", isStar: false,
        prices: { default: 9000 }, price: 9000, stock: 3, rating: 5.0, reviewsCount: 22,
        description: "9,000 PhP. Total of 3 pre-chosen drinks (2 Espresso-based, 1 Non-Espresso). Max 3.5 hrs service.",
        image: "https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-6/541313579_1124829316378934_2533291424044184363_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x2048&ctp=s1365x2048&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGQOvWxR5nLpco0jUGwLkav-X4n8kX4M2j5fifyRfgzaM9GdaOKHn6Rfo5SJoCxWbnbN9N-t891MVIcd8yeEcNY&_nc_ohc=lfAl10wzBFUQ7kNvwF8wx7d&_nc_oc=AdrNHMsDCKSpmbNdHJGcxpjg_5a3M7dRKdwIBil44Oko7DTGoI1xrwUghrrWCVgndWw&_nc_zt=23&_nc_ht=scontent.fcrk1-1.fna&_nc_gid=OOJAr8k19J5itVGpHFmzaA&_nc_ss=7b2a8&oh=00_AQRNnTJlUfNy6qSQp8TqBnoA86vSRozAGQXVor6bkYRwzg&oe=6AFC4A7C"
    }
];

// Add-ons
const availableAddOns = [
    { id: 'addon_oat', name: 'Oat Milk', price: 20 },
    { id: 'addon_espresso', name: 'Espresso Shot', price: 30 },
    { id: 'addon_cream', name: 'Whipped Cream', price: 20 },
    { id: 'addon_brulee', name: 'Egg Brûlée', price: 20 },
    { id: 'addon_jam', name: 'Extra Jam', price: 10 }
];

const availableFoodExtras = [
    { id: 'food_egg', name: 'Extra Fried Egg', price: 15 },
    { id: 'food_rice', name: 'Extra Rice', price: 20 },
    { id: 'food_cheese', name: 'Extra Cheese Sauce', price: 15 }
];

// SMART IMAGE & CATALOG AUTO-SYNC ENGINE
// Laging nag-a-update kung may bagong items o bagong picture links
(function autoSyncMenuImages() {
    let stored = JSON.parse(localStorage.getItem("adminMenuItems"));
    if (!stored || stored.length === 0) {
        localStorage.setItem("adminMenuItems", JSON.stringify(defaultProducts));
        return;
    }

    defaultProducts.forEach(defItem => {
        let matched = stored.find(s => s.id === defItem.id);
        if (matched) {
            matched.image = defItem.image;
            matched.prices = defItem.prices;
            matched.name = defItem.name;
        } else {
            stored.push(defItem);
        }
    });

    localStorage.setItem("adminMenuItems", JSON.stringify(stored));
})();

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
            <span class="marquee-item"><i class="fa-solid fa-utensils"></i> Francos Food Box: Rice Meals (₱120), Sandwiches (₱80), Pasta & Waffles</span>
            <span class="marquee-item"><i class="fa-solid fa-clock"></i> Kitchen Hours: Mon-Fri (10:00 AM - 5:30 PM)</span>
            <span class="marquee-item"><i class="fa-solid fa-phone"></i> Hotline: 0975-178-0508</span>
            <span class="marquee-item"><i class="fa-solid fa-motorcycle"></i> Flat ₱50 Local Delivery around Binalonan</span>
            <span class="marquee-item"><i class="fa-solid fa-ticket"></i> Use code FRANCOS50 for ₱50 OFF</span>
            <span class="marquee-item"><i class="fa-solid fa-utensils"></i> Francos Food Box: Rice Meals (₱120), Sandwiches (₱80), Pasta & Waffles</span>
            <span class="marquee-item"><i class="fa-solid fa-clock"></i> Kitchen Hours: Mon-Fri (10:00 AM - 5:30 PM)</span>
        </div>
    `;
    bar.innerHTML = tickerHTML;
    navbar.parentNode.insertBefore(bar, navbar);
}

// Universal 4-Column Footer
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
                    <p>Artisanal espresso brews, authentic Japanese Uji matcha, and savory Food Box comfort meals served fresh in Binalonan, Pangasinan.</p>
                    
                    <div class="footer-social-links">
                        <a href="https://www.facebook.com/francoscafe2024" target="_blank" class="social-circle-btn"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/francos.bakesandbrews?fbclid=IwY2xjawVjY-ZleHRuA2FlbQIxMABwZG9mBWJyaWQRMTl4eFNrVFFzQVQ3Ymx3NzJzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEf7uV8N5CdhPJV6ZGpfRm7nTjCggPjPDD3nG31yypUfs-THhlmK5euu6DhG84_aem_xlB4uwVtV9LLzewhEQSmyg" target="_blank" class="social-circle-btn"><i class="fa-brands fa-instagram"></i></a>             
                        <a href="https://maps.google.com/?q=Canarvacanan+Binalonan+Pangasinan" target="_blank" class="social-circle-btn"><i class="fa-solid fa-location-dot"></i></a>
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
                    <h4>Store Schedule</h4>
                    <p style="margin-bottom: 6px;"><strong style="color: #fff;">Café & Brews:</strong><br>Mon – Sun: 8:00 AM – 6:00 PM</p>
                    <p style="margin-bottom: 8px;"><strong style="color: #ffd8b1;">Food Box Kitchen:</strong><br>Mon – Fri: 10:00 AM – 5:30 PM</p>
                    <p style="margin-bottom: 8px;"><strong style="color: #fff;">Location:</strong><br>Brgy. Canarvacanan, Binalonan, Pangasinan, 2436</p>
                </div>

                <div class="footer-col">
                    <h4>Direct Contact</h4>
                    <div class="footer-contact-item">
                        <i class="fa-solid fa-phone"></i>
                        <span><strong>0975-178-0508</strong></span>
                    </div>
                    <div class="footer-contact-item">
                        <i class="fa-solid fa-envelope"></i>
                        <span>francosbakesandbrews@gmail.com</span>
                    </div>
                    <p style="margin-top: 14px; font-size: 12px; color: #d4c1b5;">
                        <i class="fa-solid fa-motorcycle" style="color: var(--accent-color);"></i> Fast local delivery around Binalonan & neighbor towns.
                    </p>
                </div>

            </div>

            <div class="footer-bottom">
                <span>&copy; 2026 Francos. Bakes and Brews · All Rights Reserved.</span>
                <span style="display: flex; align-items: center; gap: 6px;">
                    Handcrafted with <i class="fa-solid fa-heart" style="color: var(--accent-color); font-size: 11px;"></i> in Binalonan, Pangasinan
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

        themeBtn.innerHTML = newTheme === "dark" 
            ? '<i class="fa-solid fa-sun" style="color: #ffd8b1;"></i>' 
            : '<i class="fa-solid fa-moon" style="color: #ffffff;"></i>';

        showToast(newTheme === "dark" ? "Switched to Dark Mode 🌙" : "Switched to Light Mode ☀️");
    };
}

// Dynamic Navbar Setup (with Rider protection)
function setupDynamicNavbar() {
    const navbar = document.querySelector(".navbar");
    const navLinksContainer = document.querySelector(".nav-links");
    if (!navbar || !navLinksContainer) return;

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    if (currentPage === "rider.html") {
        initThemeToggle();
        return;
    }

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
        let clearedKey = "clearedNotifs_" + (currentUser.email || "").toLowerCase();
        let clearedNotifs = JSON.parse(localStorage.getItem(clearedKey)) || [];
        let unreadOrders = userOrders.filter(o => !clearedNotifs.includes(`order_${o.id}_${o.status || "Pending"}`));
        let notifCount = unreadOrders.length;
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
    localStorage.removeItem("cart");
    updateCartCount();
    showToast("Logged out successfully.");
    
    const isInAdmin = /[\\/]admin[\\/]/.test(window.location.pathname) || window.location.pathname.startsWith("admin");
    setTimeout(() => {
        window.location.href = isInAdmin ? "../login.html" : "login.html";
    }, 600);
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

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    if (!currentUser || currentPage === "cart.html" || currentPage === "order_success.html" || currentPage === "login.html" || currentPage === "register.html") {
        let existingFloat = document.getElementById("floating-cart-pill");
        if (existingFloat) existingFloat.classList.remove("visible");
        return;
    }

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
function getFavoritesStorageKey() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || !currentUser.email) return null;
    return "userFavorites_" + currentUser.email.toLowerCase();
}

function getFavorites() {
    const key = getFavoritesStorageKey();
    if (!key) return [];
    return JSON.parse(localStorage.getItem(key)) || [];
}

function toggleFavorite(productId, e) {
    if (e) e.stopPropagation();

    const key = getFavoritesStorageKey();
    if (!key) {
        showToast("Please login first to save favorites!");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 900);
        return;
    }

    let favs = getFavorites();
    let idx = favs.indexOf(productId);
    let products = getLiveProducts();
    let p = products.find(item => item.id === productId);
    let pName = p ? p.name : "Item";

    if (idx > -1) {
        favs.splice(idx, 1);
        showToast("Removed " + pName + " from Favorites");
    } else {
        favs.push(productId);
        showToast("Saved " + pName + " to Favorites!");
    }
    localStorage.setItem(key, JSON.stringify(favs));
    
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
            ? "You haven't saved any favorites yet. Tap the heart icon to add here!"
            : "No items found. Try searching another keyword or select a different category.";

        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; color: var(--text-secondary); background: var(--card-bg); border-radius: 16px; border: 1px solid var(--border-color);">
                <i class="fa-solid fa-mug-saucer" style="font-size: 32px; color: var(--accent-color); margin-bottom: 10px;"></i>
                <h3 style="color: var(--text-color); margin: 6px 0;">No Items Found</h3>
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
            let btnLabel = p.isFood ? '<i class="fa-solid fa-utensils"></i> Order Meal' : '<i class="fa-solid fa-sliders"></i> Customize & Add';
            btnHTML = `<button class="btn-add" onclick="openQuickViewModal(${p.id})">${btnLabel}</button>`;
        }

        let startingPrice = p.price;
        if (p.prices) {
            let allP = Object.values(p.prices);
            startingPrice = Math.min(...allP);
        }

        let categoryTag = p.category === "foodbox" ? "FOOD BOX KITCHEN" : p.category.toUpperCase();

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
                    <span class="card-cat">${categoryTag}</span>
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
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!currentUser || !currentUser.email) {
            showToast("Please login first to book an event booth!");
            setTimeout(() => {
                window.location.href = "login.html";
            }, 900);
            return;
        }
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

// Customizer Modal
let selectedQuickViewProduct = null;
let currentSelectedSize = "iced16";
let currentTemp = "Iced";
let currentSugar = "100%";
let currentIce = "Regular Ice";
let currentWaffleFlavor = "Chocolate";

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
                            <span class="pref-label" id="size-pref-label">Select Serving & Size:</span>
                            <div class="pref-pills-row" id="size-pills"></div>
                        </div>

                        <div id="drink-temp-sugar-section">
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

                        <div id="waffle-toppings-section" style="display: none;" class="pref-group">
                            <span class="pref-label">Select Waffle Topping:</span>
                            <div class="pref-pills-row" id="waffle-pills">
                                <button type="button" class="pref-pill active" onclick="selectWaffleTopping('Chocolate', this)"><i class="fa-solid fa-cookie"></i> Chocolate</button>
                                <button type="button" class="pref-pill" onclick="selectWaffleTopping('Strawberry', this)"><i class="fa-solid fa-apple-whole"></i> Strawberry</button>
                                <button type="button" class="pref-pill" onclick="selectWaffleTopping('Blueberry', this)"><i class="fa-solid fa-lemon"></i> Blueberry</button>
                            </div>
                        </div>
                    </div>

                    <div style="margin-top: 14px;" id="addons-outer-wrap">
                        <span class="pref-label" id="addons-pref-label">Extra Add-ons:</span>
                        <div id="qv-addons-container" style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;"></div>
                    </div>
                </div>

                <div style="padding: 15px 20px; border-top: 1px solid var(--border-color); display: flex; gap: 10px; background: var(--card-bg); flex-shrink: 0;">
                    <button onclick="closeQuickViewModal()" style="flex: 1; padding: 12px; background: transparent; border: 1px solid var(--border-color); color: var(--text-color); border-radius: 10px; font-weight: bold; cursor: pointer;">Cancel</button>
                    <button id="qv-submit-btn" onclick="confirmQuickViewAddToCart()" style="flex: 2; padding: 12px; background: var(--accent-color); color: #fff; border: none; border-radius: 10px; font-weight: bold; cursor: pointer;">
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

function selectWaffleTopping(flavor, btn) {
    currentWaffleFlavor = flavor;
    document.querySelectorAll("#waffle-pills .pref-pill").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    updateModalPreviewCard();
}

function updateModalPreviewCard() {
    let iconEl = document.getElementById("preview-cup-icon");
    let headlineEl = document.getElementById("preview-drink-headline");
    let subEl = document.getElementById("preview-drink-sub");

    if (!headlineEl || !selectedQuickViewProduct) return;

    if (selectedQuickViewProduct.isFood) {
        iconEl.innerHTML = '<i class="fa-solid fa-utensils" style="color: var(--accent-color);"></i>';
        if (currentSelectedSize === "combo") {
            headlineEl.textContent = `Meal Box + Choice of Fruit Soda`;
            subEl.textContent = `Includes 1 Fresh Fruit Soda Cooler · Hot & Ready`;
        } else if (selectedQuickViewProduct.name.toLowerCase().includes("waffle")) {
            headlineEl.textContent = `Crispy Golden Waffle`;
            subEl.textContent = `Topping Selected: ${currentWaffleFlavor}`;
        } else {
            headlineEl.textContent = selectedQuickViewProduct.name;
            subEl.textContent = `Freshly Prepared · Serves 1`;
        }
    } else {
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
    }

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
    currentWaffleFlavor = "Chocolate";

    document.getElementById("qv-product-image").src = product.image;
    document.getElementById("qv-product-cat").textContent = product.category === "foodbox" ? "FOOD BOX KITCHEN" : product.category.toUpperCase();
    document.getElementById("qv-product-name").textContent = product.name;
    document.getElementById("qv-product-desc").textContent = product.description || "Freshly made recipe.";

    let sizePillsContainer = document.getElementById("size-pills");
    let availableSizes = product.prices ? Object.keys(product.prices) : ['default'];

    currentSelectedSize = availableSizes.includes("solo") ? "solo" : (availableSizes.includes("iced16") ? "iced16" : availableSizes[0]);
    currentTemp = currentSelectedSize.startsWith("hot") ? "Hot" : "Iced";

    sizePillsContainer.innerHTML = availableSizes.map(sz => {
        let label = "Standard";
        let cost = product.prices ? product.prices[sz] : product.price;
        if (sz === "solo") label = `🍱 Solo Meal Box (₱${cost})`;
        else if (sz === "combo") label = `🥤 + Choice of Fruit Soda (₱${cost})`;
        else if (sz === "hot12") label = `☕ Hot 12oz (₱${cost})`;
        else if (sz === "iced16") label = `🧊 Iced 16oz (₱${cost})`;
        else if (sz === "iced22") label = `🧊 Iced 22oz (₱${cost})`;
        else if (sz === "default") label = `Standard Serving (₱${cost})`;

        let isActive = sz === currentSelectedSize ? "active" : "";
        return `<button type="button" class="pref-pill ${isActive}" onclick="selectSizePref('${sz}', this)">${label}</button>`;
    }).join("");

    let customizerControls = document.getElementById("drink-customizer-controls");
    let drinkTempSugarSection = document.getElementById("drink-temp-sugar-section");
    let waffleSection = document.getElementById("waffle-toppings-section");
    let addonsContainer = document.getElementById("qv-addons-container");
    let addonsOuter = document.getElementById("addons-outer-wrap");
    let sizePrefLabel = document.getElementById("size-pref-label");

    // I-reset ang customizer controls
    customizerControls.style.display = "block";
    addonsOuter.style.display = "block";

    if (product.isFood) {
        drinkTempSugarSection.style.display = "none";
        sizePrefLabel.textContent = "Meal Options:";
        waffleSection.style.display = product.name.toLowerCase().includes("waffle") ? "block" : "none";

        addonsContainer.innerHTML = availableFoodExtras.map(extra => `
            <label style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: var(--bg-color); border: 1px solid var(--border-color); border-radius: 10px; cursor: pointer; font-size: 13px; color: var(--text-color);">
                <span style="display: flex; align-items: center; gap: 10px;">
                    <input type="checkbox" class="qv-addon-checkbox" onchange="updateLiveModalPrice()" value="${extra.id}" data-name="${extra.name}" data-price="${extra.price}" style="accent-color: var(--accent-color);">
                    ${extra.name}
                </span>
                <span style="font-weight: bold; color: var(--accent-color);">+₱${extra.price}</span>
            </label>
        `).join('');
    } else if (product.category === 'package') {
        customizerControls.style.display = "none";
        waffleSection.style.display = "none";
        addonsOuter.style.display = "none";
    } else {
        drinkTempSugarSection.style.display = "block";
        waffleSection.style.display = "none";
        sizePrefLabel.textContent = "Select Serving & Cup Size:";

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
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || !currentUser.email) {
        closeQuickViewModal();
        showToast("Please login first to add items to your basket!");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 900);
        return;
    }

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

    let customSummary = "";
    if (product.isFood) {
        if (currentSelectedSize === "combo") customSummary = "Combo Meal (+ Fruit Soda)";
        else if (product.name.toLowerCase().includes("waffle")) customSummary = `Topping: ${currentWaffleFlavor}`;
        else customSummary = "Solo Meal";
    } else if (product.category === 'package') {
        customSummary = "Event Package";
    } else {
        let sizeLabel = "16oz";
        if (currentSelectedSize === "hot12") sizeLabel = "12oz Hot";
        else if (currentSelectedSize === "iced16") sizeLabel = "16oz Iced";
        else if (currentSelectedSize === "iced22") sizeLabel = "22oz Iced";
        customSummary = `${sizeLabel} · Sugar: ${currentSugar} · Ice: ${currentIce}`;
    }

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
    showToast(`Added ${product.name} to basket!`);
}

// Coffee & Craving Matcher Quiz (Smart Menu Matching + Customer Comment)
let quizAnswers = { category: 'all', serve: 'any', flavor: '', comment: '' };
let currentQuizStep = 1;

function setupCoffeeQuizModal() {
    if (document.getElementById("coffee-quiz-modal-overlay")) return;

    let modalHTML = `
        <div id="coffee-quiz-modal-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.72); z-index: 3000; align-items: center; justify-content: center; padding: 16px; backdrop-filter: blur(6px);">
            <div style="background: var(--card-bg); color: var(--text-color); border: 1px solid var(--border-color); max-width: 490px; width: 100%; border-radius: 22px; padding: 26px 24px; box-shadow: var(--card-shadow); position: relative; max-height: 92vh; overflow-y: auto;">
                <button onclick="closeCoffeeQuizModal()" style="position: absolute; top: 15px; right: 15px; background: var(--bg-color); border: 1px solid var(--border-color); width: 32px; height: 32px; border-radius: 50%; font-size: 14px; color: var(--text-secondary); cursor: pointer; font-weight: bold; display: flex; align-items: center; justify-content: center;">✕</button>
                
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
    quizAnswers = { category: 'all', serve: 'any', flavor: '', comment: '' };
    let dotsWrap = document.getElementById("quiz-dots-wrap");
    if (dotsWrap) dotsWrap.style.display = "flex";
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
            <div style="text-align: center; margin-bottom: 16px;">
                <span style="font-size: 11px; font-weight: 800; color: var(--accent-color); letter-spacing: 1px;">QUESTION 1 OF 3</span>
                <h3 style="font-family: 'DM Serif Display', serif; font-size: 22px; color: var(--text-color); margin: 4px 0 4px;">What are you craving right now?</h3>
                <p style="font-size: 12.5px; color: var(--text-secondary); margin: 0;">Choose from all Francos menu series:</p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <button class="quiz-option-btn" onclick="answerQuiz('category', 'sleepless')"><i class="fa-solid fa-mug-hot" style="color: #d47a24;"></i> Sleepless Coffee (Espresso & Lattes)</button>
                <button class="quiz-option-btn" onclick="answerQuiz('category', 'sogreen')"><i class="fa-solid fa-leaf" style="color: #2e7d32;"></i> So Green (Ceremonial Uji Matcha)</button>
                <button class="quiz-option-btn" onclick="answerQuiz('category', 'snow')"><i class="fa-solid fa-snowflake" style="color: #0288d1;"></i> Snow Frappes (22oz Ice-Blended)</button>
                <button class="quiz-option-btn" onclick="answerQuiz('category', 'sweettooth')"><i class="fa-solid fa-cookie-bite" style="color: #8d6e63;"></i> Sweet Tooth (Non-Coffee Choco & Cheesecake)</button>
                <button class="quiz-option-btn" onclick="answerQuiz('category', 'fruitfaves')"><i class="fa-solid fa-lemon" style="color: #e91e63;"></i> Fruit Faves (Sparkling Soda, Yakult & Chia)</button>
                <button class="quiz-option-btn" onclick="answerQuiz('category', 'oatmilk')"><i class="fa-solid fa-seedling" style="color: #558b2f;"></i> Oat Milk Series (Dairy-Free)</button>
                <button class="quiz-option-btn" onclick="answerQuiz('category', 'foodbox')"><i class="fa-solid fa-utensils" style="color: #e65100;"></i> Food Box (Rice Meals, Pasta, Sandwiches, Waffles)</button>
            </div>
        `;
    } else if (currentQuizStep === 2) {
        if (quizAnswers.category === 'foodbox') {
            container.innerHTML = `
                <div style="text-align: center; margin-bottom: 16px;">
                    <span style="font-size: 11px; font-weight: 800; color: var(--accent-color); letter-spacing: 1px;">QUESTION 2 OF 3</span>
                    <h3 style="font-family: 'DM Serif Display', serif; font-size: 22px; color: var(--text-color); margin: 4px 0 4px;">What kind of meal or snack?</h3>
                    <p style="font-size: 12.5px; color: var(--text-secondary); margin: 0;">Pick your Food Box style:</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <button class="quiz-option-btn" onclick="answerQuiz('serve', 'ricemeal')"><i class="fa-solid fa-bowl-rice" style="color: #d47a24;"></i> Heavy Rice Meal (Pastil, Sisig, Longanisa, Tocino)</button>
                    <button class="quiz-option-btn" onclick="answerQuiz('serve', 'pasta_sandwich')"><i class="fa-solid fa-bread-slice" style="color: #e65100;"></i> Pasta or Toasted Sandwich</button>
                    <button class="quiz-option-btn" onclick="answerQuiz('serve', 'snack')"><i class="fa-solid fa-stroopwafel" style="color: #f59e0b;"></i> Merienda Snack (Waffles or Cheesy Fries)</button>
                    <button class="quiz-option-btn" onclick="answerQuiz('serve', 'any')"><i class="fa-solid fa-wand-magic-sparkles" style="color: #9c27b0;"></i> Surprise Me (Best Seller)</button>
                </div>
            `;
        } else {
            container.innerHTML = `
                <div style="text-align: center; margin-bottom: 16px;">
                    <span style="font-size: 11px; font-weight: 800; color: var(--accent-color); letter-spacing: 1px;">QUESTION 2 OF 3</span>
                    <h3 style="font-family: 'DM Serif Display', serif; font-size: 22px; color: var(--text-color); margin: 4px 0 4px;">How do you want it served?</h3>
                    <p style="font-size: 12.5px; color: var(--text-secondary); margin: 0;">Choose temperature or style:</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <button class="quiz-option-btn" onclick="answerQuiz('serve', 'iced')"><i class="fa-solid fa-snowflake" style="color: #0288d1;"></i> Iced & Refreshing (16oz / 22oz)</button>
                    <button class="quiz-option-btn" onclick="answerQuiz('serve', 'hot')"><i class="fa-solid fa-mug-hot" style="color: #e65100;"></i> Steaming Hot & Comforting (12oz)</button>
                    <button class="quiz-option-btn" onclick="answerQuiz('serve', 'any')"><i class="fa-solid fa-star" style="color: #f59e0b;"></i> Either Hot or Iced (Show Best Match)</button>
                </div>
            `;
        }
        container.innerHTML += `
            <button type="button" onclick="currentQuizStep=1; renderQuizStep();" style="margin-top: 14px; background: none; border: none; color: var(--text-secondary); font-size: 12px; cursor: pointer; text-decoration: underline;">← Back to Question 1</button>
        `;
    } else if (currentQuizStep === 3) {
        container.innerHTML = `
            <div style="text-align: center; margin-bottom: 14px;">
                <span style="font-size: 11px; font-weight: 800; color: var(--accent-color); letter-spacing: 1px;">QUESTION 3 OF 3</span>
                <h3 style="font-family: 'DM Serif Display', serif; font-size: 22px; color: var(--text-color); margin: 4px 0 4px;">Tell us what you feel like!</h3>
                <p style="font-size: 12.5px; color: var(--text-secondary); margin: 0;">Pick a flavor note & type your mood or craving below:</p>
            </div>

            <div class="pref-pills-row" style="justify-content: center; margin-bottom: 14px;" id="quiz-flavor-pills">
                <button type="button" class="pref-pill" onclick="selectQuizFlavor('sweet caramel vanilla condensed', this)">🍯 Sweet & Creamy</button>
                <button type="button" class="pref-pill" onclick="selectQuizFlavor('strong bold espresso americano cold brew', this)">⚡ Strong & Bold</button>
                <button type="button" class="pref-pill" onclick="selectQuizFlavor('chocolate nutella biscoff oreo dark', this)">🍫 Choco / Biscoff</button>
                <button type="button" class="pref-pill" onclick="selectQuizFlavor('strawberry blueberry orange apple fruit', this)">🍓 Fruity / Berry</button>
                <button type="button" class="pref-pill" onclick="selectQuizFlavor('almond pistachio skippy nutty cheese', this)">🥜 Nutty / Cheesy</button>
                <button type="button" class="pref-pill" onclick="selectQuizFlavor('sisig pastil longanisa tocino spam savory garlic', this)">🍳 Savory Meal</button>
            </div>

            <div style="text-align: left; margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 800; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.6px;">
                    <i class="fa-solid fa-comment-dots" style="color: var(--accent-color);"></i> Your Mood / Craving Comment (Optional):
                </label>
                <textarea id="quiz-user-comment" class="quiz-comment-box" placeholder="Halimbawa: 'antok na ako gusto ko matapang', 'creamy spanish or biscoff', 'gutom ako gusto ko rice meal', 'something refreshing strawberry'..."></textarea>
            </div>

            <div style="display: flex; gap: 10px;">
                <button type="button" onclick="currentQuizStep=2; renderQuizStep();" style="flex: 1; padding: 12px; background: transparent; border: 1px solid var(--border-color); color: var(--text-color); border-radius: 10px; font-weight: bold; cursor: pointer; font-size: 13px;">← Back</button>
                <button type="button" onclick="submitQuizWithComment()" style="flex: 2; padding: 12px; background: var(--accent-color); color: #fff; border: none; border-radius: 10px; font-weight: bold; cursor: pointer; font-size: 13.5px;">Find My Match ➔</button>
            </div>
        `;
    }
}

function answerQuiz(key, value) {
    quizAnswers[key] = value;
    if (currentQuizStep < 3) {
        currentQuizStep++;
        renderQuizStep();
    }
}

function selectQuizFlavor(keywords, btn) {
    document.querySelectorAll("#quiz-flavor-pills .pref-pill").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    quizAnswers.flavor = keywords;
}

function submitQuizWithComment() {
    let commentEl = document.getElementById("quiz-user-comment");
    quizAnswers.comment = commentEl ? commentEl.value.trim() : "";
    calculateQuizResult();
}

function calculateQuizResult() {
    let container = document.getElementById("quiz-step-content");
    let dotsWrap = document.getElementById("quiz-dots-wrap");
    if (dotsWrap) dotsWrap.style.display = "none";

    let products = getLiveProducts().filter(p => p.category !== "package" && (p.stock === undefined || p.stock > 0));
    if (products.length === 0) products = getLiveProducts();

    let commentLower = (quizAnswers.comment || "").toLowerCase();

    // Tagalog + English craving keyword mapping
    const synonymMap = {
        "matapang": ["espresso", "americano", "cold brew", "black"],
        "antok": ["espresso", "americano", "cold brew", "sleepless"],
        "puyat": ["espresso", "americano", "cold brew", "coffee"],
        "gising": ["espresso", "americano", "cold brew"],
        "matamis": ["caramel", "spanish", "chocolate", "nutella", "biscoff", "brulee", "sweet"],
        "sweet": ["caramel", "spanish", "chocolate", "nutella", "biscoff", "brulee"],
        "maasim": ["orange", "strawberry", "blueberry", "passion", "green apple", "yakult", "sparkling"],
        "refreshing": ["sparkling", "yakult", "orange", "strawberry", "blueberry", "soda", "snow"],
        "malamig": ["iced", "snow", "frappe", "cold", "sparkling"],
        "mainit": ["hot", "latte", "cappuccino", "americano"],
        "gutom": ["rice meal", "pastil", "sisig", "longanisa", "tocino", "pasta", "sandwich"],
        "kanin": ["rice meal", "pastil", "sisig", "longanisa", "tocino", "spam", "bacon", "hotdog"],
        "ulam": ["rice meal", "pastil", "sisig", "longanisa", "tocino", "spam"],
        "merienda": ["waffle", "fries", "sandwich", "pasta", "snow"],
        "tsokolate": ["chocolate", "mocha", "nutella", "choco", "hershey"],
        "choco": ["chocolate", "mocha", "nutella", "choco", "hershey"],
        "kape": ["latte", "espresso", "americano", "coffee", "macchiato"],
        "healthy": ["oat", "matcha", "chia"],
        "diet": ["oat", "americano", "cold brew", "chia"],
        "creamy": ["spanish", "latte", "milk", "cheesecake", "brulee", "oat"]
    };

    let searchTokens = (quizAnswers.flavor + " " + commentLower)
        .split(/[\s,!.?]+/)
        .filter(w => w.length >= 3);

    let expandedTokens = [...searchTokens];
    searchTokens.forEach(tok => {
        if (synonymMap[tok]) {
            expandedTokens = expandedTokens.concat(synonymMap[tok]);
        }
    });

    // Score every item in the live menu
    let scored = products.map(p => {
        let score = 0;
        let text = (p.name + " " + p.description + " " + p.category).toLowerCase();

        if (quizAnswers.category !== "all" && p.category === quizAnswers.category) {
            score += 20;
        }

        if (quizAnswers.serve === "hot" && p.prices && p.prices.hot12) score += 8;
        if (quizAnswers.serve === "iced" && ((p.prices && (p.prices.iced16 || p.prices.iced22)) || p.category === "snow")) score += 6;
        if (quizAnswers.serve === "ricemeal" && text.includes("rice meal")) score += 15;
        if (quizAnswers.serve === "pasta_sandwich" && (text.includes("pasta") || text.includes("sandwich"))) score += 15;
        if (quizAnswers.serve === "snack" && (text.includes("waffle") || text.includes("fries"))) score += 15;

        expandedTokens.forEach(tok => {
            if (p.name.toLowerCase().includes(tok)) score += 12;
            else if (text.includes(tok)) score += 6;
        });

        if (p.isStar) score += 2;

        return { product: p, score: score };
    });

    scored.sort((a, b) => b.score - a.score);

    let topPick = scored[0].product;
    let altPicks = scored.slice(1, 3).map(s => s.product);

    let reason = quizAnswers.comment
        ? `Matched with your craving: "${quizAnswers.comment}"`
        : `Perfect match from our ${topPick.category.toUpperCase()} series!`;

    let altHTML = altPicks.map(alt => `
        <div class="quiz-alt-card" onclick="orderQuizResult(${alt.id})">
            <img src="${alt.image}" alt="${alt.name}">
            <div style="flex: 1; min-width: 0;">
                <strong style="font-size: 12.5px; color: var(--text-color); display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${alt.name}</strong>
                <span style="font-size: 11px; color: var(--accent-color); font-weight: 700;">₱${alt.price.toFixed(2)}</span>
            </div>
            <span style="font-size: 11px; color: var(--text-secondary); font-weight: 700;">Pick →</span>
        </div>
    `).join("");

    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 14px;">
            <span style="font-size: 11px; font-weight: 800; color: #2e7d32; background: rgba(46,125,50,0.15); padding: 4px 12px; border-radius: 20px; letter-spacing: 1px;">
                🎉 MENU MATCH FOUND!
            </span>
            <h3 style="font-family: 'DM Serif Display', serif; font-size: 22px; color: var(--text-color); margin: 8px 0 2px;">Recommended For You:</h3>
            <p style="font-size: 12px; color: var(--text-secondary); margin: 0;">${reason}</p>
        </div>

        <div style="background: var(--bg-color); border: 1px solid var(--border-color); border-radius: 14px; overflow: hidden; margin-bottom: 14px; box-shadow: var(--card-shadow);">
            <img src="${topPick.image}" style="width: 100%; height: 150px; object-fit: cover;">
            <div style="padding: 14px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <strong style="font-size: 16.5px; color: var(--text-color);">${topPick.name}</strong>
                    <span style="font-size: 15.5px; font-weight: 800; color: var(--accent-color);">₱${topPick.price.toFixed(2)}</span>
                </div>
                <p style="font-size: 12px; color: var(--text-secondary); margin: 0 0 8px; line-height: 1.45;">${topPick.description}</p>
                <div style="font-size: 11px; color: #f59e0b; display: flex; align-items: center; gap: 4px;">
                    <i class="fa-solid fa-star"></i><strong>${topPick.rating || 4.9}</strong> · Matches your mood
                </div>
            </div>
        </div>

        <div style="margin-bottom: 16px;">
            <span style="font-size: 11px; font-weight: 800; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.6px; display: block; margin-bottom: 8px;">Other Matching Options:</span>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                ${altHTML}
            </div>
        </div>

        <div style="display: flex; gap: 10px;">
            <button onclick="openCoffeeQuizModal()" style="flex: 1; padding: 11px; background: transparent; border: 1px solid var(--border-color); color: var(--text-color); border-radius: 10px; font-weight: bold; cursor: pointer; font-size: 13px;">Retake Quiz</button>
            <button onclick="orderQuizResult(${topPick.id})" style="flex: 2; padding: 11px; background: var(--accent-color); color: #fff; border: none; border-radius: 10px; font-weight: bold; cursor: pointer; font-size: 13px;">Customize & Add ➔</button>
        </div>
    `;
}

function orderQuizResult(productId) {
    closeCoffeeQuizModal();
    openQuickViewModal(productId);
}