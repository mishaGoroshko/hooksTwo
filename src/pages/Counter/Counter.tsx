import React, {useCallback, useMemo, useState} from 'react';
import {ViewCounter} from './viewCounter';
import {ButtonPlus} from './ButtonPlus';
import {Footer} from './Footer';

export const Counter = () => {
    console.log('Counter')

    const [count, setCount] = useState(0)
    const [year, setYear] = useState(2022)

    const onClickCounter = useCallback(() => setCount(count + 1), [count]);
    const onClickYear = useCallback(() => setYear(year + 1), [year]);

    const superYear = useMemo(() => {
        return year - 2022
    }, [])

    return (
        <div>
            <ViewCounter count={count}/>
            <ButtonPlus onClick={onClickCounter}/>
            <ButtonPlus onClick={onClickYear}/>
            <Footer year={superYear}/>
        </div>
    );
}
