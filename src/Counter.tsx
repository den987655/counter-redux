import React from 'react';
import {Button} from './Button';

type CounterPropsType = {
    maxValue: number
    startValue: number
    num: number
    addCounter: () => void
    resetCounter: () => void
    errorNum: boolean
}

const Counter = ({errorNum, maxValue, startValue, num, addCounter, resetCounter}: CounterPropsType) => {
    const isErrorCounter = num >= maxValue || maxValue <= 0 || startValue <= 0 || maxValue <= startValue;
    const numError =
        maxValue <= 0 ? 'макс зн меньше 0 или равно 0'
            : startValue <= 0 ? 'старт меньше 0 или равно 0'
                : maxValue <= startValue ? 'макс зн меньше стартового зн либо равно'
                    : num

    const error = num >= maxValue || num < 0 || startValue < 0
    const styleCount = {
        color: isErrorCounter ? 'red' : '#fff'
    }



    return (
        <div className='counter-border'>
            <div className="counter">
                <div className="counter-view">
                    <span className='counter-num' style={styleCount}>{numError}</span>
                </div>
                <div className="btn-container">
                    <Button onClick={addCounter} disabled={errorNum} name={'inc'}/>
                    <Button onClick={resetCounter} name={'reset'}/>
                </div>

            </div>
        </div>
    );
};

export default Counter;