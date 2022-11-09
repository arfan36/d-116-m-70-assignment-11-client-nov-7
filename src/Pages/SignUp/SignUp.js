import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
// import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const [error, setError] = useState('');

    useTitle('Sign Up - ');

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    // handle sign up
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password).then((result) => {
            const user = result.user;
            // set token
            setAuthToken(user);
            setError('');
            form.reset();
            navigate('/login');
            toast.success('Successfully signup, Please login');
        }).catch((err) => {
            console.error('err', err);
            setError(err.message);
        });

    };

    return (
        <div className="hero">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Sign Up" />
                        </div>
                        <p className='text-red-600'>
                            {error}
                        </p>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to={'/login'}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;