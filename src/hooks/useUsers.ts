import {useEffect, useState} from 'react';
import {userAPI, UserType} from '../api/api';

export const useUsers = () => {
    const [users, setUser] = useState<UserType[]>([])

    useEffect(() => {
        const requestUsers = async () => {
            const res = await userAPI.getUsers({count: 10, page: 100})
            setUser(res.items)
        }
        requestUsers()
    }, [])
    return users
}