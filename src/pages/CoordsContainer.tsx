import React, {useState, MouseEvent, useEffect} from 'react';
import './CoordsContainer.css';

export const CoordsContainer: React.FC = (props) => {
    const [coords, setCoords] = useState<{ x: number, y: number }>({x: 0, y: 0})
    const [age, setAge] = useState(0)
    const [id, setId] = useState<NodeJS.Timer>()

    const stopTimeOutHandle = () => clearInterval(id)

    useEffect(() => {
        const Id = setInterval(() => {
            setAge(state => state + 1)
        }, 1000)
        setId(Id)
        return () => clearInterval(Id)

    }, [])


    const style = {left: `${coords.x}px`, top: `${coords.y}px`}

    const moveSquareHandle = (e: MouseEvent<HTMLDivElement>) => {
        setCoords({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY})
    }

    return (
        <>
            coords: <div className='area' onClick={moveSquareHandle}>
            <div className='point'
                 style={style}/>
        </div>
            <ButtonBlock {...props} age={age} setAge={setAge}
                             stopTimeOutHandle={stopTimeOutHandle}/>
        </>

    );
}


type AppType = {
    age: number
    setAge: (age: number) => void
    stopTimeOutHandle: () => void
}

export const ButtonBlock: React.FC<AppType> = ({age = 33, setAge, stopTimeOutHandle}) => {
    return (
        <div>
            age: {age}
            <button onClick={() => setAge(age + 1)}>+</button>
            <button onClick={stopTimeOutHandle}>STOP</button>
        </div>
    );
}
