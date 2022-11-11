import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='service py-8 mb-8 rounded-2xl'>
            <div className='text-center mb-4 w-3/4 mx-auto'>
                <p className="text-3xl font-bold text-orange-600">Food Item</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center mt-4'>
                <Link to={'/service-all'}>
                    <button className='btn btn-accent'>See All</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;