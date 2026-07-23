import { useEffect, useMemo, useState } from "react";
import { supabase } from "./lib/supabase";

import SearchBar from "./components/SearchBar";
import OrdersTable from "./components/OrdersTable";

import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    setLoading(true);

    const { data, error } = await supabase
      .from("orders")
      .select(`
        id,
        product,
        amount,
        customers (
          name,
          email
        )
      `)
      .order("id");

    if (error) {
      console.log(error);
    } else {
      setOrders(data);
    }

    setLoading(false);
  }

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const customerName =
        order.customers?.name?.toLowerCase() || "";

      const product =
        order.product.toLowerCase();

      const keyword = search.toLowerCase();

      return (
        customerName.includes(keyword) ||
        product.includes(keyword)
      );
    });
  }, [orders, search]);

  return (
    <div className="container">

      <h1>Orders Dashboard</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <OrdersTable orders={filteredOrders} />
      )}

    </div>
  );
}

export default App;