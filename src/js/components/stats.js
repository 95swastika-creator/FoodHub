import {
usersIcon,
restaurantIcon,
truckIcon,
starIcon
} from "./icon";

const stats=document.querySelector("#stats");

stats.innerHTML=`

<section class="py-24 bg-orange-50">

<div class="max-w-7xl mx-auto px-6">

<div class="text-center">

<p class="text-orange-500 uppercase font-semibold">

Trusted by Food Lovers

</p>

<h2 class="text-4xl font-bold mt-3">

Serving Happiness Every Day

</h2>

</div>

<div class="grid md:grid-cols-4 gap-10 mt-16">

<div class="text-center">

<div class="flex justify-center">

${usersIcon}

</div>

<h3 class="text-5xl font-bold mt-5">

12K+

</h3>

<p class="text-gray-500 mt-2">

Happy Customers

</p>

</div>

<div class="text-center">

<div class="flex justify-center">

${restaurantIcon}

</div>

<h3 class="text-5xl font-bold mt-5">

500+

</h3>

<p class="text-gray-500 mt-2">

Restaurants

</p>

</div>

<div class="text-center">

<div class="flex justify-center">

${truckIcon}

</div>

<h3 class="text-5xl font-bold mt-5">

30 Min

</h3>

<p class="text-gray-500 mt-2">

Fast Delivery

</p>

</div>

<div class="text-center">

<div class="flex justify-center">

${starIcon}

</div>

<h3 class="text-5xl font-bold mt-5">

4.9★

</h3>

<p class="text-gray-500 mt-2">

Average Rating

</p>

</div>

</div>

</div>

</section>

`;