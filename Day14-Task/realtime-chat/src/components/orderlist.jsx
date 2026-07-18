import OrderCard from "./OrderCard";

function OrderList({ orders }) {

  if (orders.length === 0) {
    return (
      <div className="empty-orders">

        <h2>📦 No Orders Available</h2>

        <p>Add your first order.</p>

      </div>
    );
  }

  return (
    <div className="orders-grid">

      {orders.map((order) => (

        <OrderCard
          key={order.id}
          order={order}
        />

      ))}

    </div>
  );
}

export default OrderList;