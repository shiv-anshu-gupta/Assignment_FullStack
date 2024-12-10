// SavedAddresses.jsx
import React, { useEffect, useState } from "react";
import "../styles/SavedAddresses.css";
import axios from "axios";

const SavedAddresses = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/addresses");
        setAddresses(response.data);
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };
    fetchAddresses();
  }, []);

  return (
    <div className="addresses-container">
      <h2>Your Saved Addresses</h2>
      <div className="addresses-list">
        {addresses.map((address) => (
          <div className="address-card" key={address._id}>
            <h3>{address.category}</h3>
            <p>
              {address.houseNo}, {address.road}
            </p>
            <p>
              Latitude: {address.coordinates.lat}, Longitude:{" "}
              {address.coordinates.lng}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedAddresses;
