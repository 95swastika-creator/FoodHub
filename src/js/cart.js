let cart = [];

function loadCart() {

    cart = JSON.parse(localStorage.getItem("cart")) || [];

}

// Save Cart
function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

}

// Get quantity of one item
export function getCartQuantity(id) {

    loadCart();

    const item = cart.find(food => food.id === id);

    return item ? item.quantity : 0;

}

// Add first item
export function addToCart(food) {

    loadCart();

    const item = cart.find(data => data.id === food.id);

    if (item) {

        item.quantity++;

    } else {

        cart.push({

            ...food,

            quantity: 1

        });

    }

    saveCart();

    updateCartCount();

}

// Increase
export function increaseQuantity(id) {

    loadCart();

    const item = cart.find(food => food.id === id);

    if (item) {

        item.quantity++;

    }

    saveCart();

    updateCartCount();

}

// Decrease
export function decreaseQuantity(id) {

    loadCart();

    const item = cart.find(food => food.id === id);

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {

        cart = cart.filter(food => food.id !== id);

    }

    saveCart();

    updateCartCount();

}
// Badge
export function updateCartCount() {

    loadCart();

    let total = 0;

    cart.forEach(item => {

        total += item.quantity;

    });

    const badge = document.getElementById("cart-count");

    const mobileBadge = document.getElementById("mobile-cart-count");

if (mobileBadge) {

    mobileBadge.innerText = total;

}

    if (badge) {

        badge.innerText = total;

    }

}
export function removeFromCart(id) {

    loadCart();

    cart = cart.filter(item => item.id !== id);

    saveCart();

    updateCartCount();

}