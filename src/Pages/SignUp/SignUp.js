import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    useTitle('Sign Up - ');
    const [error, setError] = useState('');

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    // handle sign up
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password).then((result) => {
            const user = result.user;
            // set token
            setAuthToken(user);
            setError('');
            form.reset();
            navigate('/login');
            updateProfileInfo(name, photoURL);
            toast.success('Successfully signup, Please login');
        }).catch((err) => {
            console.error('err', err);
            setError(err.message);
        });

    };

    // update profile
    const updateProfileInfo = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        };

        updateUserProfile(profile);
    };

    return (
        <div className="hero">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 mx-20">
                    <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" required />
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
                            <input className='btn btn-accent' type="submit" value="Sign Up" />
                        </div>
                        <p className='text-red-600'>
                            {error}
                        </p>
                    </form>
                    <p className='text-center mb-3'>
                        <progress className="progress w-56"></progress>
                    </p>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to={'/login'}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;