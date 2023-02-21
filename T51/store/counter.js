import { createSlice } from "@reduxjs/toolkit";


//creating slice
export const counterSlice = createSlice({
    name: "counter",   //name of the slice of state to implement in empty store

    initialState: {  //initial state for slice of state
        value: 0,
    },

    reducers:{  //the reducer is used to manipulate the state

        //increment action 
        increment: (state) => {
            state.value +=1;
        },

        //decrement action
        decrement: (state) => {
            state.value -=1;
        },

        //incrementing the state value by the value (payload) carried by the action
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const {increment, decrement, incrementByAmount, resetValuetoZero} = counterSlice.actions;

export default counterSlice.reducer;
