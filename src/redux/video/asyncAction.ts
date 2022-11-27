import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { YouTubeResult, YouTubeVideo } from "./types";

export const fetchPizza = createAsyncThunk<YouTubeVideo[], string>( 
    'pizza/fetchPizzaStatus',
    async (value) => {
        const { data }  = await axios.get<YouTubeResult>(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value}&maxResults=5&type=video&key=AIzaSyDhVD6w4H7iP-d8c-n8XfNSzGzTcTu5hTU`);

        return data?.items;
    }
)
