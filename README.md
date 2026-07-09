# FoodHub – Online Food Ordering Application

FoodHub is a responsive online food ordering application developed using HTML, Tailwind CSS, JavaScript, and Webpack. The application allows users to browse food items, manage their cart, mark favorite dishes, place orders, and contact the restaurant through a responsive interface.

## Features

- User Login
- Responsive Navigation Bar
- Browse Food Menu
- Category-wise Filtering
- Add to Cart
- Increase / Decrease Quantity
- Remove Items from Cart
- Cart Synchronisation using Local Storage
- Favourite Items
- Checkout Page
- Contact Us Page
- Form Validation
- Success Popup
- Responsive Design
- Modular JavaScript Architecture

## Technologies Used

- HTML5
- Tailwind CSS
- JavaScript (ES6 Modules)
- Webpack
- Local Storage

## Project Structure

```
FoodHub/
│
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   │       ├── dishes/
│   │       ├── hero/
│   │       ├── icons/
│   │       ├── qr/
│   │       └── testimonials/
│   │
│   ├── css/
│   │
│   ├── js/
│   │   ├── components/
│   │   ├── data/
│   │   ├── utils/
│   │   ├── ajax.js
│   │   ├── cart.js
│   │   ├── cartPage.js
│   │   ├── checkoutPage.js
│   │   ├── contact.js
│   │   ├── favorites.js
│   │   ├── hitCounter.js
│   │   ├── index.js
│   │   ├── login.js
│   │   ├── menu.js
│   │   └── menuAjax.js
│   │
│   └── pages/
│       ├── cart.html
│       ├── checkout.html
│       ├── contact.html
│       ├── index.html
│       ├── login.html
│       └── menu.html
│
├── dist/
├── package.json
├── package-lock.json
├── postcss.config.js
├── webpack.config.js
├── .gitignore
└── README.md
```

## Installation

Clone the repository

```bash
git clone https://github.com/95swastika-creator/FoodHub.git
```

Install dependencies

```bash
npm install
```

Run the application

```bash
npm start
```

Build production files

```bash
npm run build
```

## Note

The **node_modules** folder is intentionally excluded from the repository because it contains installed dependencies that can be recreated using:

```bash
npm install
```

This keeps the repository lightweight and follows standard Git best practices.
