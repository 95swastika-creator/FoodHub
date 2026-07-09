import "../css/input.css";
import "../css/components.css";
import "../css/checkout.css";
import images from "./utils/images";
import qrCode from "../assets/images/qr-code.png";
import "./components/footer";
const userName = localStorage.getItem("userName") || "";
const userMobile = localStorage.getItem("userMobile") || "";
const userAddress = localStorage.getItem("userAddress") || "";
const checkoutPage=document.querySelector("#checkout-page");

checkoutPage.innerHTML=`

<section class="min-h-screen bg-orange-50 py-10">

<div class="max-w-7xl mx-auto px-6 lg:px-12">

<div class="flex items-center justify-between mb-10">

<a
href="cart.html"
class="flex items-center gap-2 text-orange-500 hover:text-orange-600">

<!-- Arrow -->

<svg xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="2"
stroke="currentColor"
class="w-5 h-5">

<path stroke-linecap="round"
stroke-linejoin="round"
d="M15.75 19.5L8.25 12l7.5-7.5"/>

</svg>

Back to Cart

</a>

<h1 class="text-4xl font-bold">

Checkout

</h1>

</div>

<div class="grid lg:grid-cols-3 gap-8">

<!-- Left -->

<!-- Left Panel -->

<div class="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

    <!-- Delivery -->

    <div class="flex items-center gap-3">

        <!-- User Icon -->

        <svg xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             stroke-width="2"
             stroke="currentColor"
             class="w-7 h-7 text-orange-500">

            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0115 0"/>

        </svg>

        <h2 class="text-3xl font-bold">

            Delivery Details

        </h2>

    </div>

    <div class="mt-8 space-y-6">

        <div>

            <label class="font-semibold">

                Full Name

            </label>

            <input

                id="customer-name"

                value="${userName}"

                class="mt-2 w-full rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400"

                placeholder="Enter Name">

        </div>

        <div>

            <label class="font-semibold">

                Mobile Number

            </label>

            <input

                id="customer-phone"

                maxlength="10"
                
                value="${userMobile}"

                class="mt-2 w-full rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400"

                placeholder="9876543210">

        </div>

        <div>

            <label class="font-semibold">

                Delivery Address

            </label>

            <textarea

                id="customer-address"

                rows="4"

                class="mt-2 w-full rounded-xl border border-gray-300 px-5 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400">${userAddress}</textarea>

        </div>

    </div>

    <hr class="my-10">

<div class="flex items-center gap-3">

    <!-- Card Icon -->

    <svg xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke-width="2"
         stroke="currentColor"
         class="w-7 h-7 text-orange-500">

        <path stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 8.25h19.5M3.75 5.25h16.5A1.5 1.5 0 0121.75 6.75v10.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V6.75a1.5 1.5 0 011.5-1.5z"/>

    </svg>

    <h2 class="text-3xl font-bold">

        Payment Method

    </h2>

</div>

<div class="mt-8 space-y-4">

<label class="payment-card opacity-50 cursor-not-allowed">

    <input
        type="radio"
        disabled>

    <div class="flex-1">

        <h3 class="font-bold">
            Cash on Delivery
        </h3>

        <p class="text-gray-500 text-sm">
            Coming Soon
        </p>

    </div>

    <span class="text-xs bg-gray-200 px-3 py-1 rounded-full">
        Disabled
    </span>

</label>
    <label class="payment-card">

    <input
        type="radio"
        checked
        name="payment"
        value="upi">

    <div>

        <h3 class="font-bold">

            UPI Payment

        </h3>

        <p class="text-gray-500 text-sm">

            Google Pay  PhonePe • Paytm

        </p>

    </div>

</label>
      <label class="payment-card opacity-50 cursor-not-allowed">

    <input
        type="radio"
        name="payment"
            value="card"
        disabled>

    <div class="flex-1">

        <h3 class="font-bold">
             Debit / Credit Card
        </h3>

        <p class="text-gray-500 text-sm">
            Coming Soon
        </p>

    </div>

    <span class="text-xs bg-gray-200 px-3 py-1 rounded-full">
        Disabled
    </span>

</label>
   

</div>
<div id="payment-content" class="mt-8"></div>

<div class="mt-8 bg-orange-50 rounded-xl p-4 flex items-center gap-3">

    <svg xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke-width="2"
         stroke="currentColor"
         class="w-5 h-5 text-orange-500">

        <path stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-1.5 0h12a1.5 1.5 0 011.5 1.5v6A1.5 1.5 0 0118 19.5H6a1.5 1.5 0 01-1.5-1.5v-6A1.5 1.5 0 016 10.5z"/>

    </svg>

    <span class="text-orange-600 font-medium">

        Your payment information is secure with us.

    </span>

</div>
<div
class="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-3">

    <!-- Info SVG -->

    <svg xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke-width="2"
         stroke="currentColor"
         class="w-6 h-6 text-blue-600">

        <path stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 9h1.5V7.5h-1.5V9zm0 7.5h1.5V10.5h-1.5V16.5z"/>

        <path stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9 9 0 100-18 9 9 0 000 18z"/>

    </svg>

    <p class="text-blue-700">

        You will be able to scan the QR code after clicking
        <strong>"Place Order"</strong>.

    </p>

</div>
</div>


<!-- Right -->

<div
id="checkout-summary"
class="bg-white rounded-3xl shadow-lg p-8 h-fit sticky top-28">

</div>

</div>

</div>

</section>

<!-- Payment Modal -->

<div
id="payment-modal"
class="fixed inset-0 bg-black/60 hidden items-center justify-center z-50">

<div class="bg-white rounded-3xl shadow-2xl w-[420px] max-w-[90%] overflow-hidden">

    <div class="bg-orange-500 text-white p-6 text-center">

        <h2 class="text-3xl font-bold">

            Scan & Pay

        </h2>

        <p class="mt-2">

            Complete your payment using any UPI App

        </p>

    </div>

    <div class="p-8 text-center">

        <img
    src="${qrCode}"
    alt="UPI QR Code"
    class="w-64 mx-auto">

        <h3 class="text-2xl font-bold mt-6">

            ₹<span id="payment-amount">0</span>

        </h3>

        <p class="text-gray-500 mt-2">

            UPI ID

        </p>

        <p class="font-semibold">

            foodhub@upi

        </p>

        <button
            id="paid-btn"
            class="w-full mt-8 bg-green-500 hover:bg-green-600 text-white py-4 rounded-full">

            I've Paid

        </button>

        <button
            id="close-payment"
            class="w-full mt-4 border border-gray-300 py-4 rounded-full">

            Cancel

        </button>

    </div>

</div>

</div>

`;



const cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderSummary() {

    const summary = document.getElementById("checkout-summary");

    let subtotal = 0;

    let itemsHTML = "";

    cart.forEach(item => {

        subtotal += item.price * item.quantity;

        itemsHTML += `

        <div class="flex gap-4 py-4 border-b">

            <img
                src="${images[item.image]}"
                class="w-16 h-16 rounded-xl object-cover bg-orange-50">

            <div class="flex-1">

                <h3 class="font-semibold">

                    ${item.name}

                </h3>

                <p class="text-sm text-gray-500">

                    Qty : ${item.quantity}

                </p>

            </div>

            <div class="font-bold">

                ₹${item.price * item.quantity}

            </div>

        </div>

        `;

    });

    const gst = Math.round(subtotal * 0.05);
    const savings = Math.round(subtotal * 0.10);

    const total = subtotal + gst;
    window.orderTotal = total;

    summary.innerHTML = `

    <h2 class="text-3xl font-bold">

        Order Summary

    </h2>

    <div class="mt-8">

        ${itemsHTML}

    </div>

    <div class="space-y-4 mt-8">

        <div class="flex justify-between">

            <span>Subtotal</span>

            <span>₹${subtotal}</span>

        </div>

        <div class="flex justify-between">

            <span>Delivery</span>

            <span class="text-green-600 font-semibold">

                FREE

            </span>

        </div>

        <div class="flex justify-between">

            <span>GST (5%)</span>

            <span>₹${gst}</span>

        </div>

        <hr>

        <div class="flex justify-between text-xl font-bold">

            <span>Grand Total</span>

            <span>₹${total}</span>

        </div>

    </div>

    <div class="mt-6 bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3">

    <svg xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke-width="2"
         stroke="currentColor"
         class="w-6 h-6 text-green-600">

        <path stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m-6-9h12M4.5 9h15v9.75A2.25 2.25 0 0117.25 21h-10.5A2.25 2.25 0 014.5 18.75V9zm1.5-3h12v3H6V6zm3-1.5a1.5 1.5 0 113 0V6H9V4.5zm3 0a1.5 1.5 0 113 0V6h-3V4.5z"/>

    </svg>

    <div>

        <p class="font-semibold text-green-700">

            You saved ₹${savings} on this order!

        </p>

        <p class="text-sm text-green-600">

            Thanks for ordering with FoodHub.

        </p>

    </div>

</div>

    <button
        id="place-order-btn"
        class="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-semibold text-lg transition">

        Place Order

    </button>

    `;

  
    document.getElementById("place-order-btn").addEventListener("click", () => {

        openPaymentModal();

    });

}
renderSummary();
const paymentModal = document.getElementById("payment-modal");
function openPaymentModal() {

    paymentModal.classList.remove("hidden");

    paymentModal.classList.add("flex");
    document.getElementById("payment-amount").innerText =
        window.orderTotal;

}
//close payment modal
document
.getElementById("close-payment")
.addEventListener("click", () => {

    paymentModal.classList.add("hidden");

    paymentModal.classList.remove("flex");
    

});

function paymentSuccess() {

    paymentModal.innerHTML = `

    <div class="bg-white rounded-3xl p-10 text-center w-[420px]">

        <div class="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center">

            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke-width="2"
                 stroke="currentColor"
                 class="w-14 h-14 text-green-600">

                <path stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"/>

            </svg>

        </div>

        <h2 class="text-3xl font-bold mt-6">

            Payment Successful!

        </h2>

        <p class="mt-3 text-gray-500">

            Your order has been placed successfully.

        </p>

        <button
            id="continue-btn"
            class="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full">

            Continue Shopping

        </button>

    </div>

    `;

    localStorage.removeItem("cart");

    document
    .getElementById("continue-btn")
    .addEventListener("click", () => {

        window.location.href = "index.html";

    });

}

document
.getElementById("paid-btn")
.addEventListener("click", () => {

    const btn =
        document.getElementById("paid-btn");

    btn.disabled = true;

    btn.innerText = "Verifying Payment...";

    setTimeout(() => {

        paymentSuccess();

    },1500);

});