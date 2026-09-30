
import "../css/input.css";
import "../css/components.css";
import "../css/menu.css";

import "./components/footer";

import foodData from "./data/food.json";
import images from "./utils/images";

import { toggleFavorite } from "./favorites";
import {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    getCartQuantity
} from "./cart";
import { createCard } from "./components/foodCard";


import menuBanner from "../assets/images/menu-banner.png";

// Default category
let currentCategory = "Pizza";

// Load food data from JSON
let allFoods = foodData;

// Get menu container
const menuPage = document.querySelector("#menu-page");

// Check whether menu page exists
if (menuPage) {

    // Render Menu HTML
    menuPage.innerHTML = `

        <!-- Banner -->

        <section class="relative mt-20">

            <img
                src="${menuBanner}"
                alt="FoodHub Menu Banner"
                class="w-full h-[350px] object-cover">

            <!-- Overlay -->

            <div class="absolute inset-0 bg-black/50"></div>

            <!-- Banner Text -->

            <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

                <p class="uppercase tracking-[5px] text-orange-400 font-semibold">
                    OUR MENU
                </p>

                <h1 class="text-5xl md:text-6xl font-bold text-white mt-4">
                    Discover Our Delicious Menu
                </h1>

                <p class="text-gray-200 mt-5 max-w-2xl text-lg">
                    Freshly prepared meals crafted with premium ingredients and served fresh every day.
                </p>

            </div>

        </section>

        <!-- Menu Section -->

        <section class="py-24 bg-orange-50">

            <div class="max-w-7xl mx-auto px-6 lg:px-12">

                <div class="grid lg:grid-cols-4 gap-10">

                    <!-- Left Sidebar -->

                    <aside class="lg:col-span-1">

                        <div class="bg-white rounded-3xl shadow-lg p-5 sticky top-28">

                            <!-- Pizza -->

                            <button
                                id="pizza-btn"
                                class="menu-category active-category">

                                <img
                                    src="${images["farmhouse.png"]}"
                                    alt="Pizza"
                                    class="category-image">

                                <div class="flex-1">
                                    <h3 class="category-title text-lg font-semibold">
                                        Pizza
                                    </h3>
                                </div>

                            </button>

                            <!-- Burger -->

                            <button
                                id="burger-btn"
                                class="menu-category">

                                <img
                                    src="${images["veg-burger.png"]}"
                                    alt="Burger"
                                    class="w-20 h-20 object-contain">

                                <div>
                                    <h3 class="text-lg font-semibold">
                                        Burger
                                    </h3>
                                </div>

                            </button>

                            <!-- Biryani -->

                            <button
                                id="biryani-btn"
                                class="menu-category">

                                <img
                                    src="${images["chicken-biryani.png"]}"
                                    alt="Biryani"
                                    class="w-20 h-20 object-contain">

                                <div>
                                    <h3 class="text-lg font-semibold">
                                        Biryani
                                    </h3>
                                </div>

                            </button>

                            <!-- Pasta -->

                            <button
                                id="pasta-btn"
                                class="menu-category">

                                <img
                                    src="${images["white-sause-pasta.png"]}"
                                    alt="Pasta"
                                    class="w-20 h-20 object-contain">

                                <div>
                                    <h3 class="text-lg font-semibold">
                                        Pasta
                                    </h3>
                                </div>

                            </button>

                        </div>

                    </aside>

                    <!-- Right Menu Content -->

                    <section class="lg:col-span-3">

                        <div id="menu-title"></div>

                        <div
                            id="menu-container"
                            class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                        </div>

                    </section>

                </div>

            </div>

        </section>

    `;

    // Display default category
    showCategory("Pizza");

    // Category button events
    document.getElementById("pizza-btn").onclick = () => {
        showCategory("Pizza");
    };

    document.getElementById("burger-btn").onclick = () => {
        showCategory("Burger");
    };

    document.getElementById("biryani-btn").onclick = () => {
        showCategory("Biryani");
    };

    document.getElementById("pasta-btn").onclick = () => {
        showCategory("Pasta");
    };

}


// ========================================
// SHOW CATEGORY
// ========================================

function showCategory(category) {

    currentCategory = category;

    // Remove active class
    document.querySelectorAll(".menu-category").forEach(item => {

        item.classList.remove("active-category");

    });

    // Add active class
    document
        .getElementById(category.toLowerCase() + "-btn")
        .classList.add("active-category");

    // Filter foods
    const foods = allFoods.filter(food => {

        return food.category === category;

    });

    // Update title
    document.getElementById("menu-title").innerHTML = `

        <p class="uppercase tracking-[3px] text-orange-500 font-semibold">

            ${foods.length} Delicious Dishes

        </p>

        <h2 class="text-5xl font-bold mt-2">

            ${category}

        </h2>

        <p class="text-gray-500 mt-3">

            Freshly prepared with premium ingredients.

        </p>

        <div class="w-24 h-1 bg-orange-500 rounded-full mt-5"></div>

    `;

    renderFoods(foods);

}


// ========================================
// RENDER FOOD CARDS
// ========================================

function renderFoods(foods) {

    const menuContainer = document.getElementById("menu-container");

    menuContainer.innerHTML = "";

    foods.forEach(food => {

        // Get actual image URL from images.js
        const imageUrl = images[food.image];

        // Check image mapping
        if (!imageUrl) {

            console.error("Image not found:", food.image);

        }

        // Pass actual image URL to createCard
        const foodWithImage = {

            ...food,

            image: imageUrl

        };

        menuContainer.innerHTML += createCard(foodWithImage);

    });

    addMenuCartEvents();

}


// ========================================
// CART AND FAVOURITE EVENTS
// ========================================

function addMenuCartEvents() {

    // Add to cart
    document.querySelectorAll(".add-cart-btn").forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            const food = allFoods.find(item => item.id === id);

            if (!food) return;

            const isLoggedIn = localStorage.getItem("isLoggedIn");

            if (isLoggedIn !== "true") {

                alert("Please login first.");

                window.location.href = "login.html";

                return;

            }

            addToCart(food);

            refreshCurrentCategory();

        });

    });


    // Increase quantity
    document.querySelectorAll(".plus-btn").forEach(button => {

        button.addEventListener("click", () => {

            increaseQuantity(Number(button.dataset.id));

            refreshCurrentCategory();

        });

    });


    // Decrease quantity
    document.querySelectorAll(".minus-btn").forEach(button => {

        button.addEventListener("click", () => {

            decreaseQuantity(Number(button.dataset.id));

            refreshCurrentCategory();

        });

    });


    // Toggle favourite
    document.querySelectorAll(".favorite-btn").forEach(button => {

        button.addEventListener("click", () => {

            toggleFavorite(Number(button.dataset.id));

            refreshCurrentCategory();

        });

    });

}


// ========================================
// REFRESH CURRENT CATEGORY
// ========================================

function refreshCurrentCategory() {

    showCategory(currentCategory);

}
