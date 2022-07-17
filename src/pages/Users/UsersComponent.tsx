import React, {useCallback, useEffect, useState} from 'react';
import {Users} from './Users';
import {Details} from './Details';
import {profileAPI, userAPI, UserProfile, UserType} from '../../api/api';
import {useUsers} from '../../hooks/useUsers';

export const UsersComponent = () => {
    console.log('UsersComponent')

    const [userID, setUserID] = useState<number | null>(null)
    const users = useUsers()

    const onClickUser = useCallback((id: number) => setUserID(id), []);
    return (
        <div>
            <Users users={users} onClickUser={onClickUser}/>
            <Details userID={userID}/>
        </div>
    );
}