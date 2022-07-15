import React from 'react';

type ButtonPlusType = {
    onClick: () => void
}

export const ButtonPlus = React.memo<ButtonPlusType> (({onClick}) => {
    console.log('ButtonPlus')
    return (
        <div>
            <button onClick={onClick}>+</button>
        </div>
    );
})