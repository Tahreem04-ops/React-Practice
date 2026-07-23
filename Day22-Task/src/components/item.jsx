import React from "react";

function Item({ item, onView }) {
  console.log("Rendering:", item.name);

  return (
    <div className="card">
      <div>
        <h3>{item.name}</h3>
        <p>Product ID: {item.id}</p>
      </div>

      <button onClick={() => onView(item)}>
        View
      </button>
    </div>
  );
}

export default React.memo(Item);