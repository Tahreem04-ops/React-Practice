import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const { data, error } = await supabase
      .from("users")
      .select("*");

    // Debugging
    console.log("Data:", data);
    console.log("Error:", error);

    if (error) {
      console.error("Supabase Error:", error);
    } else {
      setUsers(data);
    }
  }

  return (
    <div className="table-container">
      <h2>Users List</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;