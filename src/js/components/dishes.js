import chickenBiryaniImg from "../../assets/images/dishes/chicken-biryani.png";

const dishes = document.querySelector("#dishes");

dishes.innerHTML = `
<section class="py-24 bg-white">

    <div class="max-w-7xl mx-auto px-6 lg:px-12">

        <!-- Heading -->

        <div class="text-center">

            <p class="text-orange-500 uppercase tracking-wider font-semibold">
                Popular Dishes
            </p>

            <h2 class="mt-3 text-5xl font-bold text-slate-900">
                Most Ordered This Week
            </h2>

            <p class="mt-5 text-gray-500 max-w-2xl mx-auto">
                Choose from our customers' favourite dishes, freshly prepared
                and delivered hot to your doorstep.
            </p>

        </div>


        <!-- Filter Buttons -->

        <div class="flex flex-wrap justify-center gap-4 mt-12">

    <button id="all-btn"
        class="filter-btn px-6 py-2 rounded-full bg-orange-500 text-white font-medium">
        All
    </button>

    <button id="pizza-btn"
        class="filter-btn px-6 py-2 rounded-full border border-orange-300 hover:bg-orange-500 hover:text-white transition">
        Pizza
    </button>

    <button id="burger-btn"
        class="filter-btn px-6 py-2 rounded-full border border-orange-300 hover:bg-orange-500 hover:text-white transition">
        Burger
    </button>

    <button id="biryani-btn"
        class="filter-btn px-6 py-2 rounded-full border border-orange-300 hover:bg-orange-500 hover:text-white transition">
        Biryani
    </button>

    <button id="pasta-btn"
        class="filter-btn px-6 py-2 rounded-full border border-orange-300 hover:bg-orange-500 hover:text-white transition">
        Pasta
    </button>

</div>
        
       <!-- Dishes Container -->
         <div id="dishes-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

        </div>
        <div class="text-center mt-16">

           <button id="view-more-btn" class="px-10 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
           
               View Full Menu &#10132;

            </button>

</div>

      
    </div>

</section>


<section id="full-menu" class="hidden py-24 bg-gray-50">

    <div class="max-w-7xl mx-auto px-6">

        <div class="text-center">

            <p class="text-orange-500 uppercase tracking-wider font-semibold">
                Full Menu
            </p>

            <h2 class="text-5xl font-bold mt-3">
                Explore Our Complete Menu
            </h2>

            <p class="text-gray-500 mt-4">
                Freshly prepared meals for every craving.
            </p>

        </div>

        <div
            id="menu-container"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

        </div>

    </div>

</section>
`;

