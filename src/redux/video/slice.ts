import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPizza } from './asyncAction';
import { IVideoSlice, YouTubeVideo, Status } from './types';
import { v4 as uuidv4 } from 'uuid';


const initialState: IVideoSlice = {
    items: [],
    request: {
        id: uuidv4(),
        q: '',
        maxResult: 5,
        sort: 'decs'
    },
    favoriteRequest: [],
    status: Status.LOADING,
}

const pizzaSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<YouTubeVideo[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizza.pending, (state) => {
                state.status = Status.LOADING;
                state.items = [];
            })
            .addCase(fetchPizza.fulfilled, (state, action: any) => {
                state.status = Status.SUCCESS;
                state.items = action.payload;
            })
            .addCase(fetchPizza.rejected, (state) => {
                state.status = Status.ERROR;
                state.items = [];
            })
    },
})

export const { setData } = pizzaSlice.actions;
export default pizzaSlice.reducer;