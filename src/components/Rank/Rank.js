import React from 'react';

let check = '';

const Rank = ({ loadUser }) => {
    loadUser.user.entries <= 1 ? (check = 'search') : (check = 'searches');

    return (
        <div className='white f5 center @media(max-width: 400px) {
            f4-ns pt5  }'>
            <div className='mb0'>{`${loadUser.user.name}, you've made ${loadUser.user.entries} ${check}.`}</div>
        </div>
    )
}

export default Rank;
