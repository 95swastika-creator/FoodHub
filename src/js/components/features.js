import {
    truckIcon,
    starIcon,
    shieldIcon
} from "./icon";

const features = document.querySelector("#features");

features.innerHTML = `

<section class="py-24 bg-white">

<div class="max-w-7xl mx-auto px-6">

<div class="text-center">

<p class="text-orange-500 font-semibold uppercase tracking-wider">

Why Choose FoodHub

</p>

<h2 class="mt-3 text-5xl font-bold text-gray-900">

Fresh Food.
Fast Delivery.
Trusted Service.

</h2>

<p class="mt-6 text-gray-500 max-w-2xl mx-auto">

Order from your favourite restaurants with lightning-fast delivery,
secure payments and fresh ingredients every single time.

</p>

</div>

<div class="grid lg:grid-cols-3 gap-8 mt-16">

<!-- Card -->

<div
class="rounded-3xl border border-orange-100 bg-white p-10 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

<div
class="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">

${truckIcon}

</div>

<h3 class="mt-6 text-2xl font-semibold">

Fast Delivery

</h3>

<p class="mt-4 text-gray-500 leading-7">

Average delivery in under 30 minutes with live tracking.

</p>

</div>

<!-- Card -->

<div
class="rounded-3xl border border-orange-100 bg-white p-10 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

<div
class="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">

${starIcon}

</div>

<h3 class="mt-6 text-2xl font-semibold">

Top Rated Restaurants

</h3>

<p class="mt-4 text-gray-500 leading-7">

Only highly rated restaurants with fresh and delicious meals.

</p>

</div>

<!-- Card -->

<div
class="rounded-3xl border border-orange-100 bg-white p-10 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

<div
class="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">

${shieldIcon}

</div>

<h3 class="mt-6 text-2xl font-semibold">

100% Secure Payment

</h3>

<p class="mt-4 text-gray-500 leading-7">

Safe checkout using Cards, UPI and QR payment.

</p>

</div>

</div>

</div>

</section>

`;