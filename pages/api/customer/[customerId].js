import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";


export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "failed", message: "Error in Connecting to DB" });
    return;
  }
  console.log("Befote GEt");

  if (req.method === "GET") {
      const id = req.query.customerId;
      console.log(id);
    try {
        const customer = await Customer.findOne({ _id: id });
      console.log(customer);
        
      res
        .status(200)
        .json({ status: "success", message: "customer was", data: customer });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "failed",
        message: "Error in retriving  customer data",
      });
    }
  }
}
