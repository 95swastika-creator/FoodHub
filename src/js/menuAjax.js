import "../css/input.css";
import "../css/components.css";
import "../css/menu.css";
import "./components/footer";
import { toggleFavorite } from "./favorites";
import {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    getCartQuantity
} from "./cart";

import { createCard } from "./components/foodCard";

import menuBanner from "../assets/images/menu-banner.png";

import pizzaImg from "../assets/images/dishes/farmhouse.png";
import burgerImg from "../assets/images/dishes/veg-burger.png";
import biryaniImg from "../assets/images/dishes/chicken-biryani.png";
import pastaImg from "../assets/images/dishes/white-sause-pasta.png";
let currentCategory = "Pizza";
const menuPage = document.querySelector("#menu-page");
menuPage.innerHTML = `

<!-- Banner -->

<section class="relative mt-20">

    <img
        src="${menuBanner}"
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
<section class="py-24 bg-orange-50">

<div class="max-w-7xl mx-auto px-6 lg:px-12">
        <!-- Menu Layout -->

        <div class="grid lg:grid-cols-4 gap-10">

            <!-- Left Sidebar -->

            <aside class="lg:col-span-1">

                <div class="bg-white rounded-3xl shadow-lg p-5 sticky top-28">

                    <button
id="pizza-btn"
class="menu-category active-category">

    <img
        src="${pizzaImg}"
        class="category-image">

    <div class="flex-1">

        <h3 class="category-title text-lg font-semibold">

            Pizza

        </h3>

       
       
    </div>

</button>

                    <button
                        class="menu-category"
                        id="burger-btn">

                        <img
                            src="${burgerImg}"
                            class="w-20 h-20 object-contain">

                        <div>

                            <h3 class="text-lg font-semibold">

                                Burger

                            </h3>

                           

                        </div>

                    </button>

                    <button
                        class="menu-category"
                        id="biryani-btn">

                        <img
                            src="${biryaniImg}"
                            class="w-20 h-20 object-contain">

                        <div>

                            <h3 class="text-lg font-semibold">

                                Biryani

                            </h3>

                            

                        </div>

                    </button>

                    <button
                        class="menu-category"
                        id="pasta-btn">

                        <img
                            src="${pastaImg}"
                            class="w-20 h-20 object-contain">

                        <div>

                            <h3 class="text-lg font-semibold">

                                Pasta

                            </h3>

                           

                        </div>

                    </button>

                </div>

            </aside>

            <!-- Right -->

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

// load the menu items 
let allFoods = [];
fetch("./data/food.json")
    .then(response => response.json())
    .then(data => {

        allFoods = data;

        showCategory("Pizza");

    })
    .catch(error => {

        console.log(error);

    });

 function showCategory(category) {
         currentCategory = category;

    // Remove active class from all menu items
    document.querySelectorAll(".menu-category").forEach(item => {

        item.classList.remove("active-category");

    });

    // Add active class to selected category
    document
        .getElementById(category.toLowerCase() + "-btn")
        .classList.add("active-category");

    // Filter foods
    const foods = allFoods.filter(food => {

        return food.category === category;

    });

    // Update Title
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

function renderFoods(foods) {

    const menuContainer = document.getElementById("menu-container");

    menuContainer.innerHTML = "";

    foods.forEach(food => {

        menuContainer.innerHTML += createCard(food);

    });
    addMenuCartEvents();

}
function addMenuCartEvents() {

   document.querySelectorAll(".add-cart-btn").forEach(button => {

    button.addEventListener("click", () => {

        const id = Number(button.dataset.id);

        const food = allFoods.find(item => item.id === id);

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

    document.querySelectorAll(".plus-btn").forEach(button => {

        button.addEventListener("click", () => {

            increaseQuantity(Number(button.dataset.id));

            refreshCurrentCategory();

        });

    });

    document.querySelectorAll(".minus-btn").forEach(button => {

        button.addEventListener("click", () => {

            decreaseQuantity(Number(button.dataset.id));

            refreshCurrentCategory();

        });

    });

    document.querySelectorAll(".favorite-btn").forEach(button => {

    button.addEventListener("click", () => {

        toggleFavorite(Number(button.dataset.id));

        refreshCurrentCategory();

    });

});

}
function refreshCurrentCategory() {

    showCategory(currentCategory);

}

document.getElementById("pizza-btn").onclick = () => showCategory("Pizza");

document.getElementById("burger-btn").onclick = () => showCategory("Burger");

document.getElementById("biryani-btn").onclick = () => showCategory("Biryani");

document.getElementById("pasta-btn").onclick = () => showCategory("Pasta");
