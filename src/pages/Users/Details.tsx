import React from 'react';
import {UserProfile} from '../../api/api';

type DetailsType = {
    profile: UserProfile  | null
}

export const Details: React.FC<DetailsType> = ({profile}) => {
    console.log('Details')
    return (
        <div>
            <br/>
            <br/>
            <div>Details:</div>
            {profile ? profile.fullName : '--------------------------'}
        </div>
    );
}