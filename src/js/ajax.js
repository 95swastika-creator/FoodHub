import images from "./utils/images";
import {addToCart,increaseQuantity,decreaseQuantity,getCartQuantity,updateCartCount} from "./cart";
import { createCard } from "./components/foodCard";
import { toggleFavorite } from "./favorites";
let allFoods = [];
let currentFoods = [];
let currentLimit = 4;
const dishesContainer = document.querySelector("#dishes-container");

function loadFoods() {

    fetch("./data/food.json")

        .then((response) => {

            if (!response.ok) {
                throw new Error("Unable to load food data");
            }

            return response.json();

        })

        .then((foods) => {

              allFoods = foods;

              currentFoods = allFoods;

              displayFoods(currentFoods, currentLimit);

             initializeFilters();


        })

        .catch((error) => {

            console.log(error);

        });

}



function displayFoods(foods, limit = 4) {

    currentFoods = foods;
    currentLimit = limit;

    dishesContainer.innerHTML = "";

    foods.slice(0, limit).forEach((food) => {

        dishesContainer.innerHTML += createCard(food);

    });

    // Existing Cart Events
    addCartEvents();


document.querySelectorAll(".favorite-btn").forEach((button) => {

    button.addEventListener("click", (e) => {

        e.stopPropagation();

        toggleFavorite(Number(button.dataset.id));

        displayFoods(currentFoods, currentLimit);

    });

});

    const viewMoreBtn = document.getElementById("view-more-btn");

    if (viewMoreBtn) {

        if (limit >= foods.length) {

            viewMoreBtn.style.display = "none";

        } else {

            viewMoreBtn.style.display = "inline-flex";

        }

    }

}

export function addCartEvents() {

    // Add Button
    document.querySelectorAll(".add-cart-btn").forEach((button) => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            const food = allFoods.find((item) => item.id === id);

            const isLoggedIn = localStorage.getItem("isLoggedIn");

            if (isLoggedIn !== "true") {

                alert("Please login first.");

                window.location.href = "login.html";

                return;

            }

            addToCart(food);

            displayFoods(currentFoods, currentLimit);

        });

    });

    // Plus Button
    document.querySelectorAll(".plus-btn").forEach((button) => {

        button.addEventListener("click", () => {

            increaseQuantity(Number(button.dataset.id));

            displayFoods(currentFoods, currentLimit);

        });

    });

    // Minus Button
    document.querySelectorAll(".minus-btn").forEach((button) => {

        button.addEventListener("click", () => {

            decreaseQuantity(Number(button.dataset.id));

            displayFoods(currentFoods, currentLimit);

        });

    });

}   


export function displayMenuCards(foods) {

    const menuContainer = document.getElementById("menu-container");

    if (!menuContainer) return;

    menuContainer.innerHTML = "";

    foods.forEach(food => {

        menuContainer.innerHTML += createCard(food);

    });

    addCartEvents();

}
loadFoods();

function initializeFilters() {

    document.querySelector("#all-btn").addEventListener("click", () => {

        displayFoods(currentFoods, currentLimit);
        

    });

    document.querySelector("#pizza-btn").addEventListener("click", () => {

        filterFoods("Pizza");

    });

    document.querySelector("#burger-btn").addEventListener("click", () => {

        filterFoods("Burger");

    });

    document.querySelector("#biryani-btn").addEventListener("click", () => {

        filterFoods("Biryani");

    });

    document.querySelector("#pasta-btn").addEventListener("click", () => {

        filterFoods("Pasta");

    });

}

function filterFoods(category) {

    const filteredFoods = allFoods.filter((food) => {

        return food.category === category;

    });

    displayFoods(filteredFoods);

}

document.getElementById("view-more-btn").addEventListener("click", () => {

    displayFoods(allFoods, allFoods.length);

    document.getElementById("dishes").scrollIntoView({
            behavior: "smooth"
        });

});