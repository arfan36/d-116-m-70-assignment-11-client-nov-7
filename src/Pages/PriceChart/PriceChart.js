import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PriceChart = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service-all`)
            .then(res => res.json())
            .then(data => {
                const foodsData = data.map(foods => {
                    const food = {
                        name: foods.name,
                        price: parseInt(foods.price)
                    };
                    return food;
                });
                setFoods(foodsData);
            });
    }, []);


    return (
        <div className='flex flex-col items-center service rounded-xl'>
            <h2 className="text-3xl font-bold text-orange-600 my-10">Price Chart</h2>
            <BarChart
                width={600}
                height={300}
                data={foods}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" barSize={20} fill="#4eae91" />
            </BarChart>
        </div>
    );
};

export default PriceChart;