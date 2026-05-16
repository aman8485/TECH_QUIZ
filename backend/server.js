import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware } from '@clerk/express'
import { connectDB } from './config/db.js';
import userRoutes from './routes/user.js';
import adminRoutes from './routes/admin.js';
import resultRoutes from './routes/result.js';
import { clerkWebhook } from "./controllers/webhook.js";
const app=express();
const PORT=process.env.PORT;
//MIDDLEWARES
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(clerkMiddleware());

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  clerkWebhook
);

app.use(express.json());
app.use("/api/users", userRoutes);

//DB
connectDB();
//ROUTES
app.use("/api/admin", adminRoutes);
app.use("/api/result", resultRoutes);

app.get("/",(req,res)=>{
    res.send("API Working");
});
app.listen(PORT,()=>{
    console.log(`Server Started on http://localhost:${PORT}`)
});


// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';

// import { clerkMiddleware } from '@clerk/express';
// import { connectDB } from './config/db.js';

// import userRoutes from './routes/user.js';
// import adminRoutes from './routes/admin.js';
// import resultRoutes from './routes/result.js';

// const app = express();
// const PORT = process.env.PORT;

// // DB
// connectDB();

// // MIDDLEWARES
// app.use(cors());
// app.use(express.json());
// app.use(clerkMiddleware());

// // ROUTES
// app.use("/api/users", userRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/result", resultRoutes);

// app.get("/", (req, res) => {
//   res.send("API Working");
// });

// app.listen(PORT, () => {
//   console.log(`Server Started on http://localhost:${PORT}`);
// });