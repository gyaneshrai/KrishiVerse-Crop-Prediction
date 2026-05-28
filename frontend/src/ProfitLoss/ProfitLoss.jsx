

import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// No Water, only main categories
const categories = ['Seeds', 'Fertilizer', 'Energy', 'Equipment'];

// Full 12 months
const months = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

const COLORS = ['#00C49F', '#FF8042'];

const MonthlyProfitLossReport = () => {
  const initialData = months.reduce((acc, month) => {
    acc[month] = categories.reduce((catAcc, category) => {
      catAcc[category] = { revenue: '', expenses: '' };
      return catAcc;
    }, {});
    return acc;
  }, {});

  const [data, setData] = useState(initialData);
  const [selectedMonth, setSelectedMonth] = useState('January');

  const handleInputChange = (category, field, value) => {
    setData(prev => ({
      ...prev,
      [selectedMonth]: {
        ...prev[selectedMonth],
        [category]: {
          ...prev[selectedMonth][category],
          [field]: value,
        },
      },
    }));
  };

  const calculateTotals = () => {
    const monthData = data[selectedMonth];
    const totalRevenue = Object.values(monthData).reduce((sum, item) => sum + (parseFloat(item.revenue) || 0), 0);
    const totalExpenses = Object.values(monthData).reduce((sum, item) => sum + (parseFloat(item.expenses) || 0), 0);
    const totalProfit = totalRevenue - totalExpenses;
    return { totalRevenue, totalExpenses, totalProfit };
  };

  const { totalRevenue, totalExpenses, totalProfit } = calculateTotals();

  const pieData = [
    { name: 'Revenue', value: totalRevenue },
    { name: 'Expenses', value: totalExpenses },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
        Monthly Profit & Loss Report
      </h1>

      {/* Month Selector */}
      <div className="mb-8 flex justify-center">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="p-3 rounded-lg border-2 border-green-300"
        >
          {months.map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>

      {/* Category Inputs */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-10 overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-green-100">
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Revenue (₹)</th>
              <th className="p-4 text-left">Expenses (₹)</th>
              <th className="p-4 text-left">Profit/Loss (₹)</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => {
              const revenue = data[selectedMonth][category].revenue;
              const expenses = data[selectedMonth][category].expenses;
              const profit = (parseFloat(revenue) || 0) - (parseFloat(expenses) || 0);

              return (
                <tr key={category} className="border-b hover:bg-green-50">
                  <td className="p-4">{category}</td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={revenue}
                      onChange={(e) => handleInputChange(category, 'revenue', e.target.value)}
                      className="border p-2 rounded w-32"
                      placeholder="Revenue"
                    />
                  </td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={expenses}
                      onChange={(e) => handleInputChange(category, 'expenses', e.target.value)}
                      className="border p-2 rounded w-32"
                      placeholder="Expenses"
                    />
                  </td>
                  <td className={`p-4 font-semibold ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {profit.toLocaleString('en-IN')}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Overall Summary */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Pie Chart */}
        <div className="flex justify-center">
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Numbers */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-purple-700">{selectedMonth} Summary</h2>
          <p>Total Revenue: <span className="font-semibold">₹{totalRevenue.toLocaleString('en-IN')}</span></p>
          <p>Total Expenses: <span className="font-semibold">₹{totalExpenses.toLocaleString('en-IN')}</span></p>
          <p>
            Net {totalProfit >= 0 ? (
              <span className="text-green-600 font-bold">Profit</span>
            ) : (
              <span className="text-red-600 font-bold">Loss</span>
            )}
            : ₹{Math.abs(totalProfit).toLocaleString('en-IN')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MonthlyProfitLossReport;
