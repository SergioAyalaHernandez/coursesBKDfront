"use client"

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Node.js', 'Java', '.NET', 'Python'],
    datasets: [
      {
        label: 'Programming Languages',
        data: [25, 35, 10, 30],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

const App = () => {
    return (
      <div className='flex flex-items justify-center py-12 xl:py-0  gap-[65px]'>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[25px]"
      >
        <div className="p-6 bg-primary rounded-xl shadow-lg w-full max-w-lg">
          <h1 className="text-5xl font-extrabold text-outline text-primary group-hover:text-accent transition-all duration-500">Participación por cada tecnología</h1>
          <PieChart />
        </div>
        <div className="p-6 bg-primary rounded-xl shadow-lg w-full max-w-lg">
          <h1 className="text-5xl font-extrabold text-outline text-primary group-hover:text-accent transition-all duration-500">Participación por cada tecnología</h1>
          <PieChart />
        </div>
        
      </motion.div>
      </div>
    );
  };

export default App;

