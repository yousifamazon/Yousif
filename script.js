// بەرهەمەکان
const products = [
    { id: 1, name: "مۆبایلی سامسۆنگ", price: 500000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "لێپتۆپی دێڵ", price: 800000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "هێدفۆنی سۆنی", price: 100000, image: "https://via.placeholder.com/150" },
];

let cart = [];

// نمایشکردنی بەرهەمەکان
function displayProducts() {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} دینار</p>
            <button onclick="addToCart(${product.id})">زیادکردن بۆ سەبەسکە</button>
        </div>
    `).join('');
}

// زیادکردن بۆ سەبەسکە
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// نوێکردنەوەی سەبەسکە
function updateCart() {
    const cartItems = document.querySelector('.cart-items');
    const cartCount = document.getElementById('cart-count');
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <h4>${item.name}</h4>
            <p>${item.price} دینار</p>
        </div>
    `).join('');
    
    cartCount.textContent = cart.length;
}

// کاتی کرتەکردن لە دووگمەی تێچوو
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert(`سپاس بۆ کڕین! کۆی گشتی: ${cart.reduce((sum, item) => sum + item.price, 0)} دینار`);
    cart = [];
    updateCart();
});

// نمایشی سەرەتایی
displayProducts();