import {badgeIcon, starIcon, truckIcon } from "./icon";
const hero = document.querySelector("#hero");

hero.innerHTML = `
<section class="bg-orange-50 pt-24">

    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">

        <div class="grid lg:grid-cols-2 gap-16 items-center">

            <!-- Left Content -->

            <div>

                <!-- Premium Badge -->

                <div class="inline-flex items-center gap-3 bg-white shadow-md rounded-full px-5 py-2">
                    ${badgeIcon}
                    <span class="font-semibold text-gray-700">

                        Trusted by the Number of Food Lovers :

                    </span>

                            <div
                        class="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-orange-200 rounded-full bg-orange-50 text-orange-600">
                    
                        <!-- Eye Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke-width="2"
                             stroke="currentColor"
                             class="w-4 h-4">
                    
                            <path stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M2.25 12S5.25 5.25 12 5.25 21.75 12 21.75 12 18.75 18.75 12 18.75 2.25 12 2.25 12z"/>
                    
                            <circle cx="12" cy="12" r="3"/>
                    
                        </svg>
                    
                        <span id="visitor-count">1 </span> Site Visitors
                    
                    </div>

                </div>

                <h1 class="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">

                    Delicious Food

                    <span class="block text-orange-500">

                        Delivered To Your Door

                    </span>

                </h1>

                <p class="mt-6 text-lg leading-8 text-gray-600 max-w-xl">

                    Discover delicious meals from your favourite restaurants.
                    Fresh ingredients, lightning-fast delivery and unforgettable taste —
                    all just one click away.

                </p>

                <div class="mt-10 flex flex-wrap gap-5">

                    <button class="btn-primary" onclick="window.location.href='menu.html'">

                        Order Now

                    </button>

                    <button
                        class="rounded-full border-2 border-orange-500 px-7 py-3 font-semibold text-orange-500 transition duration-300 hover:bg-orange-500 hover:text-white"
                        onclick="window.location.href='menu.html'">

                        Explore Menu

                    </button>

                    

                </div>

                

            </div>

            <!-- Right Side -->

            <div class="relative">

                <!-- Main Food Image -->

                <img
                    src="hero-section.png"
                    alt="Food"
                    class="w-full">

                <!-- Rating Card -->

                <div
    class="absolute top-8 -left-12 hidden lg:flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-2xl animate-float">

    <div
        class="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">

       ${starIcon}
    </div>

    <div>

        <h3 class="font-bold text-gray-800">
            4.9 Rating
        </h3>

        <p class="text-sm text-gray-500">
            5K+ Reviews
        </p>

    </div>

</div>

                <!-- Delivery Card -->
              <div
    class="absolute bottom-8 -right-8 hidden lg:flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-2xl animate-float">

    <div
        class="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">

        ${truckIcon}

    </div>

    <div>

        <h3 class="font-bold text-gray-800">
            Fast Delivery
        </h3>

        <p class="text-sm text-gray-500">
            30 Minutes
        </p>

    </div>

</div>

            </div>

        </div>

    </div>

</section>
`;