import "../css/input.css";
import "../css/components.css";

import "./components/navbar";
import "./components/footer";

import contactBanner from "../assets/images/menu-banner.png";
import "./contact";
const contactPage = document.querySelector("#contact-page");
contactPage.innerHTML = `

<!-- Banner -->

<section class="relative mt-20">

    <img
        src="${contactBanner}"
        class="w-full h-[350px] object-cover">

    <!-- Overlay -->

    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Banner Text -->

    <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

        <p class="uppercase tracking-[5px] text-orange-400 font-semibold">

            CONTACT US

        </p>

        <h1 class="text-5xl md:text-6xl font-bold text-white mt-4">

            We'd Love To Hear From You

        </h1>

        <p class="text-gray-200 mt-5 max-w-2xl text-lg">

            Have questions, feedback or need assistance?
            Our team is always happy to help.

        </p>

    </div>

</section>

<!-- Contact Section -->

<section class="py-24 bg-orange-50">

<div class="max-w-7xl mx-auto px-6 lg:px-12">

<div class="grid lg:grid-cols-2 gap-12">

<!-- Contact Form -->

<div class="bg-white rounded-3xl shadow-lg p-10">

<h2 class="text-3xl font-bold mb-8">

Send us a Message

</h2>

<form
id="contactForm"
class="space-y-6">

<input
id="name"
type="text"
placeholder="Full Name"
class="w-full border rounded-xl p-4 outline-none focus:border-orange-500">

<p id="name-error" class="text-red-500 text-sm mt-1"></p>

<input
id="email"
type="email"
placeholder="Email Address"
class="w-full border rounded-xl p-4 outline-none focus:border-orange-500">

<p id="email-error" class="text-red-500 text-sm mt-1"></p>

<input
id="subject"
type="text"
placeholder="Subject"
class="w-full border rounded-xl p-4 outline-none focus:border-orange-500">

<p id="subject-error" class="text-red-500 text-sm mt-1"></p>

<textarea
id="message"
rows="6"
placeholder="Write your message..."
class="w-full border rounded-xl p-4 outline-none focus:border-orange-500"></textarea>

<p id="message-error" class="text-red-500 text-sm mt-1"></p>

<button type="submit" class="btn-primary w-full">

Send Message

</button>

<div id="success-toast" class="fixed top-24 right-6 bg-green-500 text-white px-6 py-4 rounded-xl shadow-xl hidden z-50">

Message Sent Successfully!

</div>

</form>

</div>

<!-- Contact Details -->

<div class="bg-white rounded-3xl shadow-lg p-10">

<h2 class="text-3xl font-bold mb-10">

Contact Information

</h2>

<div class="space-y-8">

<!-- Address -->

<div class="flex items-center gap-5">

<div class="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">

<svg xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     stroke-width="2"
     stroke="currentColor"
     class="w-7 h-7 text-orange-500">

    <path stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z"/>

    <circle cx="12"
            cy="10"
            r="2.5"/>

</svg>

</div>

<div>

<h3 class="font-semibold text-lg">

Address

</h3>

<p class="text-gray-500">

Hyderabad, Telangana, India

</p>

</div>

</div>

<!-- Email -->

<div class="flex items-center gap-5">

<div class="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">

<svg xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     stroke-width="2"
     stroke="currentColor"
     class="w-7 h-7 text-orange-500">

    <path stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15A2.25 2.25 0 012.25 17.25V6.75A2.25 2.25 0 014.5 4.5h15A2.25 2.25 0 0121.75 6.75z"/>

    <path stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 7.5l9 6 9-6"/>

</svg>

</div>

<div>

<h3 class="font-semibold text-lg">

Email

</h3>

<p class="text-gray-500">

support@foodhub.com

</p>

</div>

</div>

<!-- Phone -->

<div class="flex items-center gap-5">

<div class="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">

<svg xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     stroke-width="2"
     stroke="currentColor"
     class="w-7 h-7 text-orange-500">

    <path stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 4.5A2.25 2.25 0 014.5 2.25h3a1.5 1.5 0 011.5 1.28l.45 3.15a1.5 1.5 0 01-.43 1.3l-1.2 1.2a16.5 16.5 0 007.2 7.2l1.2-1.2a1.5 1.5 0 011.3-.43l3.15.45a1.5 1.5 0 011.28 1.5v3A2.25 2.25 0 0119.5 21.75h-.75C9.78 21.75 2.25 14.22 2.25 5.25V4.5z"/>

</svg>

</div>

<div>

<h3 class="font-semibold text-lg">

Phone

</h3>

<p class="text-gray-500">

+91 98765 43210

</p>

</div>

</div>

<!-- Hours -->

<div class="flex items-center gap-5">

<div class="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">

<svg xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     stroke-width="2"
     stroke="currentColor"
     class="w-7 h-7 text-orange-500">

    <path stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6v6l4 2"/>

    <circle cx="12"
            cy="12"
            r="9"/>

</svg>

</div>

<div>

<h3 class="font-semibold text-lg">

Working Hours

</h3>

<p class="text-gray-500">

Mon - Sun : 9:00 AM - 11:00 PM

</p>

</div>

</div>

</div>

</div>

</div>

</div>

</section>

<!-- Google Map -->

<section class="pb-24 bg-white">

<div class="max-w-7xl mx-auto px-6 lg:px-12">

<iframe

src="https://www.google.com/maps?q=Hyderabad&output=embed"

class="w-full h-[420px] rounded-3xl shadow-lg"

loading="lazy">

</iframe>

</div>

</section>


`;

// Contact Form Validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    // Clear previous errors
    document.getElementById("name-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("subject-error").innerText = "";
    document.getElementById("message-error").innerText = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    // Name
    if (name === "") {

        document.getElementById("name-error").innerText =
            "Please enter your name.";

        isValid = false;

    }

    // Email
if (email === "") {

    document.getElementById("email-error").innerText =
        "Please enter your email.";

    isValid = false;

} else {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        document.getElementById("email-error").innerText =
            "Please enter a valid email address.";

        isValid = false;

    }

}

    // Subject
    if (subject === "") {

        document.getElementById("subject-error").innerText =
            "Please enter the subject.";

        isValid = false;

    }

    // Message
    if (message === "") {

        document.getElementById("message-error").innerText =
            "Please enter your message.";

        isValid = false;

    }

    if (!isValid) {

        return;

    }

    // Success Toast
const modal = document.getElementById("success-modal");

// Show Modal
modal.classList.remove("hidden");

modal.classList.add("flex");

// Fade In
setTimeout(() => {

    modal.classList.remove("opacity-0");

    modal.classList.add("opacity-100");

}, 10);

// Hide after 3 seconds
setTimeout(() => {

    modal.classList.remove("opacity-100");

    modal.classList.add("opacity-0");

    setTimeout(() => {

        modal.classList.remove("flex");

        modal.classList.add("hidden");

    }, 500);

}, 3000);


form.reset();

});
document.getElementById("email").addEventListener("input", () => {

    const email = document.getElementById("email").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {

        document.getElementById("email-error").innerText = "";

    }

});

// Remove errors while typing

["name", "email", "subject", "message"].forEach((id) => {

    document.getElementById(id).addEventListener("input", () => {

        document.getElementById(`${id}-error`).innerText = "";

    });

});
