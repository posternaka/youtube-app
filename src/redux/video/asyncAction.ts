import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Video } from "./types";

export const fetchPizza = createAsyncThunk<Video[]>( 
    'pizza/fetchPizzaStatus',
    async (params) => {
        const { data } = await axios.get<Video[]>(``);

        return data;
    }
)
