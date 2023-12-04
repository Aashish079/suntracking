import React from "react";

function Header({ locationData, onCitySelect, selectedCity }) {
  return (
    <div className="header">
      <h1>Emilio Arias</h1>
      <div className="city-list">
        {locationData.map((city) => (
          <span
            key={city.id}
            onClick={() => onCitySelect(city)}
            className={selectedCity.id === city.id ? "active" : ""}
          >
            {city.city_name}
            {"             "}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Header;
