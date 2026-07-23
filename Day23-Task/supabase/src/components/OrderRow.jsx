function OrderRow({ order }) {
  return (
    <tr>

      <td>{order.id}</td>

      <td>{order.customers?.name}</td>

      <td>{order.customers?.email}</td>

      <td>{order.product}</td>

      <td>${order.amount}</td>

    </tr>
  );
}

export default OrderRow;