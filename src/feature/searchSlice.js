import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../utils/status'
import { BASE_URL } from "../utils/apiURL";
import axios from 'axios';



const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchProducts: [],
        searchProductsStatus: STATUS.IDLE
    },
    reducers: {
        clearSearch: (state) => {
            state.searchProducts = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchProducts.pending, (state) => {
                state.searchProductsStatus = STATUS.LOADING;
            })
            .addCase(fetchSearchProducts.fulfilled, (state, action) => {
                state.searchProductsStatus = STATUS.SUCCEEDED;
                state.searchProducts = action.payload
            })
            .addCase(fetchSearchProducts.rejected, (state) => {
                state.searchProductsStatus = STATUS.FAILED;
            })
    }
})



export const fetchSearchProducts = createAsyncThunk("search/fetchSearchProducts", async (searchTerm) => {
    try {
        const res = await axios.get(`${BASE_URL}products/search?q=${searchTerm}`)
        // const res = await axios.get(`${BASE_URL}products/search?q=phone`)
        const data = await res.data
        console.log(data);
        return data.products
    } catch (error) {
        throw new Error("error request", error);
    }
})
export const { setSearchTerm, clearSearch } = searchSlice.actions;
export const getSearchProducts = (state) => state.search.searchProducts;
export const getSearchProductsStatus = (state) => state.search.searchProductsStatus;
export default searchSlice.reducer;


