import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    count:0,
};
const CounterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increament:(state) => {
            state.count += 1;
        },
        decreament:(state) => {
            state.count -= 1;
        },
        reset:(state) => {
            state.count = 0;
        },
    },
});

export const{increament,decreament,reset} = CounterSlice.actions;
export default CounterSlice.reducer;