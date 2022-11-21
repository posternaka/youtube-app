import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPizza } from './asyncAction';
import { IVideoSlice, Video, Status } from './types';

const initialState: IVideoSlice = {
    items: [],
    status: Status.LOADING,
}

const pizzaSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<Video[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizza.pending, (state) => {
                state.status = Status.LOADING;
                state.items = [];
            })
            .addCase(fetchPizza.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = Status.SUCCESS;
            })
            .addCase(fetchPizza.rejected, (state) => {
                state.status = Status.ERROR;
                state.items = [];
            })
    },
})

export const { setData } = pizzaSlice.actions;
export default pizzaSlice.reducer;