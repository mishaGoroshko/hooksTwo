import {ChangeEvent, useEffect, useState} from 'react';

export const useLocalStorageSaving = (keyStorage: string, value: string) => {
    const [currentValue, setCurrentValue] = useState(value)

    const onChange = (e: ChangeEvent<any>) => {
        setCurrentValue(e.currentTarget.value)
        localStorage.setItem(keyStorage, JSON.stringify(e.currentTarget.value));
    }

    useEffect(() => {
        const localText = localStorage.getItem(keyStorage)
        localText && setCurrentValue(JSON.parse(localText));
    }, [])

    return {currentValue, onChange}
}