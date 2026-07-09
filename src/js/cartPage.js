import "../css/input.css";
import "../css/components.css";
import "../css/cart.css";
import "./components/navbar";
import "./components/footer";
import images from "./utils/images";
import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    updateCartCount
} from "./cart";
const cartPage = document.querySelector("#cart-page");

cartPage.innerHTML = `

<section class="min-h-screen bg-orange-50 py-10 pt-28 pb-16">

    <div class="max-w-7xl mx-auto px-6 lg:px-12">

        <!-- Header -->

        <div class="flex items-center justify-between mb-10">

            <a
                href="index.html"
                class="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold">

                <!-- Arrow Left -->

                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="2"
                     stroke="currentColor"
                     class="w-5 h-5">

                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"/>

                </svg>

                Continue Shopping

            </a>

            <div class="flex items-center gap-3">

                <!-- Cart Icon -->

                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="2"
                     stroke="currentColor"
                     class="w-8 h-8 text-orange-500">

                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386a1.5 1.5 0 011.464 1.175L5.61 6H20.25l-1.5 7.5H7.125M7.125 13.5L6 18h12m-9.75 3a.75.75 0 100-1.5.75.75 0 000 1.5zm9 0a.75.75 0 100-1.5.75.75 0 000 1.5z"/>

                </svg>

                <h1 class="text-4xl font-bold">

                    My Cart

                </h1>

            </div>

        </div>

        <!-- Main Grid -->

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <!-- Cart Items -->

            <div
                id="cart-items"
                class="lg:col-span-2 space-y-6">

            </div>

            <!-- Order Summary -->

            <div
                class="bg-white rounded-3xl shadow-lg p-8 h-fit lg:sticky lg:top-28">

                <h2 class="text-2xl font-bold">

                    Order Summary

                </h2>

                <div class="mt-8 space-y-5">

                    <div class="flex justify-between">

                        <span class="text-gray-500">

                            Subtotal

                        </span>

                        <span id="subtotal">

                            ₹0

                        </span>

                    </div>

                    <div class="flex justify-between">

                        <span class="text-gray-500">

                            Delivery

                        </span>

                        <span class="text-green-600">

                            FREE

                        </span>

                    </div>

                    <div class="flex justify-between">

                        <span class="text-gray-500">

                            GST (5%)

                        </span>

                        <span id="gst">

                            ₹0

                        </span>

                    </div>

                    <hr>

                    <div class="flex justify-between text-xl font-bold">

                        <span>

                            Grand Total

                        </span>

                        <span id="grand-total">

                            ₹0

                        </span>

                    </div>

                </div>

                <button id="checkout-btn"
                    class="w-full mt-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">

                    Proceed to Checkout

                </button>

            </div>

        </div>

    </div>

</section>

`;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

renderCart();

function renderCart() {

    const cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

if (cart.length === 0) {

    cartItems.innerHTML = `

    <div class="bg-white rounded-3xl shadow-lg p-16 text-center">

        <svg xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             stroke-width="1.5"
             stroke="currentColor"
             class="w-28 h-28 mx-auto text-orange-400">

            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386a1.5 1.5 0 011.464 1.175L5.61 6H20.25l-1.5 7.5H7.125M7.125 13.5L6 18h12m-9.75 3a.75.75 0 100-1.5.75.75 0 000 1.5zm9 0a.75.75 0 100-1.5.75.75 0 000 1.5z"/>

        </svg>

        <h2 class="text-3xl font-bold mt-6">

            Your Cart is Empty

        </h2>

        <p class="text-gray-500 mt-3">

            Looks like you haven't added anything yet.

        </p>

        <a
            href="index.html"
            class="inline-flex mt-8 px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600">

            Start Shopping

        </a>

    </div>

    `;

    updateSummary();

    return;

}

    cart.forEach(item => {

        cartItems.innerHTML += createCartItem(item);

    });

    addCartEvents();

    updateSummary();

}

function createCartItem(item) {

    return `

<div class="bg-white rounded-3xl shadow-lg p-6 flex flex-col sm:flex-row gap-5">

    <!-- Image -->

    <img
        src="${images[item.image]}"
        class="w-28 h-28 object-contain sm:mx-0 bg-orange-50 rounded-2xl p-2">

    <!-- Details -->

    <div class="flex-1">

        <div class="flex justify-between">

            <div>

                <h3 class="text-2xl font-bold">

                    ${item.name}

                </h3>

                <p class="text-gray-500 mt-2">

                    ${item.description}

                </p>

            </div>

            <span
                class="bg-orange-100 text-orange-600 px-3 py-1 rounded-full h-fit">

                ${item.category}

            </span>

        </div>

        <div class="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <span class="text-3xl font-bold text-orange-500">

                ₹${item.price}

            </span>

            <div
                class="flex items-center justify-center gap-4 sm:gap-6">

                <!-- Quantity -->

                <div
                    class="flex items-center bg-orange-500 rounded-full">

                    <button
                        class="minus-btn px-4 py-2 text-white"
                        data-id="${item.id}">

                        −

                    </button>

                    <span class="px-4 text-white">

                        ${item.quantity}

                    </span>

                    <button
                        class="plus-btn px-4 py-2 text-white"
                        data-id="${item.id}">

                        +

                    </button>

                </div>

                <!-- Remove -->

                <button
                class="remove-btn flex items-center gap-2 text-red-500 hover:text-red-600 transition"
                data-id="${item.id}">

                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-5 h-5">

                    <path stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 7.5h12m-9.75 0v10.125A1.875 1.875 0 0010.125 19.5h3.75a1.875 1.875 0 001.875-1.875V7.5m-7.5 0V5.625A1.125 1.125 0 019.375 4.5h5.25A1.125 1.125 0 0115.75 5.625V7.5"/>

                </svg>

                Remove

            </button>

            </div>

        </div>

    </div>

</div>

`;

}

function addCartEvents() {

    // Plus Button

    document.querySelectorAll(".plus-btn").forEach((button) => {

        button.addEventListener("click", () => {

            increaseQuantity(Number(button.dataset.id));

            cart = JSON.parse(localStorage.getItem("cart")) || [];

            renderCart();

        });

    });

    // Minus Button

    document.querySelectorAll(".minus-btn").forEach((button) => {

        button.addEventListener("click", () => {

            decreaseQuantity(Number(button.dataset.id));

            cart = JSON.parse(localStorage.getItem("cart")) || [];

            renderCart();

        });

    });

    // Remove Button

    document.querySelectorAll(".remove-btn").forEach(button => {

    button.addEventListener("click", () => {

        removeFromCart(Number(button.dataset.id));

        cart = JSON.parse(localStorage.getItem("cart")) || [];

        renderCart();

    });

});

}

function updateSummary() {

    let subtotal = 0;

    cart.forEach(item => {

        subtotal += item.price * item.quantity;

    });

    const gst = Math.round(subtotal * 0.05);

    const grandTotal = subtotal + gst;

    document.getElementById("subtotal").innerText = "₹" + subtotal;

    document.getElementById("gst").innerText = "₹" + gst;

    document.getElementById("grand-total").innerText = "₹" + grandTotal;

    updateCartCount();

}

// Checkout Button
const checkoutBtn = document.getElementById("checkout-btn");

if (checkoutBtn) {

    checkoutBtn.disabled = cart.length === 0;

    if (cart.length === 0) {

        checkoutBtn.classList.add("opacity-50", "cursor-not-allowed");

    } else {

        checkoutBtn.classList.remove("opacity-50", "cursor-not-allowed");

        checkoutBtn.addEventListener("click", () => {

            window.location.href = "checkout.html";

        });

    }

}