// بەرھەمەکان
const products = {
    electronics: Array(50).fill().map((_, i) => ({
        id: `e${i + 1}`,
        name: `بەرھەمی ئەلیکترۆنی ${i + 1}`,
        price: Math.floor(Math.random() * 500) + 100,
        image: "https://via.placeholder.com/200"
    })),
    home: Array(50).fill().map((_, i) => ({
        id: `h${i + 1}`,
        name: `کەلوپەلی ناو ماڵ ${i + 1}`,
        price: Math.floor(Math.random() * 300) + 50,
        image: "https://via.placeholder.com/200"
    })),
    cosmetics: Array(50).fill().map((_, i) => ({
        id: `c${i + 1}`,
        name: `بەرھەمی جوانکاری ${i + 1}`,
        price: Math.floor(Math.random() * 100) + 10,
        image: "https://via.placeholder.com/200"
    }))
};

// کارت
let cart = [];

// نیشاندانی بەرھەمەکان
function displayProducts() {
    for (const category in products) {
        const container = document.getElementById(`${category}-products`);
        container.innerHTML = products[category].map(product => `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}$</p>
                <button onclick="addToCart('${category}', '${product.id}')">زیادکردن بۆ کارت</button>
            </div>
        `).join("");
    }
}

// زیادکردن بۆ کارت
function addToCart(category, productId) {
    const product = products[category].find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// نوێکردنەوەی کارت
function updateCart() {
    document.getElementById("cart-count").textContent = cart.length;
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <p>${item.name} - ${item.price}$</p>
        </div>
    `).join("");
    document.getElementById("total-price").textContent = cart.reduce((sum, item) => sum + item.price, 0);
}

// فۆڕمی خۆتۆمارکردن
document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("تۆمارکرا بە سەرکەوتوویی!");
});

// فۆڕمی پەیوەندی
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("پەیامەکەت نێردرا!");
});

// دەستپێکردن
displayProducts();
