import "../css/input.css";
import "../css/components.css";
import "../css/login.css";

import loginBanner from "../assets/images/login-banner.jpg";

const loginPage = document.querySelector("#login-page");

loginPage.innerHTML = `

<section class="min-h-screen flex items-center justify-center bg-orange-50">

<div class="max-w-6xl m-8 bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

    <!-- Left -->

    <div class="p-12">
     <div class="flex items-center justify-between">
      <a href="index.html" class="flex items-center">

                <img
                    src="${require("../assets/images/logo.png")}"
                    alt="FoodHub Logo"
                    class="h-16 w-auto">

            </a>
            </div>

            <div class="mt-10">

        <p class="text-orange-500 font-semibold text-lg">

            Login

        </p>

        <h2 class="text-4xl font-bold mt-6">

            Welcome Back!

        </h2>

        <p class="text-gray-500 mt-3">

            Login to continue ordering your favourite food.

        </p>

        <form id="login-form" class="mt-10 space-y-5">

            <input
                id="name"
                type="text"
                placeholder="Enter your name"
                class="w-full border rounded-lg px-4 py-3">

                <input
    id="mobile"
    type="tel"
    maxlength="10"
    placeholder="Mobile Number"
    class="w-full border rounded-lg px-4 py-3">

            <input
                id="email"
                type="email"
                placeholder="Email"
                class="w-full border rounded-lg px-4 py-3">

            <input
                id="password"
                type="password"
                placeholder="Password"
                class="w-full border rounded-lg px-4 py-3">

                <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">

    <p class="text-orange-600 font-semibold mb-2">
        Demo Login Credentials
    </p>

    <p class="text-gray-700">
        <span class="font-semibold">Email :</span>
        admin@gmail.com
    </p>

    <p class="text-gray-700 mt-1">
        <span class="font-semibold">Password :</span>
        admin@123
    </p>

</div>

            <div class="flex gap-3">

                <button
                    type="submit"
                    class="px-6 py-3 bg-orange-500 text-white rounded-lg">

                    Login

                </button>

                <button
                    type="reset"
                    class="px-6 py-3 border rounded-lg">

                    Reset

                </button>

                </div>

            </div>

        </form>

    </div>

    <!-- Right -->

    <div class="relative hidden md:block">

        <img
            src="${loginBanner}"
            class="w-full h-full object-cover">

        <div class="absolute inset-0 flex items-end p-10">

            <div class="text-white">

                <h3 class="text-3xl font-bold">

                    Delicious Food Delivered Fast

                </h3>

                <p class="mt-3">

                    Fresh • Fast • Delicious

                </p>

            </div>

        </div>

    </div>

</div>

</section>

`;


const form = document.querySelector("#login-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Name validation
    if (name === "") {

        alert("Please enter your name.");

        return;

    }

    //Phone number validation
    if (!/^[6-9]\d{9}$/.test(mobile)) {

    alert("Please enter a valid 10-digit mobile number.");

    return;

}
    

    // Email validation
    if (email !== "admin@gmail.com") {

        alert("Invalid Email.");

        return;

    }

    // Password validation
    if (password !== "admin@123") {

        alert("Invalid Password.");

        return;

    }

    // Address
    const address = prompt("Enter your delivery address");

    if (!address || address.trim() === "") {

        alert("Delivery address is required.");

        return;

    }

    // Save user details
    localStorage.setItem("userName", name);
    localStorage.setItem("userMobile", mobile);
    localStorage.setItem("userAddress", address.trim());
    localStorage.setItem("isLoggedIn", "true");

    alert("Login Successful!");

    window.location.href = "index.html";

});