import express from "express";
import cors from "cors";
import Razorpay from "razorpay";

const app = express();
app.use(express.json());
app.use(cors());

// Razorpay instance
const razorpay = new Razorpay({
  key_id: "rzp_test_Rp4IP76cenDTKE",
  key_secret: "9XW8mbc1OZz0qySu9fr6WnIQ",
});

// Create order route
app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, 
      currency: "INR",
      receipt: "order_rcptid_11",
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => console.log("Server started on port 5000"));
