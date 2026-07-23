import Item from "./Item";

function ItemList({ items, onView }) {
  return (
    <div className="list">
      {items.length > 0 ? (
        items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onView={onView}
          />
        ))
      ) : (
        <h2 className="no-result">
          No Products Found
        </h2>
      )}
    </div>
  );
}

export default ItemList;