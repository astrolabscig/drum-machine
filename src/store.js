import { configureStore, createSlice } from '@reduxjs/toolkit';

//create a slice to manage text display
const displaySlice = createSlice({
    name: 'display',
    initialState: 'Play a sound',
    reducers: {
        setDisplay: (state, action) =>  {
            return action.payload;
        }
    }
});

export const { setDisplay} = displaySlice.actions;

//create the store
const store = configureStore({
    reducer: {
        display: displaySlice.reducer
    }
});

export default store;