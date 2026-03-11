# E-Commerce Backend API

😎 Link to: [Front-End](https://github.com/lavetted/Skin-Deep-Front-End) 

## Overview

This project is the backend API for a full-stack e-commerce application. The server provides authentication, product management, cart functionality, and payment processing using Stripe.

The API is built with **Node.js**, **Express**, and **MongoDB**, and supports secure user authentication with JSON Web Tokens.

---

## Features

* User authentication (Register & Login)
* Secure JWT authorization
* Product retrieval
* Shopping cart management
* Stripe checkout integration
* RESTful API structure
* MongoDB database integration

---

## Tech Stack

* Node.js
* Express.js
* MongoDB / Mongoose
* JSON Web Token (JWT)
* Stripe API
* CORS
* dotenv

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/your-repo.git
cd backend
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

4. Start the server

```bash
npm run dev
```

The server will run at:

```
http://localhost:3000
```

---

## API Routes

### Authentication

| Method | Route              | Description         |
| ------ | ------------------ | ------------------- |
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login    | Login user          |

---

### Products

| Method | Route             | Description        |
| ------ | ----------------- | ------------------ |
| GET    | /api/products     | Get all products   |
| GET    | /api/products/:id | Get single product |

---

### Cart

| Method | Route         | Description      |
| ------ | ------------- | ---------------- |
| GET    | /api/cart     | Get user's cart  |
| POST   | /api/cart     | Add item to cart |
| PUT    | /api/cart/:id | Update quantity  |
| DELETE | /api/cart/:id | Remove item      |

---

### Payments

| Method | Route                                | Description                    |
| ------ | ------------------------------------ | ------------------------------ |
| POST   | /api/payment/create-checkout-session | Create Stripe checkout session |

---

## Environment Variables

| Variable          | Description                   |
| ----------------- | ----------------------------- |
| PORT              | Server port                   |
| MONGO_URI         | MongoDB connection string     |
| JWT_SECRET        | Secret key for authentication |
| STRIPE_SECRET_KEY | Stripe payment secret key     |

---

## Deployment

This backend can be deployed using platforms such as **Render**.

Typical production setup:

* Backend API: Render Web Service
* Database: MongoDB Atlas
* Frontend: React deployed separately

---

## Project Structure

```
Backend
│
├── controllers
├── models
├── routes
├── middleware
├── server.js
└── package.json
```

---

## Future Improvements

* Admin product management
* Order history
* Inventory management
* Email confirmations
* Improved error handling

---

## Author

Lavette D. ❤️