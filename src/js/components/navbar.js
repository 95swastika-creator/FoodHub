import { cartIcon, menuIcon } from "./icon";
import { updateCartCount } from "../cart";

const header = document.querySelector("#header");
const isLoggedIn = localStorage.getItem("isLoggedIn");
const userName = localStorage.getItem("userName");
const userAddress = localStorage.getItem("userAddress");

header.innerHTML = `
<header class="fixed top-0 left-0 w-full z-50 bg-white shadow-md">

    <nav class="w-full px-6 lg:px-12">

        <div class="h-20 flex items-center justify-between">

            <!-- Logo -->

            <a href="index.html" class="flex items-center">

                <img
                    src="${require("../../assets/images/logo.png")}"
                    alt="FoodHub Logo"
                    class="h-16 w-auto">

            </a>

            <!-- Navigation -->
           
            <ul class="hidden md:flex items-center gap-10">

                <li>
                    <a href="index.html" class="nav-link">
                        Home
                    </a>
                </li>

                <li>
                    <a href="menu.html" class="nav-link">
                        Menu
                    </a>
                </li>
              

                <li>
                    <a href="contact.html" class="nav-link">
                        Contact
                    </a>
                </li>
  <!-- Search Icon -->
                <li>
    <span
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-orange-300 rounded-full bg-orange-50 text-orange-600">

      

        <svg xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             stroke-width="2"
             stroke="currentColor"
             class="w-4 h-4">

            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"/>

        </svg>

        Search

    </span>
</li>

<!-- Offers -->
         <li>
    <span
        class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-orange-600 bg-orange-50 border border-orange-200 rounded-full hover:bg-orange-100 transition">

        <!-- Heroicon Tag -->
        <svg xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             stroke-width="2"
             stroke="currentColor"
             class="w-4 h-4">

            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.568 3.87A2.25 2.25 0 0111.16 3h6.59A2.25 2.25 0 0120 5.25v6.59a2.25 2.25 0 01-.659 1.591l-6.75 6.75a2.25 2.25 0 01-3.182 0l-5.59-5.59a2.25 2.25 0 010-3.182l5.75-5.75z"/>

            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 8.25h.008v.008h-.008V8.25z"/>

        </svg>

        Offers

    </span>
</li>

            </ul>
             
            <!-- Right Side -->

      


            <div class="hidden md:flex items-center gap-6">

                <!-- Cart -->

                <a
    href="cart.html"
    class="relative hover:text-orange-500 transition">

    ${cartIcon}

    <span
        id="cart-count"
        class="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">

        0

    </span>

</a>

              
                <!-- Login -->
                ${isLoggedIn ? `

<div class="flex items-center gap-4">

    <!-- User Info -->
    <div class="flex items-center gap-3">

        <!-- Avatar -->
        <div class="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">

            ${userName.charAt(0).toUpperCase()}

        </div>

        <!-- Name & Address -->
        <div>

            <p class="font-semibold text-gray-800">

                ${userName}

            </p>

            <div class="flex items-center gap-1 mt-1 max-w-[180px]">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-4 h-4 text-orange-500 flex-shrink-0">

                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z"/>

                    <circle
                        cx="12"
                        cy="10"
                        r="2.5"/>

                </svg>

                <span class="text-xs text-gray-500 truncate">

                    ${userAddress}

                </span>

            </div>

        </div>

    </div>

    <!-- Logout Button -->
    <button
        id="logout-btn"
        class="text-sm text-red-500 border border-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg transition">

        Logout

    </button>

</div>

` : `

<button
    id="login-btn"
    class="btn-primary">

    Login

</button>

`}
            </div>

            <!-- Mobile Menu -->

            <button id="mobile-menu-btn" class="md:hidden text-gray-700 hover:text-orange-500 transition">

                 ${menuIcon}

             </button>

        </div>

          <!-- Mobile Navigation -->

<div
    id="mobile-menu"
    class="hidden md:hidden bg-white border-t shadow-lg">

    <div class="px-6 py-5">

        ${
            isLoggedIn
                ? `

<div class="flex items-center gap-3 pb-5 border-b">

    <div
        class="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">

        ${userName.charAt(0).toUpperCase()}

    </div>

    <div>

        <p class="font-semibold">

            ${userName}

        </p>

        <div class="flex items-center gap-1 mt-1">

            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke-width="2"
                 stroke="currentColor"
                 class="w-4 h-4 text-orange-500">

                <path stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z"/>

                <circle
                    cx="12"
                    cy="10"
                    r="2.5"/>

            </svg>

            <span class="text-xs text-gray-500 truncate">

                ${userAddress}

            </span>

        </div>

    </div>

</div>

`
                : ""
        }

        <a
            href="index.html"
            class="flex items-center gap-3 py-4 hover:text-orange-500 hover:text-orange-500">

            &#10132; Home

        </a>

        <a
            href="menu.html"
            class="flex items-center gap-3 py-4 hover:text-orange-500 hover:text-orange-500">

            &#10132; Menu

        </a>

        <a
            href="contact.html"
            class="flex items-center gap-3 py-4 hover:text-orange-500 hover:text-orange-500">

            &#10132; Contact

        </a>

        <a
            href="cart.html"
            class="flex items-center justify-between py-4 hover:text-orange-500 
            hover:text-orange-500">

            <span> &#10132; Cart</span>

            <span
                id="mobile-cart-count"
                class="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">

                0

            </span>

        </a>

      

       

        ${
            isLoggedIn
                ? `

<button
    id="mobile-logout-btn"
    class="mt-4 w-full bg-red-500 text-white rounded-xl py-3">

    Logout

</button>

`
                : `

<a
    href="login.html"
    class="block mt-4 text-center bg-orange-500 text-white rounded-xl py-3">

    Login

</a>

`
        }

    </div>

</div>


    </nav>

</header>
`;

const loginBtn = document.getElementById("login-btn");

if (loginBtn) {

    loginBtn.addEventListener("click", () => {

        window.location.href = "login.html";

    });

}

// Logout functionality
const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        const confirmLogout = confirm("Are you sure you want to logout?");

        if (!confirmLogout) {
            return;
        }

        // Clear Login Details
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userName");
        localStorage.removeItem("userAddress");

        // Clear Cart
        localStorage.removeItem("cart");
        const cartCount = document.getElementById("cart-count");

        if (cartCount) {

            cartCount.innerText = "0";

        }
        alert("Logged out successfully.");

        window.location.href = "index.html";

    });

}

const mobileLogout = document.getElementById("mobile-logout-btn");

if (mobileLogout) {

    mobileLogout.addEventListener("click", () => {

        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userName");
        localStorage.removeItem("userAddress");
        localStorage.removeItem("cart");

        window.location.href = "index.html";

    });

}

updateCartCount();


// Mobile Menu Toggle
const mobileBtn = document.getElementById("mobile-menu-btn");

const mobileMenu = document.getElementById("mobile-menu");

if (mobileBtn) {

    mobileBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

    });

}

