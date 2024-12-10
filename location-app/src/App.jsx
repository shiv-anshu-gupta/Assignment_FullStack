// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddressForm from "./components/AddressForm";
import MapSelector from "./components/MapSelector";
import SavedAddresses from "./components/SavedAddresses";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MapSelector />} />
        <Route path="/add" element={<AddressForm />} />
        <Route path="/manage" element={<SavedAddresses />} />
      </Routes>
    </div>
  );
};

export default App;
