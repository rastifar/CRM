import Customer from "../../../models/Customer";

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
  if (req.method === "PATCH") {
    const data = req.body.data;
    const id = req.query.customerId;
    try {
      const customer = await Customer.findById({ _id: id });
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.products = data.products;
      customer.updatedAt = Date.now();
      customer.save();

      res
        .status(200)
        .json({
          status: "success",
          message: "customer updated",
          data: customer,
        });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ status: "failed", message: "Error in editing customer" });
    }
  }
}
