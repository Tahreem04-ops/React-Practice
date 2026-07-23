import OrderRow from "./OrderRow";

function OrdersTable({ orders }) {
  if (orders.length === 0) {
    return (
      <h2 className="no-data">
        No Orders Found
      </h2>
    );
  }

  return (
    <table className="orders-table">

      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Email</th>
          <th>Product</th>
          <th>Amount ($)</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order) => (
          <OrderRow
            key={order.id}
            order={order}
          />
        ))}
      </tbody>

    </table>
  );
}

export default OrdersTable;