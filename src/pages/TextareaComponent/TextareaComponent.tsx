import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './TextareaComponent.module.scss'
import {withLocalStorageComponent} from '../../components/WithLocalStorageComponent';
import {SelectComponent} from '../SelectComponent';
import {useLocalStorageSaving} from '../../hooks/useLocalStorageSaving';


type TextareaComponentType = {
    maxLength: number
    value?: string
}

export let TextareaComponent: React.FC<TextareaComponentType> = ({
                                                                     maxLength,
                                                                     value = '',
                                                                     ...props
                                                                 }) => {
    // const [currentValue, setCurrentValue] = useState(value)
    //
    // const onChangeTextHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     setCurrentValue(e.currentTarget.value)
    //     localStorage.setItem('app-state', JSON.stringify(e.currentTarget.value));
    // }
    //
    // useEffect(() => {
    //     const localText = localStorage.getItem('app-state')
    //     localText && setCurrentValue(JSON.parse(localText));
    // }, [])

    const {currentValue, onChange} = useLocalStorageSaving('textarea', value)

    return (
        <div className={s.textareaContainer}>
            <textarea value={currentValue}
                      onChange={onChange}
                      name=""
                      id=""
                      maxLength={maxLength}
                      className={s.textarea}
                      {...props}></textarea>
            <span
                className={maxLength - currentValue.length === 0 ? `${s.span} ${s.errorColor}` : s.span}>
                {maxLength - currentValue.length}
            </span>

        </div>
    );
}

// TextareaComponent = withLocalStorageComponent('textarea')(TextareaComponent)