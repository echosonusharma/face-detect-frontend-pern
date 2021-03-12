import React from 'react';

const Rank = ({ loadUser }) => {
    return (
        <div className='white f3 center'>
            <p className='mb0'>{loadUser.user.name}, you've made {loadUser.user.entries} searches.</p>
        </div>
    )
}

export default Rank;
