import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const [error, setError] = useState('');

    const { login, setLoading } = useContext(AuthContext);
    useTitle('Log In - ');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // handle Login
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password).then((result) => {
            const user = result.user;
            // set token
            setAuthToken(user);
            navigate(from, { replace: true });
            setError('');
            toast.success('login success');
        }).catch((err) => {
            console.error('err', err);
            setError(err.message);
        })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="hero">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 mx-20">
                    <h1 className="text-5xl font-bold text-center">Login!</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Login" />
                        </div>
                        <p className='text-red-600'>
                            {error}
                        </p>
                    </form>
                    <p className='text-center mb-3'>New to Here, Please <Link className='text-orange-600 font-bold' to={'/signup'}>Sign Up</Link></p>
                    <p className='text-center'>
                        <progress className="progress w-56"></progress>
                    </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;