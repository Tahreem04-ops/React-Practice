
# Stripe Payment Integration (Node.js + Express)

A simple Node.js and Express application that integrates **Stripe Checkout** to create secure online payment sessions. The API generates a Stripe Checkout Session and returns a payment URL that redirects users to Stripe's hosted payment page.

---

## 🚀 Features

- Stripe Checkout Integration
- Express REST API
- Create Payment Checkout Session
- Secure Environment Variables using dotenv
- CORS Enabled
- JSON Response with Checkout URL
- Stripe Test Mode Support

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- Stripe API
- dotenv
- CORS

---

## 📁 Project Structure

```
payment/
│── images/
│   ├── postman-response.png
│   └── stripe-checkout.png
│
│── routes/
│   └── payment.js
│
│── .env
│── .gitignore
│── package.json
│── package-lock.json
│── server.js
│── README.md
```

---

## 📦 Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project folder

```bash
cd payment
```

Install dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000
STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

## ▶️ Run the Project

Start the server

```bash
node server.js
```

or

```bash
npm run dev
```

Server Output

```text
✅ Server running on port 5000
```

---

## 📮 API Endpoint

### Create Stripe Checkout Session

**POST**

```
http://localhost:5000/create-payment
```

### Successful Response

```json
{
  "id": "cs_test_xxxxxxxxx",
  "url": "https://checkout.stripe.com/..."
}
```

---

## 💳 Stripe Test Card

| Field | Value |
|-------|-------|
| Card Number | 4242 4242 4242 4242 |
| Expiry | 12/34 |
| CVC | 123 |
| Postal Code | 12345 |

---

# 📷 Screenshots

## 1. API Response 

<img width="1069" height="718" alt="image" src="https://github.com/user-attachments/assets/e85ef9dc-b883-44ae-bd83-3ad2bbd5c7b5" />


---

## 2. Stripe Checkout Page
<img width="1364" height="720" alt="image" src="https://github.com/user-attachments/assets/6116e116-484f-4169-b610-1304c2283287" />


---

## 📂 Images Folder

```
images/
├── postman-response.png
└── stripe-checkout.png
```

---

## 📚 Learning Outcomes

- Learned Stripe Checkout Integration
- Created a Checkout Session using Stripe API
- Used Express.js Routes
- Managed Secret Keys using dotenv
- Tested API using Postman
- Completed a Stripe Payment Flow in Test Mode

---

## 👩‍💻 Author

**Tahreem Asif**

GitHub: https://github.com/Tahreem04-ops
````
