const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const cartRouter = require("./routers/cartrouter");
const wishlistrouter = require("./routers/wishlistrouter");
const orderrouter =require("./routers/orderrouter")
dotenv.config();
connectDB();

const app = express();

const corsOptions={
  origin:"https://street-style-store-web.onrender.com",
  methods:"GET,POST,PUT,DELETE",
  credentials:true
}
app.use(cors(
corsOptions
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploads
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/user", require("./routers/userrouter"));
app.use("/api/product", require("./routers/productrouter"));
app.use("/api/banner", require("./routers/bannerrouter"));
app.use("/api/cart", cartRouter);
app.use("/api/wishlist", wishlistrouter);
app.use("/api/orders", orderrouter);
app.get("/", (req, res) => {
  res.send("Backend API is running...");
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
