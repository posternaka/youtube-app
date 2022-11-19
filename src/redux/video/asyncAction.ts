import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizza = createAsyncThunk<>( 
    'pizza/fetchPizzaStatus',
    async () => {
    }
)
