import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaUserCircle } from "react-icons/fa";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut().then(() => {
            toast.success('successfully logout');
        }).catch((err) => {
            console.error('err', err);
        });
    };
    const menuItems = <>
        <li className='font-semibold'><Link to={'/'}>Home</Link></li>
        <li className='font-semibold'><Link to={'/blogs'}>Blogs</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to={`/my-review/${user?.email}`}>My Review</Link></li>
                    <li className='font-semibold'><Link to={'/my-service-all'}>Add Service</Link></li>
                    <li onClick={handleLogOut} className='font-semibold'>
                        <button>LogOut</button>
                    </li>
                </>
                :
                <li className='font-semibold'><Link to={'/login'}>Login</Link></li>
        }
        <li>
            <Link to={'/profile'} className='my-auto'>
                {
                    user?.photoURL ?
                        // tippy tooltips--------------------------
                        <Tippy
                            content={
                                <>
                                    <h3 className='text-sm md:text-2xl'>{user?.displayName}</h3>
                                    <img
                                        // style={{ height: '200px' }}
                                        className='rounded-md h-24 md:h-48'
                                        src={user?.photoURL}
                                        alt=''
                                    ></img>
                                </>
                            }
                        >
                            <img
                                className='rounded-full h-8'
                                src={user?.photoURL}
                                alt=''
                            ></img>
                        </Tippy>
                        :
                        <FaUserCircle />
                }
            </Link>
        </li>
    </>;
    return (
        <div className="navbar h-20 mb-6 bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">
                    <img className='w-8' src={logo} alt="logo" />
                    <h1 className='text-2xl ml-2'>Foodie</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};
export default Header;