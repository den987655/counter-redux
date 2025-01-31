import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './store';
import {useEffect, useReducer, useState} from 'react';
import {addCounterAC, appReducer, errorAC, resetCounterAC, saveSettingsAC, StateType} from '../App-reducer';
import SettingsCounter from '../Settings-counter';
import Counter from '../Counter';
import {json} from 'node:stream/consumers';

function AppWithRedux() {
    let {num, startValue, maxValue, errorNum}: StateType = useSelector((state: RootState) => state.counter);
    // const [startValue, startValueSet] = useState(0)
    // const [maxValue, maxValueSet] = useState(0)
    // const [errorNum, setErrorNum] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        function showError(error: boolean) {
            if (maxValue <= startValue || maxValue < 0 || startValue < 0) {
                dispatch(errorAC({error}))
                // setErrorNum(true);
            }
            // } else {
            //     // setErrorNum(false);
            //     dispatch(errorAC({false}))
            // }
        }

    }, [maxValue, startValue]);

    useEffect(() => {

       function getSettings(start: string | null, max: string | null) {
           start = localStorage.getItem('startVal')
           let maxVal = localStorage.getItem('maxVal')
           if (start) {
               let newVal = JSON.parse(start)
               // startValueSet(newVal)
           }
           if (maxVal) {
               let newVal = JSON.parse(maxVal)
               // maxValueSet(newVal)
           }
       }
    }, []);

    function saveSettings(startValueSettings: number){
        localStorage.setItem('startVal', startValue.toString())
        localStorage.setItem('maxVal', maxValue.toString())
        dispatch(saveSettingsAC({startValueSettings}))
        // numSet(startValueSettings)

    }

    function addCounter(numCount: number, maxValueCount: number) {
        dispatch(addCounterAC({numCount, maxValueCount}))
        // if (numCount < maxValueCount) {
        //     numSet(numCount + 1)
        // }

    }
    function resetCounter(resetNum: number) {
        dispatch(resetCounterAC({resetNum}))
        // return numSet(resetNum)
    }


    return (
        <div className="App">
            <div className='container'>
                <SettingsCounter errorNum={errorNum} maxValue={maxValue} maxValueSet={maxValue} startValueSet={startValue} startValue={startValue} saveSettings={()=>saveSettings(startValue)} />
                <Counter errorNum={errorNum} maxValue={maxValue} startValue={startValue} num={num} addCounter={()=>addCounter(num, maxValue)} resetCounter={()=>resetCounter(num)} />
            </div>
        </div>
    )
}