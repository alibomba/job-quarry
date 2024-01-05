import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        isSomethingNew: false
    },
    reducers: {
        setIsSomethingNew: (state, action) => {
            state.isSomethingNew = action.payload;
        }
    }
});

export const { setIsSomethingNew } = notificationSlice.actions;
export default notificationSlice.reducer;