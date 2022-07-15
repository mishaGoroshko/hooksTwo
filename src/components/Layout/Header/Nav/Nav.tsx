import {FC} from 'react';

import {NavLink} from 'react-router-dom';

import s from './Nav.module.css';

import {AppRoutePaths} from '../../../../routes/appRoutes';

export const Nav: FC = () => {
    return (
        <nav className={s.nav}>
            <NavLink
                className={({isActive}) =>
                    isActive ? `${s.Link} ${s.activeLink}` : `${s.Link}`
                }
                to={AppRoutePaths.TEXTAREA}
            >TEXTAREA</NavLink>
            <NavLink
                className={({isActive}) =>
                    isActive ? `${s.Link} ${s.activeLink}` : `${s.Link}`
                }
                to={AppRoutePaths.SELECT}
            >SELECT</NavLink>
            <NavLink
                className={({isActive}) =>
                    isActive ? `${s.Link} ${s.activeLink}` : `${s.Link}`
                }
                to={AppRoutePaths.COORDS}
            >COORDS</NavLink>
            <NavLink
                className={({isActive}) =>
                    isActive ? `${s.Link} ${s.activeLink}` : `${s.Link}`
                }
                to={AppRoutePaths.COUNTER}
            >COUNTER</NavLink>
            <NavLink
                className={({isActive}) =>
                    isActive ? `${s.Link} ${s.activeLink}` : `${s.Link}`
                }
                to={AppRoutePaths.USERS}
            >USERS</NavLink>

        </nav>
    );
};
