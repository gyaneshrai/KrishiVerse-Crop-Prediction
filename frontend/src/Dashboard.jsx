import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const data = [
  { name: 'Jan', profit: 400, loss: 100 },
  { name: 'Feb', profit: 500, loss: 80 },
  { name: 'Mar', profit: 450, loss: 120 },
  { name: 'Apr', profit: 520, loss: 90 },
  { name: 'May', profit: 480, loss: 100 },
  { name: 'Jun', profit: 550, loss: 90 },
];

const Dashboard = () => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={0}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Legend />
          <Bar dataKey="profit" fill="#4ade80" radius={[4, 4, 0, 0]} />
          <Bar dataKey="loss" fill="#f87171" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
