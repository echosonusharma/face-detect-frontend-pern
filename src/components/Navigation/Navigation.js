import React from 'react';
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
            <nav style={{ fontFamily: 'Audiowide', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 5%' }}>
                <Logo />
                <div style={{ display: 'flex' }}>
                    <p
                        onClick={(e) => { e.preventDefault(); setShowProfile(true) }}
                        className='f5 link dim black underline pa3 pointer @media(min-width: 300px) {
                            f3-ns }' >Profile</p>
                    <p
                        onClick={() => { setIsAuth(false); setImageUrl(''); setLoadUser(users); }}
                        className='f5 link dim black underline pa3 pointer @media(min-width: 300px) {
                            f3-ns }'>Sign Out</p>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className='flex justify-end' style={{ fontFamily: 'Audiowide' }}>
                {
                    reg ?
                        <p onClick={() => setReg(false)} className='f5 link dim black underline pa3 pointer @media(min-width: 300px) {
                            f3-ns }'>Sign In</p>
                        : <p onClick={() => setReg(true)} className='f5 link dim black underline pa3 pointer @media(min-width: 300px) {
                            f3-ns }'> Register</p>
                }

            </nav>
        )
    }


}

export default Navigation;
