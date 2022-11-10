import React from 'react';
import useTitle from '../../hooks/useTitle';

const Profile = () => {
    useTitle('Profile - ');
    return (
        <div>
            <h2>This is profile</h2>
        </div>
    );
};

export default Profile;