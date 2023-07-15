import { useState } from "react";
import Form from "../module/Form";
import { useRouter } from "next/router";
import moment from "moment/moment";

function CustomerEditPage({ data, id }) {
  const date = data.date ? moment(data.date).utc().format("YYYY/MM/DD") : null;
  const [form, setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || [],
    address: data.address || [],
    postalCode: data.postalCode || [],
    date: date,
    products: data.products || [],
  });
  const router = useRouter();
  const editHandler = async () => {
    const res = await fetch(`/api/edit/${id}`, {
      method: "POST",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.status === "success") {
      router.push("/");
    }
  };
  const cancleHandler = () => {
    router.push("/");
  };
  return (
    <div className="customer-page">
      <h4>Edit customer</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button onClick={cancleHandler}>Cancle</button>
        <button onClick={editHandler}>Edit</button>
      </div>
    </div>
  );
}

export default CustomerEditPage;
