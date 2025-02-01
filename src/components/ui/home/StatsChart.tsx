'use client';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Stats products',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Sales',
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: '#e3960f',
            backgroundColor: '#e3960f',
        }
    ],
};

const StatsChart = () => {

    return (
        <div style={{ height: '800px', width: '1200px' }}>
            <Line data={data} options={options} />
        </div>
    );

}

export default StatsChart;