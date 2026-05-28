import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Header'
import Dashboard from './Dashboard'
import LandUsePieChart from './LandPieChart'
import DashContaineer from './DashContaineer'
// import FarmDetailsForm from './FarmDetail/FarmDetail'
import LoginPage from './loginpage'
import Signup from './Signup'
import FarmContaineer from './FarmDetail/FarmContaineer'  // Add this import
import FarmDetail from './FarmDetail/FarmerForm';
import ProfitContaineer from './ProfitLoss/ProfitComponent';
import MonthlyProfitLossReport from './ProfitLoss/ProfitLoss';
import KrishiContaineer from './KrishiAi/KrishiComponent';
import InventoryContaineer from './inventory/InventoryComponent';
import Footer from './Footer'
import WeatherCard from './wheather/Weather';
import KrishiLogo from './assets/KrishiLogo.png';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="flex items-center">
        <img src={KrishiLogo} alt="Krishi Logo" className="h-16 w-auto" />
        <span className="ml-0 mb-2 text-3xl font-bold text-green-800">KrishiVerse</span>
      </div>
        
        <nav className="mt-6">
          <Link to="/" className="flex items-center px-4 py-3 bg-green-100 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </Link>
          <Link to="/farm-details" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Farm Details
          </Link>
          <Link to="/profit-loss" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Profit & Loss
          </Link>
          <Link to="/inventory" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            Inventory
          </Link>
          <Link to="/weather" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            Weather
          </Link>
          <Link to="/krishi-ai" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            KrishiAI
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-2xl font-bold">Dashboard Overview</h1>
                  <p className="text-gray-600">Welcome back, Monitor your farm's performance</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="pl-8 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-2 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Total Farms</p>
                      <h3 className="text-2xl font-bold">12</h3>
                      <p className="text-xs text-green-500">+2 this month</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Monthly Revenue</p>
                      <h3 className="text-2xl font-bold">₹2.4L</h3>
                      <p className="text-xs text-green-500">+5% from last month</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Harvest-Ready Crops</p>
                      <h3 className="text-2xl font-bold">8</h3>
                      <p className="text-xs text-orange-500">3 ready to harvest</p>
                    </div>
                    <div className="bg-orange-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Today's Weather</p>
                      <h3 className="text-2xl font-bold">28°C</h3>
                      <p className="text-xs text-blue-500">Partly Cloudy</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profit & Loss Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Profit & Loss Analysis</h3>
                    <select className="border rounded-md px-2 py-1 text-sm">
                      <option>Last 6 months</option>
                      <option>Last year</option>
                      <option>All time</option>
                    </select>
                  </div>
                  <DashContaineer />
                </div>

                {/* Weather Forecast */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Weather Forecast</h3>
                  <WeatherCard />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {/* Farm Overview */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Farm Overview</h3>
                  <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-2 rounded-md mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Rice Farm A</h4>
                        <p className="text-sm text-gray-500">5.2 acres • Ready in 15 days</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600">85% Growth</div>
                      <div className="text-xs text-gray-500">Est. ₹45,000</div>
                    </div>
                  </div>
                </div>

                {/* Inventory Status */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Inventory Status</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Seeds</span>
                        <span className="text-sm font-medium">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Fertilizers</span>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Footer />
            </div>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  )
}

export default App