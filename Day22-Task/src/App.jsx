import { useState, useMemo, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import ItemList from "./components/ItemList";
import "./App.css";

function App() {
  // Generate 1000 Products
  const items = useMemo(() => {
    return Array.from({ length: 1000 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
    }));
  }, []);

  const [search, setSearch] = useState("");

  // Optimized Search
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, items]);

  // Optimized Function
  const handleView = useCallback((item) => {
    alert(`You selected ${item.name}`);
  }, []);

  return (
    <div className="container">
      <h1>⚡ React Performance Demo</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <p className="count">
        Showing {filteredItems.length} Products
      </p>

      <ItemList
        items={filteredItems}
        onView={handleView}
      />
    </div>
  );
}

export default App;