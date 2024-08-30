import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'Login Slice',
    initialState: {
        value: false
    },
    reducers: {
        login: function (state, action) {
            state.value = !state.value
        },
    },
});

// Dispatch these to update the state in your component
export const { login } = loginSlice.actions;

// This part gets registered into the store.
export default loginSlice.reducer;