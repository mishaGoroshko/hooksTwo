import React from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import {TextareaComponent} from '../pages/TextareaComponent/TextareaComponent';
import {SelectComponent} from '../pages/SelectComponent';
import {CoordsContainer} from '../pages/CoordsContainer';
import {AppRoutePaths} from './appRoutes';
import {NotFound} from '../pages/NotFound';
import {Layout} from '../components/Layout/Layout';
import {Counter} from '../pages/Counter/Counter';
import {UsersComponent} from '../pages/Users/UsersComponent';

export const AppRouter = () => {
    const appRoutes = useRoutes([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {index: true, element: <TextareaComponent maxLength={10}/>},
                {
                    path: AppRoutePaths.TEXTAREA,
                    element: <TextareaComponent maxLength={10}/>
                },
                {
                    path: AppRoutePaths.SELECT,
                    element: <SelectComponent values={[1, 2, 3, 4, 5]}/>
                },
                {path: AppRoutePaths.COORDS, element: <CoordsContainer/>},
                {path: AppRoutePaths.COUNTER, element: <Counter/>},
                {path: AppRoutePaths.USERS, element: <UsersComponent/>},
            ],
        },

        {
            path: AppRoutePaths.RANDOM,
            element: <Navigate to={AppRoutePaths.NOT_FOUND}/>,
        },
        {path: AppRoutePaths.NOT_FOUND, element: <NotFound/>},
    ])
    return appRoutes
}