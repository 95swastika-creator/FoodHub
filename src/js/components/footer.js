const footer = document.querySelector("#footer");

const year = new Date().getFullYear();

footer.innerHTML = `

<footer class="bg-slate-900 text-white">

    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        <div class="grid md:grid-cols-3 gap-12">

            <!-- Logo -->

            <div>

                <img
                    src="footer-logo.png"
                    alt="FoodHub Logo"
                    class="h-16 mb-5">

                <p class="text-gray-400 leading-7">

                    FoodHub delivers freshly prepared meals made with premium
                    ingredients. Enjoy delicious food delivered fast to your
                    doorstep.

                </p>

            </div>

            <!-- Navigation -->

            <div>

                <h3 class="text-xl font-bold mb-6">

                    Quick Links

                </h3>

                <ul class="space-y-4">

                    <li>

                        <a href="index.html"
                           class="hover:text-orange-400 transition">

                            Home

                        </a>

                    </li>

                    <li>

                        <a href="menu.html"
                           class="hover:text-orange-400 transition">

                            Menu

                        </a>

                    </li>

                    <li>

                        <a href="contact.html"
                           class="hover:text-orange-400 transition">

                            Contact

                        </a>

                    </li>

                    <li>

                        <a href="cart.html"
                           class="hover:text-orange-400 transition">

                            Cart

                        </a>

                    </li>

                </ul>

            </div>

            <!-- Contact -->

            <div>

                <h3 class="text-xl font-bold mb-6">

                    Contact Us
                </h3>

                <div class="space-y-4 text-gray-400">

                    <p>

                        Hyderabad, Telangana

                    </p>

                    <p>

                        support@foodhub.com

                    </p>

                    <p>

                        +91 9xxxx5 4XXXX

                    </p>

                </div>

            </div>

        </div>

        <hr class="border-slate-700 my-10">

        <div class="text-center text-gray-400">

            &copy; ${year} FoodHub. All Rights Reserved.

        </div>

    </div>

</footer>

`;