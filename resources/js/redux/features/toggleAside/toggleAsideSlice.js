import { createSlice } from "@reduxjs/toolkit";

const toggleAside = createSlice({
    name: "toggleAside",
    initialState: true,
    reducers: {
        toggle: (state, action) => {
            return !state;
        }
    }
});

export const { toggle } = toggleAside.actions;
export default toggleAside.reducer;
