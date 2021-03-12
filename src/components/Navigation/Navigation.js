import React from 'react';
import './Navigation.css';
import Logo from '../Logo/Logo';

const users = {
    user: {
        id: '',
        name: '',
        email: '',
        entries: '0',
        joined: ''
    }
};

const Navigation = ({ setIsAuth, isAuth, reg, setReg, setImageUrl, setLoadUser, setShowProfile }) => {

    if (isAuth) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 5%' }}>
                <Logo />
                <div style={{ display: 'flex', padding: '0 20px' }}>
                    <p
                        onClick={(e) => { e.preventDefault(); setShowProfile(true) }}
                        className='f3 link dim black underline pa3 pointer' >Profile</p>
                    <p
                        onClick={() => { setIsAuth(false); setImageUrl(''); setLoadUser(users); }}
                        className='f3 link dim black underline pa3 pointer'>Sign Out</p>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className='flex justify-end'>
                {
                    reg ?
                        <p onClick={() => setReg(false)} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                        : <p onClick={() => setReg(true)} className='f3 link dim black underline pa3 pointer'> Register</p>
                }

            </nav>
        )
    }


}

export default Navigation;
