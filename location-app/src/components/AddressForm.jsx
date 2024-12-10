import React, { useState } from "react";

const AddressForm = ({ onSave }) => {
  const [address, setAddress] = useState({
    houseNo: "",
    road: "",
    category: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(address); // Save address to the backend or parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="houseNo"
        placeholder="House/Flat/Block No."
        value={address.houseNo}
        onChange={handleChange}
      />
      <input
        type="text"
        name="road"
        placeholder="Apartment/Road/Area"
        value={address.road}
        onChange={handleChange}
      />
      <select name="category" value={address.category} onChange={handleChange}>
        <option value="">Select Category</option>
        <option value="Home">Home</option>
        <option value="Office">Office</option>
        <option value="Friends">Friends & Family</option>
      </select>
      <button type="submit">Save Address</button>
    </form>
  );
};

export default AddressForm;
