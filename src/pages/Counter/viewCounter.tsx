import React from 'react';

type ViewCounterType = {
    count: number
}

export const ViewCounter = React.memo<ViewCounterType>(({count}) => {
    console.log('ViewCounter')

    return (
        <div style={{fontSize: '30px', fontWeight: 'bold'}}>
            {count}
        </div>
    );
})