import { useEffect, useState } from "react";
import { supabase } from "../supabase";

import OrderList from "./OrderList";
import OrderForm from "./OrderForm";

import "../styles/Dashboard.css";

function Dashboard() {
  const [orders, setOrders] = useState([]);

  const [customerName, setCustomerName] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("Pending");

  // Fetch Orders
  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    console.log("Fetch Data:", data);
    console.log("Fetch Error:", error);

    if (error) {
      alert(error.message);
      return;
    }

    setOrders(data);
  };

  // Add Order
  const addOrder = async () => {
    if (!customerName || !productName || !quantity || !price) {
      alert("Please fill all fields.");
      return;
    }

    const { data, error } = await supabase
      .from("orders")
      .insert([
        {
          customer_name: customerName,
          product_name: productName,
          quantity: Number(quantity),
          total_price: Number(price),
          status: status,
        },
      ])
      .select();

    console.log("Insert Data:", data);
    console.log("Insert Error:", error);

    if (error) {
      alert(error.message);
      return;
    }

    // Refresh Orders
    fetchOrders();

    // Clear Form
    setCustomerName("");
    setProductName("");
    setQuantity("");
    setPrice("");
    setStatus("Pending");
  };

  useEffect(() => {
    fetchOrders();

    const channel = supabase
      .channel("orders-channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "orders",
        },
        () => {
          fetchOrders();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>📦 Live Order Dashboard</h1>
        <p>Realtime Orders using Supabase</p>
      </div>

      <OrderForm
        customerName={customerName}
        setCustomerName={setCustomerName}
        productName={productName}
        setProductName={setProductName}
        quantity={quantity}
        setQuantity={setQuantity}
        price={price}
        setPrice={setPrice}
        status={status}
        setStatus={setStatus}
        addOrder={addOrder}
      />

      <OrderList orders={orders} />
    </div>
  );
}

export default Dashboard;