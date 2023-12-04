import React, { useState, useEffect } from "react";
import $ from "jquery";

function SunRise({selectedCity}) {
  const [sunriseSunsetData, setSunriseSunsetData] = useState({});

  useEffect(() => {
    fetchSunriseSunset(selectedCity.lat, selectedCity.lng);
  }, [selectedCity]);

  const fetchSunriseSunset = (lat, lng) => {
    $.ajax({
      url: `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}`,
      method: "GET",
      dataType: "json",
      success: function (data) {
        if (data.status === "OK") {
          console.log(data.results);
          setSunriseSunsetData(data.results);
        } else {
          console.error("Error fetching data");
        }
      },
      error: function (error) {
        console.error("Error:", error);
      },
    });
  };



  return (
    <div className="sunrise">
      <div className="data-shower">
        <div className="city-info">
          <h2 className="selected_city">{selectedCity.city_name}</h2>
        </div>
        <div className="table-container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="target">No</th>
                <th className="today-info">Today</th>
                <th className="tomorrow-info">Tomorrow</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="target">Sunrise</td>
                <td>{sunriseSunsetData ? sunriseSunsetData.sunrise : ""}</td>
                <td>{sunriseSunsetData ? sunriseSunsetData.sunrise : ""}</td>
              </tr>
              <tr>
                <td className="target">Sunset</td>
                <td>{sunriseSunsetData ? sunriseSunsetData.sunset : ""}</td>
                <td>{sunriseSunsetData ? sunriseSunsetData.sunset : ""}</td>
              </tr>
              <tr>
                <td className="target">Dawn</td>
                <td>{sunriseSunsetData ? sunriseSunsetData.dawn : ""}</td>
                <td>{sunriseSunsetData ? sunriseSunsetData.dawn : ""}</td>
              </tr>
              <tr>
                <td className="target">Dusk</td>
                <td>{sunriseSunsetData ? sunriseSunsetData.dusk : ""}</td>
                <td>{sunriseSunsetData ? sunriseSunsetData.dusk : ""}</td>
              </tr>
              <tr>
                <td className="target">Day Length</td>
                <td>{sunriseSunsetData ? sunriseSunsetData.day_length : ""}</td>
                <td>{sunriseSunsetData ? sunriseSunsetData.day_length : ""}</td>
              </tr>
              <tr>
                <td className="target">Solar Noon</td>
                <td>{sunriseSunsetData ? sunriseSunsetData.solar_noon : ""}</td>
                <td>{sunriseSunsetData ? sunriseSunsetData.solar_noon : ""}</td>
              </tr>
              <tr>
                <td className="target">Time Zone</td>
                <td>{sunriseSunsetData ? sunriseSunsetData.timezone : ""}</td>
                <td>{sunriseSunsetData ? sunriseSunsetData.timezone : ""}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
    </div>
  );
}

export default SunRise;
