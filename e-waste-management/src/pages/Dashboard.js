import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [pickups, setPickups] = useState([
    { id: 1, customer: "John Doe", date: "2024-01-01", status: "Completed" },
    { id: 2, customer: "Jane Smith", date: "2024-01-05", status: "Pending" },
  ]);

  return (
    <div className="dashboard">
      <h2>Pickup Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pickups.map((pickup) => (
            <tr key={pickup.id}>
              <td>{pickup.id}</td>
              <td>{pickup.customer}</td>
              <td>{pickup.date}</td>
              <td>{pickup.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
