import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const LandUsePieChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['Cultivated Land', 'Uncultivated Land'],
    datasets: [{ data: [0, 0], backgroundColor: ['#4CAF50', '#FFC107'], borderWidth: 1 }],
  });

  useEffect(() => {
    fetchFarmData();
  }, []);

  const fetchFarmData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/farms');
      const farms = await response.json();
      
      const totalArea = farms.reduce((sum, farm) => sum + farm.totalArea, 0);
      const cultivatedArea = farms.reduce((sum, farm) => sum + farm.cultivatedArea, 0);
      const uncultivatedArea = totalArea - cultivatedArea;

      setChartData({
        labels: ['Cultivated Land', 'Uncultivated Land'],
        datasets: [{
          data: [cultivatedArea, uncultivatedArea],
          backgroundColor: ['#4CAF50', '#FFC107'],
          borderWidth: 1,
        }],
      });
    } catch (error) {
      console.error('Error fetching farm data:', error);
    }
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { size: 14 },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            return `${context.label}: ${value} acres`;
          },
        },
      },
    },
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">Land Use Distribution</h2>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default LandUsePieChart;
