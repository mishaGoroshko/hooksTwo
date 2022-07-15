import React from 'react';

type FooterType = {
    year: number
}

export const Footer = React.memo<FooterType> (({year}) => {
    console.log('Footer')
    return (
        <div>
            Footer: {year}
        </div>
    );
})