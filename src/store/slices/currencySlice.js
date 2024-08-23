import { createSlice } from "@reduxjs/toolkit";
const currecySlice = createSlice({
    name: "currency",
    initialState: "INR",
    reducers: {
        //action: (state, action_info) => { return update data to store}
        //state: current data inside the store
        //action_info: some information related to the action dispatched
        changeCurrency: (state, action) => {
            return action.payload;
        },
    },
});

//actions are used by components to do the data changes in the store
export const { changeCurrency } = currecySlice.actions;
//reducer is used by the store to manage the data
export default currecySlice.reducer;