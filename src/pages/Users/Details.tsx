import React, {useEffect, useState} from 'react';
import {controller, profileAPI, UserProfile} from '../../api/api';

type DetailsType = {
    userID: number | null
}

export const Details: React.FC<DetailsType> = ({userID}) => {
    console.log('Details')

    const [profile, setProfile] = useState<UserProfile | null>(null)

    useEffect(() => {
        const getProfile = async () => {
            if (userID === null) return
            const res = await profileAPI.getProfile(userID)
            setProfile(res)

        }
        getProfile()

        // return () => controller.abort()
    }, [userID])

    return (
        <div>
            <br/>
            <br/>
            <div>Details:</div>
            {profile ? profile.fullName : '--------------------------'}
        </div>
    );
}