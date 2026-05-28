import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherCard = () => {
  const [city, setCity] = useState("Modinagar");
  const [query, setQuery] = useState("Modinagar"); // for input field
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "05a796c5e1ef913ac4c8a72db58c8a01";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        setWeather(response.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch weather data. Check city name.");
        setWeather(null);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(query);
  };

  // Mock forecast data
  const forecast = [
    { day: "Today", temp: "32°C", condition: "Sunny", icon: "☀️" },
    { day: "Tomorrow", temp: "27°C", condition: "Rainy", icon: "🌧️" }
  ];

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter city"
            className="w-full px-4 py-2 border-b focus:outline-none focus:border-green-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-2 text-green-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </form>

      {error && <p className="text-red-600 text-center">{error}</p>}
      
      {!error && weather && (
        <>
          {/* Current Weather */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="text-4xl mr-4">
                {weather.main.temp < 10 ? "❄️" : weather.main.temp > 30 ? "☀️" : "⛅"}
              </div>
              <div>
                <h3 className="text-lg font-bold">{weather.name}</h3>
                <p className="text-2xl font-bold">{Math.round(weather.main.temp)}°C</p>
                <p className="text-sm text-gray-500">{weather.weather[0].description}</p>
              </div>
            </div>
          </div>

          {/* Forecast */}
          <div className="space-y-4">
            {forecast.map((day, index) => (
              <div key={index} className="flex items-center justify-between border-t pt-3">
                <div className="flex items-center">
                  <span className="text-xl mr-3">{day.icon}</span>
                  <span>{day.day}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium">{day.condition}</span>
                  <span className="ml-3 font-bold">{day.temp}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Irrigation Tip */}
          <div className="mt-4 bg-blue-50 p-3 rounded-lg">
            <div className="flex items-center">
              <span className="text-blue-500 mr-2">💧</span>
              <span className="text-sm font-medium">Irrigation Tip</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Expected rain tomorrow. Consider reducing irrigation for outdoor crops.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
