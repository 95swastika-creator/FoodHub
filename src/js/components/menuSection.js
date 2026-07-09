import pizza from "../../assets/images/dishes/farmhouse.png";
import burger from "../../assets/images/dishes/veg-burger.png";
import biryani from "../../assets/images/dishes/chicken-biryani.png";
import pasta from "../../assets/images/dishes/white-sause-pasta.png";

const menuSection = document.querySelector("#menu-section");

menuSection.innerHTML = `

<section class="py-24 bg-white">

<div class="max-w-7xl mx-auto px-6 lg:px-12">

    <!-- Heading -->

    <div class="text-center mb-14">

        <p class="text-orange-500 font-semibold tracking-widest">

            OUR MENU

        </p>

        <h2 class="text-5xl font-bold mt-3">

            Popular Categories

        </h2>

        <p class="text-gray-500 mt-4">

            Choose your favourite food and explore delicious dishes.

        </p>

    </div>

    <div class="grid lg:grid-cols-4 gap-10">

        <!-- Sidebar -->

        <div
        id="category-sidebar"
        class="space-y-5">

        </div>

        <!-- Right -->

        <div
        class="lg:col-span-3">

            <div
            id="selected-category-title"
            class="mb-10">

            </div>

            <div
            id="dishes-container"
            class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            </div>

        </div>

    </div>

</div>

</section>

`;

export const categories = [

{
name:"Pizza",
image:pizza,
description:"Fresh Italian Pizza"
},

{
name:"Burger",
image:burger,
description:"Juicy Burgers"
},

{
name:"Biryani",
image:biryani,
description:"Hyderabadi Special"
},

{
name:"Pasta",
image:pasta,
description:"Creamy Pasta"
}

];