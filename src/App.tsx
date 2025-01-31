import './App.css';
import {useEffect, useState} from 'react';
import Counter from './Counter';
import SettingsCounter from './Settings-counter';


function App() {
    let [num, numSet] = useState(0);
    const [startValue, startValueSet] = useState(0)
    const [maxValue, maxValueSet] = useState(0)
    const [errorNum, setErrorNum] = useState(false);

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

    function saveSettings(){
        localStorage.setItem('startVal', startValue.toString())
        localStorage.setItem('maxVal', maxValue.toString())
        numSet(startValue)
    }

    function addCounter() {
        if (num < maxValue) {
            numSet(num + 1)
        }
    }

    function resetCounter() {
        return numSet(0)
    }

    return (
        <div className="App">
            <div className='container'>
                <SettingsCounter errorNum={errorNum} maxValue={maxValue} maxValueSet={maxValueSet} startValueSet={startValueSet} startValue={startValue} saveSettings={saveSettings} />
                <Counter errorNum={errorNum} maxValue={maxValue} startValue={startValue} num={num} addCounter={addCounter} resetCounter={resetCounter} />
            </div>
        </div>
)
}

export default App;
