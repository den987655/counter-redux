import './App.css';
import {useEffect, useReducer, useState} from 'react';
import Counter from './Counter';
import SettingsCounter from './Settings-counter';
import {useDispatch} from 'react-redux';
import {addCounterAC, appReducer, resetCounterAC, saveSettingsAC} from './App-reducer';
import settingsCounter from './Settings-counter';


function App() {
    let [num, numSet] = useReducer(appReducer, 0);
    const [startValue, startValueSet] = useState(0)
    const [maxValue, maxValueSet] = useState(0)
    const [errorNum, setErrorNum] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        if (maxValue <= startValue || maxValue < 0 || startValue < 0) {
            setErrorNum(true);
        } else {
            setErrorNum(false);
        }
    }, [maxValue, startValue]);

    useEffect(() => {
        let startVal = localStorage.getItem('startVal')
        let maxVal = localStorage.getItem('maxVal')

        if (startVal) {
            let newVal = JSON.parse(startVal)
            startValueSet(newVal)
        }
        if (maxVal) {
            let newVal = JSON.parse(maxVal)
            maxValueSet(newVal)
        }

    }, []);

    function saveSettings(startValueSettings: number){
        localStorage.setItem('startVal', startValue.toString())
        localStorage.setItem('maxVal', maxValue.toString())
        dispatch(saveSettingsAC({startValueSettings}))
        numSet(startValueSettings)

    }

    function addCounter(numCount: number, maxValueCount: number) {
        dispatch(addCounterAC({numCount, maxValueCount}))
        // if (numCount < maxValueCount) {
        //     numSet(numCount + 1)
        // }

    }
    function resetCounter(resetNum: number) {
        dispatch(resetCounterAC({resetNum}))
        return numSet(resetNum)
    }


    return (
        <div className="App">
            <div className='container'>
                <SettingsCounter errorNum={errorNum} maxValue={maxValue} maxValueSet={maxValueSet} startValueSet={startValueSet} startValue={startValue} saveSettings={()=>saveSettings(startValue)} />
                <Counter errorNum={errorNum} maxValue={maxValue} startValue={startValue} num={num} addCounter={()=>addCounter(num, maxValue)} resetCounter={()=>resetCounter(num)} />
            </div>
        </div>
    )
}

export default App;
