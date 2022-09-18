import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, decrementByTen } from '../../features/counter/counterSlice';
import './Home.css';


const Home = () => {
    const value = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className='homeContainer'>
            <div>
                <div className='partOne'>
                    <h1>{value}</h1>
                    <h1>{value}</h1>
                </div>
                <div className='partTwo'>
                    <button onClick={() => dispatch(increment())}>+</button>
                    <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
                    <button onClick={() => dispatch(decrementByTen(10))}>-10</button>
                    <button onClick={() => dispatch(decrement())}>-</button>
                </div>
                <div className='partThree'>
                    <h1>{value}</h1>
                    <h1>{value}</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;