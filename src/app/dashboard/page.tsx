'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
  PolarAngleAxis,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from "recharts";
import { motion } from "framer-motion";

interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
  };
  hour: Array<{
    time: string;
    temp_c: number;
    humidity: number;
    wind_kph: number;
  }>;
}

interface ForecastData {
  forecast: {
    forecastday: ForecastDay[];
  };
}

const WeatherDashboard = () => {
  const [weatherData, setWeatherData]:any = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("hyderabad");
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);

  const fetchWeather = async (city: string) => {
    setLoading(true);
    try {
      const [currentRes, forecastRes] = await Promise.all([
        axios.get(`https://api.weatherapi.com/v1/current.json?key=f308a557091345e3a1353833230708&q=${city}&aqi=no`),
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=f308a557091345e3a1353833230708&q=${city}&days=7&aqi=no`)
      ]);
      setWeatherData(currentRes.data);
      setForecastData(forecastRes.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoading(false);
    }
  };
  const fetchLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = `${position.coords.latitude},${position.coords.longitude}`;
          setSearchQuery(coords);
          fetchWeather(coords);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    fetchWeather(searchQuery);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeather(searchQuery);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-orange-500">Loading weather data...</p>
        </div>
      </div>
    );
  }

  if (!weatherData || !forecastData) return null;

  const { location, current } = weatherData;
  const { forecast } = forecastData;

  // Temperature data for bar chart
  const temperatureData = [
    { name: "Actual", value: current.temp_c },
    { name: "Feels Like", value: current.feelslike_c },
    { name: "Heat Index", value: current.heatindex_c }
  ];

  // Wind and humidity data
  const windHumidityData = [
    { name: "Wind (kph)", value: current.wind_kph },
    { name: "Humidity (%)", value: current.humidity },
    { name: "Cloud (%)", value: current.cloud }
  ];

  // Radial stats
  const radialStats = [
    { name: "UV Index", value: current.uv },
    { name: "Visibility", value: current.vis_km },
    { name: "Dew Point", value: current.dewpoint_c },
    { name: "Pressure", value: current.pressure_mb }
  ];

  // Forecast data for line chart
  const forecastLineData = forecast.forecastday.map((day: any) => ({
    date: new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' }),
    maxTemp: day.day.maxtemp_c,
    minTemp: day.day.mintemp_c,
    avgTemp: day.day.avgtemp_c
  }));

  // Hourly forecast data
  const hourlyData = forecast.forecastday[0].hour.map((hour: any) => ({
    time: new Date(hour.time).getHours() + ':00',
    temp: hour.temp_c,
    humidity: hour.humidity,
    wind: hour.wind_kph
  }));

  // Weather condition distribution
  const conditionData = [
    { name: "Sunny", value: 40 },
    { name: "Cloudy", value: 30 },
    { name: "Rainy", value: 20 },
    { name: "Stormy", value: 10 }
  ];

  const COLORS = ['#f97316', '#fb923c', '#fdba74', '#fed7aa'];

  return (
    <div className="min-h-screen bg-black text-white p-6 pt-40">
      {/* Search Bar */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <h1 className="text-4xl font-bold text-orange-500">Weather Dashboard</h1>
          <form onSubmit={handleSearch} className="w-full md:w-auto flex gap-2 flex-col md:flex-row">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter city name..."
              className="flex-1 bg-gray-800 text-white px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <div className="flex gap-2 mt-3 md:mt-0">
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
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
          </form>
        </div>

        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 bg-gray-900/50 p-6 rounded-xl gap-4"
        >
          <div>
            <h1 className="text-4xl font-bold text-orange-500">{location.name}</h1>
            <p className="text-gray-300">{location.localtime}</p>
            <div className="flex items-center gap-2 mt-2">
              <img src={`https:${current.condition.icon}`} alt="weather icon" className="w-12 h-12" />
              <span className="text-xl">{current.condition.text}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-5xl font-bold text-orange-500">{current.temp_c}°C</p>
            <p className="text-gray-400">Feels like {current.feelslike_c}°C</p>
          </div>
        </motion.header>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Temperature Chart */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-900/50 p-6 rounded-xl"
        >
          <h2 className="text-2xl text-orange-500 mb-4">Temperature Analysis</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={temperatureData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '0.5rem'
                }}
              />
              <Bar dataKey="value" fill="#f97316" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.section>

        {/* Wind & Humidity Chart */}
        <motion.section 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-900/50 p-6 rounded-xl"
        >
          <h2 className="text-2xl text-orange-500 mb-4">Wind & Humidity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={windHumidityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '0.5rem'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#f97316" 
                fill="#f97316" 
                fillOpacity={0.3} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.section>

        {/* 7-Day Forecast */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/50 p-6 rounded-xl"
        >
          <h2 className="text-2xl text-orange-500 mb-4">3-Day Forecast</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={forecastLineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '0.5rem'
                }}
              />
              <Line type="monotone" dataKey="maxTemp" stroke="#f97316" strokeWidth={2} />
              <Line type="monotone" dataKey="minTemp" stroke="#fb923c" strokeWidth={2} />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </motion.section>

        {/* Weather Distribution */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/50 p-6 rounded-xl"
        >
          <h2 className="text-2xl text-orange-500 mb-4">Weather Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={conditionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {conditionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '0.5rem'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.section>
      </div>

      {/* Additional Stats */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900/50 p-6 rounded-xl"
      >
        <h2 className="text-2xl text-orange-500 mb-4">Additional Stats</h2>
        <ResponsiveContainer width="100%" height={350}>
          <RadialBarChart
            innerRadius="20%"
            outerRadius="90%"
            data={radialStats}
            startAngle={180}
            endAngle={0}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar
              label={{ fill: "#fff", position: "insideStart" }}
              background
              dataKey="value"
              fill="#f97316"
            />
            <Legend
              iconSize={10}
              layout="horizontal"
              verticalAlign="bottom"
              wrapperStyle={{ color: "#fff" }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </motion.section>
    </div>
  );
};

export default WeatherDashboard;