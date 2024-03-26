import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { User } from './root/App'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import QuizIcon from '@mui/icons-material/Quiz';
import ShopIcon from '@mui/icons-material/Shop';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import supabase from './root/Client';
import { Tooltip } from '@mui/material';

const Navigation = () => {
    const navigate = useNavigate()
    const { user } = useContext(User)

    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNavbar = () => {
        setNavOpen(true);
    };

    const navigation = useRef(null);
    const button = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {

            if (navigation.current && !navigation.current.contains(e.target) && !button.current.contains(e.target)) {
                // The click was outside the div; hide the div
                setNavOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        setNavOpen(false)
        navigate('/')
        supabase.auth.signOut()
        window.location.reload()
    }

    return (
        <nav className='fixed z-10 md:bg-gray-800 md:text-white h-2 md:h-20 w-full transition-top duration-300' id='navbar'>
            {/* lg screens navigation bar */}
            <div className='flex justify-center items-center h-full w-full'>
                <div className='hidden grid-cols-3 gap-x-10 w-full text-2xl md:grid'>
                    <div className='ml-5 flex gap-x-4 items-center text-3xl'>
                        <img src={require('../media/images/logo.png')} alt='logo' className='h-14 cursor-pointer' onClick={() => navigate('/')} />
                        <h1 onClick={() => navigate('/')} className='md:hover:text-gray-400 cursor-pointer lg:block hidden text-4xl md:text-clip font-unna'>Visual Typing</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <ul className='flex md:gap-x-10 gap-x-3'>
                            <li className='md:hover:text-gray-400'><NavLink to={"/test"}>Test</NavLink></li>
                            <li className='md:hover:text-gray-400'><NavLink to={"/yourdata"}>Data</NavLink></li>
                            <li className='md:hover:text-gray-400'><NavLink to={"/packages"}>Packages</NavLink></li>
                            <li className='md:hover:text-gray-400'><NavLink to={"/contact"}>Contact</NavLink></li>
                        </ul>
                    </div>

                    {!user &&
                        <div className='mr-10 flex justify-end items-center text-lg'>
                            <ul className='flex justify-end gap-x-2 lg:gap-x-10'>
                                <li className='md:hover:text-gray-400 '><NavLink to={"/signin"}>Sign in</NavLink></li>
                                <li className='md:hover:text-gray-400'><NavLink to={"/signup"}>Sign up</NavLink></li>
                            </ul>
                        </div>
                    }
                    {user &&
                        <div className='mr-10 flex justify-end items-center text-lg'>
                            <Tooltip title={<p className='text-base'>Connected as {user.email}</p>} enterTouchDelay={0}>
                                <p className='text-green-500'>Connected •</p>
                            </Tooltip>
                        </div>}
                </div>
            </div>
            <button ref={button} onClick={toggleNavbar} className='md:hidden absolute top-0 left-0 ml-5 mt-5'>
                <MenuIcon />
            </button>
            {/* sm screens navigation bar */}
            <div className={`absolute top-0 h-screen w-[300px] text-2xl md:hidden transition-transform ${isNavOpen ? " " : "-translate-x-full"} md:translate-x-0`} ref={navigation}>
                <div className='bg-[#FFFFF7] p-4 w-full h-full'>
                    <CloseIcon onClick={() => setNavOpen(false)} className='mb-5' />
                    <ul className='space-y-8'>
                        <li className='md:hover:text-gray-400'><NavLink to={"/"} onClick={() => setNavOpen(false)}><HomeIcon className='bottom-[2px] relative' /> Home</NavLink></li>
                        <li className='md:hover:text-gray-400'><NavLink to={"/test"} onClick={() => setNavOpen(false)}><QuizIcon className='bottom-[2px] relative' /> Test</NavLink></li>
                        <li className='md:hover:text-gray-400'><NavLink to={"/yourdata"} onClick={() => setNavOpen(false)}><QueryStatsIcon className='bottom-[2px] relative' /> Data</NavLink></li>
                        <li className='md:hover:text-gray-400'><NavLink to={"/packages"} onClick={() => setNavOpen(false)}><ShopIcon className='bottom-[2px] relative' /> Packages</NavLink></li>
                        <li className='md:hover:text-gray-400'><NavLink to={"/contact"} onClick={() => setNavOpen(false)}><ContactSupportIcon className='bottom-[2px] relative' /> Contact</NavLink></li>
                        {!user && <li className='md:hover:text-gray-400'><NavLink to={"/signin"} onClick={() => setNavOpen(false)}><LoginIcon className='bottom-[2px] relative' /> Sign in</NavLink></li>}
                        {!user && <li className='md:hover:text-gray-400'><NavLink to={"/signup"} onClick={() => setNavOpen(false)}><PersonAddAltIcon className='bottom-[2px] relative' /> Sign up</NavLink></li>}
                        {user && <li className='md:hover:text-gray-400 text-red-600'><NavLink to={"/"} onClick={handleLogout}><ExitToAppIcon className='bottom-[2px] relative' /> Logout</NavLink></li>}
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navigation