import React, { useEffect, useState } from "react";
import "../styles/MapSelector.css";

const MapSelector = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    // Attempt to load Google Maps API and initialize the map
    if (window.google && window.google.maps) {
      try {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: 37.7749, lng: -122.4194 },
          zoom: 12,
        });

        const marker = new window.google.maps.Marker({
          position: { lat: 37.7749, lng: -122.4194 },
          map,
        });

        setIsMapLoaded(true); // Map loaded successfully
      } catch (error) {
        console.error("Error loading the map: ", error);
        // Map load error will not be shown to the user, but you can log it if needed.
      }
    }
  }, []);

  return (
    <div className="map-container">
      <h2>Select your address on the map</h2>

      {/* Render the map or placeholder */}
      <div className="map-placeholder">
        {!isMapLoaded ? (
          <div className="map-box-placeholder">
            <span className="loading-indicator">Loading Map...</span>
          </div>
        ) : (
          <div id="map" className="map"></div>
        )}
      </div>

      {/* Address Form */}
      <div className="address-form">
        <form>
          <label htmlFor="address">Enter your address:</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address here"
          />
        </form>
      </div>
    </div>
  );
};

export default MapSelector;
