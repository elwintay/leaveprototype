import { createSlice } from '@reduxjs/toolkit';

const leaveSlice = createSlice({
    name: 'Leave Slice',
    initialState: {
        value: []
        
    },
    reducers: {
        remove: function (state, action) {
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
                credentials: 'include'
            };
            fetch(`http://localhost:4000/api/leave/${action.payload}`, requestOptions)
                .then(res => {if (res.ok) {
                    if (!res.ok) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                      }
                    return res.json();
                }})
                .then(data => console.log(data))
                .catch(err => {
                    console.log(err)
            })
            state.value = state.value.filter((leave) => leave._id !== action.payload)
        },
        add: function (state, action) {
            state.value.push(action.payload)
        },
        update: function(state, action){
            state.value = action.payload
        }
    },
});

// Dispatch these to update the state in your component
export const { remove, add, update } = leaveSlice.actions;

// This part gets registered into the store.
export default leaveSlice.reducer;