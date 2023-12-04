import React, { useState } from "react";
import Header from "./components/Header";
import SunRise from "./components/SunRise";
import Clock from "./components/Clock";
import "./style.css"; // Import your CSS

const locationData = [
  { id: 1, city_name: "New York", lat: 40.712775, lng: -74.005973 },
  {
    id: 2,
    city_name: "Los Angeles",
    lat: 34.052235,
    lng: -118.243683,
  },
  {
    id: 3,
    city_name: "Chicago",
    lat: 41.881832,
    lng: -87.623177,
  },
  {
    id: 4,
    city_name: "Houston",
    lat: 29.760426,
    lng: -95.3698,
  },
  {
    id: 5,
    city_name: "Phoenix",
    lat: 33.448377,
    lng: -112.074039,
  },
];

function App() {
  const [selectedCity, setSelectedCity] = useState(locationData[0]);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="App">
      <Header
        locationData={locationData}
        onCitySelect={handleCitySelect}
        selectedCity={selectedCity}
      />
      <div className="main-content">
        <Clock />
        <SunRise selectedCity={selectedCity} />
      </div>
    </div>
  );
}

export default App;
