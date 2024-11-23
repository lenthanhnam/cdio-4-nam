// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import 'dotenv/config'
// import cartRouter from "./routes/cartRoute.js";
// import orderRoute from "./routes/orderRoute.js";
// import voucherRouter from './routes/voucherRouter.js';

// const app = express();
// const port = 4000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Kết nối DB
// connectDB();

// //api endpoints
// app.use("/api/food",foodRouter)
// app.use('/images',express.static('uploads'))
// app.use('/api/user',userRouter)
// app.use('/api/cart',cartRouter)
// app.use('/api/order',orderRoute)
// app.use('/api/vouchers', voucherRouter)
// // Định tuyến mặc định
// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// // Lắng nghe trên cổng (port)
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });









import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import voucherRoutes from './routes/voucherRoutes.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRoute from './routes/orderRoute.js';
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const voucherRoutes = require('./routes/voucherRoutes');

const app = express();
const PORT = 4000;

// Kết nối với MongoDB
mongoose.connect('mongodb+srv://nam:nam@thefoodnam.mpnf5.mongodb.net/TheFoodNam', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Đã kết nối đến MongoDB'))
  .catch(err => console.log('Lỗi khi kết nối MongoDB:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Để đọc dữ liệu JSON từ body



// Sử dụng route voucher
app.use('/', voucherRoutes);
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRoute);



// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});








// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import voucherRoutes from './routes/voucherRoutes.js';
// import foodRouter from './routes/foodRoute.js';
// import userRouter from './routes/userRoute.js';
// import cartRouter from './routes/cartRoute.js';
// import orderRoute from './routes/orderRoute.js';

// const app = express();
// const PORT = 4000;

// // Kết nối với MongoDB
// mongoose.connect('mongodb+srv://nam:nam@thefoodnam.mpnf5.mongodb.net/TheFoodNam', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('Đã kết nối đến MongoDB'))
//   .catch(err => console.log('Lỗi khi kết nối MongoDB:', err));

// // Middleware
// app.use(cors());
// app.use(bodyParser.json()); // Để đọc dữ liệu JSON từ body

// // API endpoints
// app.use('/api/food', foodRouter);
// app.use('/images', express.static('uploads'));
// app.use('/api/user', userRouter);
// app.use('/api/cart', cartRouter);
// app.use('/api/order', orderRoute);
// app.use('/api/vouchers', voucherRoutes);

// // Định tuyến mặc định
// app.get('/', (req, res) => {
//   res.send('API is running');
// });

// // Khởi chạy server
// app.listen(PORT, () => {
//   console.log(`Server đang chạy tại http://localhost:${PORT}`);
// });