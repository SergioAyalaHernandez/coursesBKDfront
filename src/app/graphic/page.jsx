"use client";

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

var beneficios = [50, 60, 90, 80, 40, 30, 20, 55, 75, 85, 95, 100];
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Data Chart',
    },
  },
};

var miData = {
  labels: meses,
  datasets: [
    {
      label: 'Beneficios',
      data: beneficios,
      tension: 0.5,
      fill: true,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      pointRadius: 5,
      pointBorderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgba(255, 99, 132)',
    },
  ],
};

const LinesChart = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' } }}
          className="grid grid-cols-1 gap-[60px]"
        >
          <div className="flex-1 flex flex-col justify-center gap-6 group">
            <div className="w-full flex justify-between items-center">
              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                Gráfico de Beneficios Mensuales
              </div>
            </div>
            <div className="relative w-full h-96">
              <Line data={miData} options={options} />
            </div>
            <div className="border-b border-white/20 w-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LinesChart;
