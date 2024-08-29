
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increament,decreament,reset } from "./redux/CounterSlice";


const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={() => dispatch(increament())}>Increment</button>
            <button onClick={() => dispatch(decreament())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Counter;