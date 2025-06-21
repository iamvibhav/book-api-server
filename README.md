
# 📚 Book API Server

A simple Node.js + Express REST API for managing books, connected to MongoDB using Mongoose. This project supports full CRUD operations (Create, Read, Update, Delete) through custom API endpoints.

---

## 🚀 Features

- ✅ Custom-built RESTful API
- ✅ MongoDB integration via Mongoose
- ✅ CRUD operations on book data
- ✅ Clean project structure
- ✅ Environment variable support with `.env`

---

## 🧠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (local)
- **ODM**: Mongoose
- **Utilities**: dotenv, cors

---

## 🔗 API Endpoints

| Method | Endpoint             | Description             |
|--------|----------------------|-------------------------|
| GET    | `/api/books`         | Get all books           |
| POST   | `/api/books`         | Create a new book       |
| PUT    | `/api/books/:id`     | Update a book by ID     |
| DELETE | `/api/books/:id`     | Delete a book by ID     |

---

## ⚙️ Setup Instructions

### 1. Clone the repo & install dependencies
```bash
git clone https://github.com/your-username/book-api-server.git
cd book-api-server
npm install
````

### 2. Configure Environment Variables

Create a `.env` file in the root:

```env
MONGO_URI=mongodb://localhost:27017/bookdb
```

Make sure your local MongoDB server is running.

### 3. Start the server

```bash
node index.js
```

You should see:

```
MongoDB connected
Server running on port 5000
```

---

## 📬 Sample curl Requests

### Create a new book:

```bash
curl -X POST http://localhost:5000/api/books \
-H "Content-Type: application/json" \
-d '{"title":"Dune","author":"Frank Herbert","publishedYear":1965}'
```

### Get all books:

```bash
curl http://localhost:5000/api/books
```

---

## 📁 Project Structure

```
book-api-server/
├── index.js             # Main server file
├── .env                 # MongoDB connection URI
├── models/
│   └── Book.js          # Mongoose book schema
├── routes/
│   └── bookRoutes.js    # CRUD API logic
```

---

## 📝 Future Improvements

* 🔒 Add user authentication
* 🌐 Deploy with Render or Railway
* 🧪 Add unit tests with Jest or Postman
* 🎨 Build a frontend to interact with the API (React + Tailwind)

---

## 🙌 Author

Made with ❤️ by [@iamvibhav](https://github.com/iamvibhav)
