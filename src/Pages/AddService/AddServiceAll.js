import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
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
    }, [serviceAll]);


    // handle delete
    const handleDeleteService = (id) => {
        const proceed = window.confirm(`Are you sure you want to delete this item`);
        if (proceed) {
            fetch(`http://localhost:5000/my-service/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data);
                        toast.success('Added Service deleted');
                        const remaining = serviceAll.filter(service => service._id !== id);
                        setServiceAll(remaining);
                    }
                })
                .catch(err => console.error('err', err));
        }
    };


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
                        handleDeleteService={handleDeleteService}
                    ></AddServiceAllCard>)
                }
            </div>
            <div className='text-center my-10'>
                {
                    serviceAll.length === 0 &&
                    <p className='text-2xl text-accent font-bold'>No service item added yet</p>
                }
            </div>
        </div>
    );
};

export default AddServiceAll;