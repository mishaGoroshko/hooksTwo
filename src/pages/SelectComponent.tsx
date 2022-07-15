import React from 'react';
import {withLocalStorageComponent} from '../components/WithLocalStorageComponent';
import {useLocalStorageSaving} from '../hooks/useLocalStorageSaving';

type SelectComponenttype = {
    values: any[]
    value?: string
}

export let SelectComponent: React.FC<SelectComponenttype> = ({
                                                                 values,
                                                                 value = '',
                                                                 ...props
                                                             }) => {

    // const [currentValue, setCurrentValue] = useState(value)
    //
    // const onChangeHandle = (e: ChangeEvent<HTMLSelectElement>) => {
    //     setCurrentValue(e.currentTarget.value)
    //     localStorage.setItem('select', JSON.stringify(e.currentTarget.value));
    // }
    //
    // useEffect(() => {
    //     const localText = localStorage.getItem('select')
    //     localText && setCurrentValue(JSON.parse(localText));
    // }, [])

    const {currentValue, onChange} = useLocalStorageSaving('select', value)


    return (
        <div>
            <select value={currentValue} onChange={onChange} {...props}>
                {values.map((o, i) => <option key={i} value={o}>{o}</option>)}
            </select>
        </div>
    );
}

// SelectComponent = withLocalStorageComponent('select')(SelectComponent)
