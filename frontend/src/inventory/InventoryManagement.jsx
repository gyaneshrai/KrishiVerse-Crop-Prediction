

import React from 'react';

const InventoryManagement = () => {
  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
        Smart Farming - Inventory & Resource Management
      </h1>

      {/* Seed and Fertilizer Stock */}
      <section className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Seed and Fertilizer Stock
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-100 p-4 rounded-xl">
            <h3 className="text-lg font-bold">Seeds</h3>
            <ul className="list-disc ml-5 mt-2 text-green-900">
              <li>Wheat - 120kg</li>
              <li>Rice - 90kg</li>
              <li>Maize - 150kg</li>
            </ul>
          </div>
          <div className="bg-green-100 p-4 rounded-xl">
            <h3 className="text-lg font-bold">Fertilizers</h3>
            <ul className="list-disc ml-5 mt-2 text-green-900">
              <li>Nitrogen - 50kg</li>
              <li>Phosphate - 30kg</li>
              <li>Potassium - 40kg</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Equipment Management */}
      <section className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Equipment Management
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-green-200">
                <th className="p-3">Equipment</th>
                <th className="p-3">Status</th>
                <th className="p-3">Last Maintenance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Tractor</td>
                <td className="p-3 text-green-600">Operational</td>
                <td className="p-3">2025-04-15</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Irrigation Pump</td>
                <td className="p-3 text-red-600">Needs Repair</td>
                <td className="p-3">2025-03-28</td>
              </tr>
              <tr>
                <td className="p-3">Harvester</td>
                <td className="p-3 text-green-600">Operational</td>
                <td className="p-3">2025-04-10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Water and Energy Consumption */}
      <section className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Water and Energy Consumption
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-xl">
            <h3 className="text-lg font-bold">Water Usage</h3>
            <p className="mt-2 text-blue-900">
              Total Water Used: 12,000 liters this month.
            </p>
            <p className="text-blue-700 mt-1">Daily Average: 400 liters/day</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-xl">
            <h3 className="text-lg font-bold">Energy Usage</h3>
            <p className="mt-2 text-yellow-900">
              Total Energy Used: 3,500 kWh this month.
            </p>
            <p className="text-yellow-700 mt-1">Daily Average: 117 kWh/day</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InventoryManagement;
