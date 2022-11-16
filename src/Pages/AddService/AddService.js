import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './AddService.css';
import AddServiceHome from './AddServiceHome';

const AddService = () => {

    const [services, setServices] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        // limit 3 items route
        fetch(`http://localhost:5000/my-service`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [services]);

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
                        const remaining = services.filter(service => service._id !== id);
                        setServices(remaining);
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
                    services.map(service => <AddServiceHome
                        key={service._id}
                        service={service}
                        handleDeleteService={handleDeleteService}
                    ></AddServiceHome>)
                }
            </div>
            <div className='text-center mt-4'>
                {
                    services.find(service => service.user_email === user?.email) &&
                    <Link to={'/my-service-all'}>
                        <button className='btn btn-accent'>See All</button>
                    </Link>
                }
                {
                    services.length === 0 &&
                    <p className='text-2xl text-accent font-bold'>No service item added yet</p>
                }
            </div>
        </div>
    );
};

export default AddService;