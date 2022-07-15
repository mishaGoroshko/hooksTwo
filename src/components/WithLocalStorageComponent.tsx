import React, {ChangeEvent, useEffect, useState} from 'react';

export const withLocalStorageComponent = (keyStorage: string) => (Component: React.FC<any>) => {
    return ({value, ...props}: any) => {

        const [currentValue, setCurrentValue] = useState(value)

        const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            setCurrentValue(e.currentTarget.value)
            localStorage.setItem(keyStorage, JSON.stringify(e.currentTarget.value));
        }

        useEffect(() => {
            const localText = localStorage.getItem(keyStorage)
            localText && setCurrentValue(JSON.parse(localText));
        }, [])

        return <Component {...props} value={currentValue} onChange={onChange}/>
    }
}