import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPizza } from './asyncAction';
import { IVideoSlice, YouTubeVideo, Status, Request } from './types';


const initialState: IVideoSlice = {
    items: [],
    request: {
        id: '',
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
        setFavorites(state, action: PayloadAction<Request>) {
            state.favoriteRequest.push(action.payload);
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

export const { setFavorites } = pizzaSlice.actions;
export default pizzaSlice.reducer;