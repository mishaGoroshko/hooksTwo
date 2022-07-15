import React from 'react';
import {UserType} from '../../api/api';

type UsersType = {
    users: UserType[]
    onClickUser: (id: number) => void
}

export const Users: React.FC<UsersType> = ({users, onClickUser}) => {
    console.log('Users')

    return (
        <div>
            {users.map(u => (
                <div key={u.id}
                     onClick={()=>onClickUser(u.id)}
                     style={{display: 'flex'}}>
                    <img src={u.photos.small}
                         style={{height: '30px', width: '30px'}}
                         alt=""/>
                    <div>{u.name}</div>
                </div>))}
        </div>
    );
}