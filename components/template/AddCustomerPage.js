import { useState } from "react";
import Form from "../module/Form";
import { useRouter } from "next/router";

function AddCustomerPage(props) {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCose: "",
    date: "",
    products: [],
  });
  const router = useRouter();
  const saveHandler = async () => {
    const res = await fetch("/api/customer", {
      method: "POST",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") router.push("/");
  };
  const cancleHandler = () => {
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCose: "",
      date: "",
      products: [],
    });
    router.push("/");
  };
  return (
    <div className="customer-page">
      <h4>Add New Customer</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button className="first" onClick={cancleHandler}>
          Cancle
        </button>
        <button className="second" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddCustomerPage;
