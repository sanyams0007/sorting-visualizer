import React, { useState, useEffect } from 'react'
import './SortingVisualizer.css';


const SortingVisualizer = (props) => {
    //set initial state to be empty
    const [state, setState] = useState({
        array: [],
    });


    //this hook calls method in it only when it is loaded first time i.e dependency array is empty
    useEffect(() => {
        resetArray();
    }, []);

    // generates random no. between 5 and 1000 every time 
    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //create an array with 100 random numbers and resets the state of app.
    const resetArray = () => {
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(5, 1000));
        }
        setState({ array });
    }

    const { array } = state;
    return (
        <div className='array-container'>
            {array.map((value, idx) => { return <div className='array-bar' key={idx}>{value}</div> })}
        </div>
    )
}


export default SortingVisualizer;