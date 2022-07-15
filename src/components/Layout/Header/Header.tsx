import React, {FC} from 'react';

import s from './Header.module.css';
import {Nav} from './Nav/Nav';

export const Header: FC = () => {

  return (
    <div className={s.headerWrapper}>
      <Nav />
    </div>
  );
};
