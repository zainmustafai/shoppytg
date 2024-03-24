// productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productService } from "./services/productServices";
// FETCH PRODUCTS ASYNC THUNK
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await productService.getProducts(); // Your API call to fetch products
        console.log(response);
        return response;
    }
);

// PRODUCT STATE SLICE
const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;

export const selectAllProducts = (state) => state.products.products;
export const selectProductStatus = (state) => state.products.status;
export const selectProductError = (state) => state.products.error;

