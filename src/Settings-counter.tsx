import React, {useEffect, useState} from 'react';
import {Button} from './Button';

type SettingTypeProps = {
    maxValue: number
    startValue: number
    maxValueSet: (maxValue: number)=>void
    startValueSet: (startValue: number)=>void
    saveSettings: ()=>void
    errorNum: boolean
}

const SettingsCounter = ({errorNum, maxValue, maxValueSet, startValueSet, startValue, saveSettings}:SettingTypeProps) => {

    const isError = maxValue <= 0 || startValue <= 0 || maxValue <= startValue
    return (
        <div className='counter-border'>
            <div className='settings-counter'>
                <div className='setting-value'>
                    <div>
                        <span className='text'>max-value</span>
                        <input
                            placeholder="Введите макс зн"
                            type="number"
                            value={maxValue}
                            onChange={e => maxValueSet(+e.target.value)}
                        />
                    </div>
                    <div>
                        <span className="text">start-value</span>
                        <input
                            placeholder="Введите нач зн"
                            type="number"
                            value={startValue}
                            onChange={e => startValueSet(+e.target.value)}
                        />
                    </div>
                </div>
                <div className="btn-setting">
                    <Button onClick={saveSettings} name={'set'} disabled={isError}/>
                </div>

            </div>
        </div>
    );
};

export default SettingsCounter;