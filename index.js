const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo Error:", err));

app.get("/", (req, res) => {
  res.send("Welcome to Book API");
});

const bookRoutes = require('./routes/bookRoutes');
app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
