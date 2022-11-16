import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import AddServiceAllCard from './AddServiceAllCard';

const AddServiceAll = () => {
    const [serviceAll, setServiceAll] = useState([]);
    useTitle('Add Service Items - ');

    useEffect(() => {
        // all items route
        fetch('http://localhost:5000/my-service-all')
            .then(res => res.json())
            .then(data => setServiceAll(data));
    }, []);
    return (
        <div className='service py-8 mb-8 rounded-2xl'>
            <div className='text-center mb-4 w-3/4 mx-auto'>
                <p className="text-3xl font-bold text-orange-600">Add Service Items</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                {
                    serviceAll.map(service => <AddServiceAllCard
                        key={service._id}
                        service={service}
                    ></AddServiceAllCard>)
                }
            </div>
        </div>
    );
};

export default AddServiceAll;