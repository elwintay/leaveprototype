import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie'

const userSlice = createSlice({
    name: 'User Slice',
    initialState: {
        value: Cookies.get('username')
    },
    reducers: {
        remove: function (state, action) {
        },
        add: function (state, action) {
            state.value = action.payload
        }
    },
});

// Dispatch these to update the state in your component
export const { remove, add } = userSlice.actions;

// This part gets registered into the store.
export default userSlice.reducer;