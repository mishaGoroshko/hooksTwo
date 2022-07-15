import React, {useCallback, useEffect, useState} from 'react';
import {Users} from './Users';
import {Details} from './Details';
import {profileAPI, userAPI, UserProfile, UserType} from '../../api/api';

export const UsersComponent = () => {
    console.log('UsersComponent')

    const [users, setUser] = useState<UserType[]>([])
    const [profile, setProfile] = useState<UserProfile | null>(null)

    useEffect(() => {
        const requestUsers = async () => {
            const res = await userAPI.getUsers({count: 10, page: 100})
            setUser(res.items)
        }
        requestUsers()
    }, [])

    const onClickUser =useCallback( async (id: number) => {
        const res = await profileAPI.getProfile(id)
        setProfile(res)
    }, [])

    return (
        <div>
            <Users users={users} onClickUser={onClickUser}/>
            <Details profile={profile}/>
        </div>
    );
}