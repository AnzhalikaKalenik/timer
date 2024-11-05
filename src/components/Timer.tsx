import React, { useEffect, useState } from 'react';
import Button from './Button';
import styled from 'styled-components';

const SDiv = styled.div`
    font-size: 28px;
    padding-top: 10px;
`;

const Timer: React.FC = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secondsString = String(seconds % 60).padStart(2, '0');
    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [isRunning]);

    function handleClickStart() {
        setIsRunning(prev => !prev);
    }

    function handleClickReset() {
        if (isRunning) {
            setIsRunning(false);
        }
        if (!isRunning) {
            setSeconds(0);
            setIsRunning(false);
        }
    }

    return (
        <>
            <h3 style={{ fontSize: '36px' }}>Компонент Timer</h3>
            <SDiv>
                {minutesString}:{secondsString}
            </SDiv>
            <Button isRunning={isRunning} text={isRunning ? 'пауза' : 'запустить'} onClick={handleClickStart}></Button>
            <Button text='сбросить' onClick={handleClickReset}></Button>
        </>
    );
};

export default Timer;
