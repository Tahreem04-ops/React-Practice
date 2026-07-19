# 📸 Day 16 - Profile Picture Upload API

A simple Express.js application that uploads profile pictures to **Supabase Storage** using **Multer**. The application includes a basic frontend where users can select an image, upload it, and view the uploaded image using its public URL.

---

## 🚀 Features

- Upload profile pictures
- Store images in Supabase Storage
- Generate public image URLs
- Express.js REST API
- Multer file upload middleware
- Simple HTML, CSS, and JavaScript frontend
- Environment variables using dotenv

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- Supabase Storage
- Multer
- dotenv
- HTML
- CSS
- JavaScript

---

## 📁 Project Structure

```
profile-upload/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── routes/
│   └── upload.js
│
├── server.js
├── supabase.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Go to the project folder

```bash
cd profile-upload
```

### Install dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file and add:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
PORT=3000
```

---

## 🗂️ Supabase Setup

1. Create a Supabase project.
2. Open **Storage**.
3. Create a bucket named:

```
profile-images
```

4. Set the bucket to **Public**.

---

## ▶️ Run the Project

```bash
npm run dev
```

Server will start at:

```
http://localhost:3000
```

---

## 🌐 Frontend

Open your browser and visit:

```
http://localhost:3000
```

1. Select an image.
2. Click **Upload Image**.
3. The image will be uploaded to Supabase Storage.
4. The uploaded image will be displayed on the page.

---

## 📡 API Endpoint

### Upload Profile Picture

**POST**

```
/api/upload
```

### Request

**Body:** Form Data

| Key | Type |
|------|------|
| image | File |

---

## ✅ Success Response

```json
{
  "success": true,
  "message": "Image Uploaded Successfully",
  "imageUrl": "https://your-project.supabase.co/storage/v1/object/public/profile-images/example.png"
}
```

---

## ❌ Error Response

```json
{
  "success": false,
  "message": "No image selected"
}
```

---

## 📚 Learning Outcomes

- Building file upload APIs with Express.js
- Using Multer middleware
- Uploading files to Supabase Storage
- Generating public URLs for uploaded images
- Handling file uploads with Fetch API
- Using environment variables securely

---

## 👩‍💻 Author

**Tahreem Asif**