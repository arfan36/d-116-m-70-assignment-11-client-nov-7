import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    const [error, setError] = useState('');
    const { ProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // google login
    const handleGoogleLogin = () => {
        ProviderLogin(googleProvider).then((result) => {
            const user = result.user;
            // set token
            setAuthToken(user);
            navigate(from, { replace: true });
            setError('');
            toast.success('successfully log in with google');
        }).catch((err) => {
            console.error('err', err);
            setError(err.message);
        });
    };
    return (
        <div>
            <p className='text-center'><small>Login with</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleLogin} className='btn btn-ghost' title='Google'>
                    <FcGoogle></FcGoogle>
                </button>
            </p>
            <p className='text-red-600'>
                {error}
            </p>
        </div>
    );
};

export default SocialLogin;