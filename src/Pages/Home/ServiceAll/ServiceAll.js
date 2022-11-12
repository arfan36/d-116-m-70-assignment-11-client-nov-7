import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import ServiceAllCard from './ServiceAllCard';
import '../Service/Service.css';

const ServiceAll = () => {
    const [serviceAll, setServiceAll] = useState([]);
    useTitle('All Items - ');

    useEffect(() => {
        // all items route
        fetch('http://localhost:5000/service-all')
            .then(res => res.json())
            .then(data => setServiceAll(data));
    }, [serviceAll]);
    return (
        <div className='service py-8 mb-8 rounded-2xl'>
            <div className='text-center mb-4 w-3/4 mx-auto'>
                <p className="text-3xl font-bold text-orange-600">Food Items</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                {
                    serviceAll.map(service => <ServiceAllCard
                        key={service._id}
                        service={service}
                    ></ServiceAllCard>)
                }
            </div>
        </div>
    );
};

export default ServiceAll;