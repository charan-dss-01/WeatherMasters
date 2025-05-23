'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { UserButton } from '@clerk/nextjs';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';

function WeatherPage() {
  // State for API integration
  const [city, setCity] = useState('london');
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  // Function to fetch weather data from API
  const getWeatherData = useCallback(async () => {
    setLoading(true);
    // Updated API call to include forecast data
    const url = `https://api.weatherapi.com/v1/forecast.json?key=f308a557091345e3a1353833230708&q=${city}&days=5&aqi=no&alerts=no`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      console.log(data); // Log data to see what's coming from API
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [city]);

  const fetchLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = `${position.coords.latitude},${position.coords.longitude}`;
          setCity(coords);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  // Fetch data when component mounts or city changes
  useEffect(() => {
    getWeatherData();
  }, [city, getWeatherData]);

  // Helper function to get appropriate weather icon
  const getWeatherIcon = (code: number) => {
    // Weather condition codes: https://www.weatherapi.com/docs/weather_conditions.json
    if (code === 1000) return { icon: "sun", color: "text-orange-500" }; // Sunny
    if (code >= 1003 && code <= 1009) return { icon: "cloud", color: "text-gray-400" }; // Cloudy
    if (code >= 1030 && code <= 1171) return { icon: "cloud-rain", color: "text-blue-500" }; // Rain
    if (code >= 1180 && code <= 1201) return { icon: "cloud-showers-heavy", color: "text-blue-600" }; // Heavy rain
    if (code >= 1204 && code <= 1237) return { icon: "snowflake", color: "text-blue-200" }; // Snow
    if (code >= 1240 && code <= 1246) return { icon: "cloud-rain", color: "text-blue-500" }; // Showers
    if (code === 1087 || (code >= 1273 && code <= 1282)) return { icon: "bolt", color: "text-yellow-500" }; // Thunder
    return { icon: "cloud", color: "text-gray-400" }; // Default
  };

  // Format date for display
  const formatDay = (date: string) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const d = new Date(date);
    return days[d.getDay()];
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Page header with welcome message */}
        <div className="flex justify-between items-center mt-8 mb-8">
          <div>
            <h1 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Weather Page
              </span>
            </h1>
            <p className="text-gray-400 mt-2">Your personal weather station</p>
          </div>
        </div>
        
        {/* Search box - moved to top */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Search Weather by Location</h3>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Enter city name..." 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
              onClick={getWeatherData}
            >
              Search
            </button>
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={fetchLocationWeather}
            >
              Use My Location
            </button>
          </div>
        </div>
        
        {/* Loading indicator */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        )}
        
        {/* Main weather card */}
        {!loading && data && data.location && (
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <div className="text-gray-400 mb-1">Current Weather</div>
                <h2 className="text-4xl font-bold mb-1">{data.location.name}, {data.location.country}</h2>
                <div className="text-gray-300 mb-4">Last updated: {data.current.last_updated}</div>
                
                <div className="flex gap-6 flex-wrap">
                  <div>
                    <div className="text-gray-400 text-sm">Temperature</div>
                    <div className="text-xl">{data.current.temp_c}°C / {data.current.temp_f}°F</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Condition</div>
                    <div className="text-xl">{data.current.condition.text}</div>
                  </div>
                </div>
              </div>
              
              <div className="text-9xl text-orange-500 mt-6 md:mt-0">
                {data.current.condition.icon && (
                  <img 
                    src={data.current.condition.icon.replace('64x64', '128x128')} 
                    alt="weather icon" 
                    width={128}
                    height={128}
                    className="w-32 h-32" 
                  />
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Detailed weather parameters */}
        {!loading && data && data.current && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-temperature-half text-orange-500 text-xl"></i>
                <div className="text-gray-300">Feels Like</div>
              </div>
              <div className="text-2xl font-medium">{data.current.feelslike_c}°C</div>
            </div>
            
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-droplet text-blue-500 text-xl"></i>
                <div className="text-gray-300">Humidity</div>
              </div>
              <div className="text-2xl font-medium">{data.current.humidity}%</div>
            </div>
            
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-wind text-gray-400 text-xl"></i>
                <div className="text-gray-300">Wind Speed</div>
              </div>
              <div className="text-2xl font-medium">{data.current.wind_kph} km/h</div>
            </div>
            
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-gauge text-green-500 text-xl"></i>
                <div className="text-gray-300">Pressure</div>
              </div>
              <div className="text-2xl font-medium">{data.current.pressure_mb} mb</div>
            </div>
            
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-eye text-purple-500 text-xl"></i>
                <div className="text-gray-300">Visibility</div>
              </div>
              <div className="text-2xl font-medium">{data.current.vis_km} km</div>
            </div>
            
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-compass text-yellow-500 text-xl"></i>
                <div className="text-gray-300">Wind Direction</div>
              </div>
              <div className="text-2xl font-medium">{data.current.wind_dir}</div>
            </div>
            
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-cloud text-blue-300 text-xl"></i>
                <div className="text-gray-300">Cloud Cover</div>
              </div>
              <div className="text-2xl font-medium">{data.current.cloud}%</div>
            </div>
            
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-sun text-orange-400 text-xl"></i>
                <div className="text-gray-300">UV Index</div>
              </div>
              <div className="text-2xl font-medium">{data.current.uv}</div>
            </div>
          </div>
        )}
        
        {/* Forecast cards */}
        {!loading && data && data.forecast && (
          <>
            <h3 className="text-xl font-bold mb-4">3-Day Forecast</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
              {data.forecast.forecastday.map((day: any, index: number) => {
                const weather = getWeatherIcon(day.day.condition.code);
                return (
                  <div key={index} className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 text-center">
                    <div className="text-gray-400 mb-1">
                      {index === 0 ? 'Today' : formatDay(day.date)}
                    </div>
                    <div className="flex justify-center mb-2">
                      <img
                        src={day.day.condition.icon} 
                        alt={day.day.condition.text}
                        width={64}
                        height={64}
                        className="w-16 h-16" 
                      />
                    </div>
                    <div className="text-xs text-gray-400 mb-2">{day.day.condition.text}</div>
                    <div className="flex justify-between items-center text-xs px-2">
                      <span className="text-blue-300">{day.day.mintemp_c}°</span>
                      <span className="text-white font-medium">{day.day.avgtemp_c}°</span>
                      <span className="text-orange-300">{day.day.maxtemp_c}°</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherPage;
