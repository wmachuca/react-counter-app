import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter((c) => c + 1);
    }
    const handleReset = () => {
        setCounter(() => value);
    }
    const handleSubstract = () => {
        setCounter((c) => c - 1);
    }

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button id="btnAdd" onClick={handleAdd}>+1</button>
            <button id="btnReset" onClick={handleReset}>Reset</button>
            <button id="btnSubstract"onClick={handleSubstract}>-1</button>
        </Fragment>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 1
}

export default CounterApp;