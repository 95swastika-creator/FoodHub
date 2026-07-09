import images from "../utils/images";


import {
    getCartQuantity
} from "../cart";

import {
    isFavorite
} from "../favorites";
//Create Card:

export function createCard(food) {

    return `
    
    <div class="group bg-white rounded-[28px] border border-orange-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 overflow-hidden">
  
        <div class="relative h-72 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">

        <button
class="favorite-btn absolute top-5 right-5 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 z-10"
data-id="${food.id}">

${isFavorite(food.id)

?

`<svg xmlns="http://www.w3.org/2000/svg"
fill="currentColor"
viewBox="0 0 24 24"
class="w-6 h-6 text-red-500">

<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 016.5 4c1.74 0 3.41.81 4.5 2.09A6.07 6.07 0 0115.5 4 4.5 4.5 0 0120 8.5c0 3.78-3.4 6.86-8.55 11.54z"/>

</svg>`

:

`<svg xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="2"
stroke="currentColor"
class="w-6 h-6 text-gray-500">

<path stroke-linecap="round"
stroke-linejoin="round"
d="M21.435 6.582a5.373 5.373 0 00-7.6 0L12 8.417l-1.835-1.835a5.373 5.373 0 00-7.6 7.6l1.835 1.835L12 21l7.765-4.983 1.835-1.835a5.373 5.373 0 000-7.6z"/>

</svg>`

}

</button>

            <span class="absolute top-5 left-5 bg-orange-500 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md">
                Best Seller
            </span>

            <img
                src="${images[food.image]}"
                alt="${food.name}"
                class="w-60 h-60 object-contain group-hover:scale-110 transition duration-500">

        </div>

        <div class="p-6">

            <div class="flex justify-between">

                <span class="flex items-center gap-1 text-orange-500 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     fill="currentColor"
     class="w-4 h-4 text-yellow-400">

    <path fill-rule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.094 1.636 1.545.75 2.305l-4.117 3.527 1.258 5.272c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.629 2.825c-.996.608-2.231-.289-1.96-1.425l1.258-5.272-4.117-3.527c-.886-.76-.414-2.211.75-2.305l5.404-.434 2.082-5.006z"
          clip-rule="evenodd"/>

</svg> <span> ${food.rating} </span>
                </span>

                <span class="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                    ${food.category}
                </span>

            </div>

            <h3 class="text-2xl font-bold mt-4">
                ${food.name}
            </h3>

            <p class="text-gray-500 mt-2">
                ${food.description}
            </p>

             <div class="flex justify-between items-center mt-6">

    <span class="text-3xl font-bold text-orange-500">

        ₹${food.price}

    </span>

    ${getCartQuantity(food.id) === 0 ? `

        <button
            class="add-cart-btn bg-orange-500 text-white px-5 py-3 rounded-full hover:bg-orange-600 transition"
            data-id="${food.id}">

            Add

        </button>

    ` :

    `

    <div
        class="flex items-center bg-orange-500 rounded-full overflow-hidden">

        <button
            class="minus-btn px-4 py-3 text-white"
            data-id="${food.id}">

            −

        </button>

        <span class="px-4 text-white font-semibold">

            ${getCartQuantity(food.id)}

        </span>

        <button
            class="plus-btn px-4 py-3 text-white"
            data-id="${food.id}">

            +

        </button>

    </div>

    `}

</div>

        </div>

    </div>

    `;

}
