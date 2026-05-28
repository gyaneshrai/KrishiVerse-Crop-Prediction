import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Login from './loginpage.jsx'
import Signup from './Signup.jsx';
import FarmDetail from './FarmDetail/FarmerForm.jsx';
// import login from './Login.jsx'
// import DashBoard from ""
import MonthlyProfitLossReport from "./ProfitLoss/ProfitLoss.jsx";
import KrishiAIChatbot from './KrishiAi/KrishiAi.jsx';
import InventoryManagement from './inventory/InventoryManagement.jsx';
import WeatherCard from './wheather/Weather.jsx';

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/loginpage" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/farm-details" element={<FarmDetail />} />
        <Route path="/profit-loss" element={<MonthlyProfitLossReport />} />
        <Route path="/krishi-ai" element={<KrishiAIChatbot />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/weather" element={<WeatherCard />} />
        

      </Routes>
    </BrowserRouter>
  
);

