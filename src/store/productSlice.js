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

// CREATE PRODUCT ASYNC THUNK
export const createProduct = createAsyncThunk(
    'products/createProduct',
    async (product) => {
        const response = await productService.createProduct(product);
        console.log("SERVER RESPONSE", response);
        return response;
    }

);

// UPDATE PRODUCT ASYNC THUNK
export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async (product) => {
        const response = await productService.updateProduct(product);
        return response;
    }
);

// DELETE PRODUCT ASYNC THUNK
export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (id) => {
        const response = await productService.deleteProduct(id);
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
    reducers: {
        // Add a reducer for adding a new product
        // Add a reducer for updating a product
        // Add a reducer for deleting a product

        addProduct: (state, action) => {
            state.products.push(action.payload);
        },


    },
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

        //CREATE PRODUCT REDUCERS
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.products.push(action.payload);
        });

        //UPDATE PRODUCT REDUCERS
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            const updatedProduct = action.payload;
            const existingProduct = state.products.find(product => product.id === updatedProduct.id);
            if (existingProduct) {
                existingProduct.title = updatedProduct.title;
                existingProduct.price = updatedProduct.price;
                existingProduct.image = updatedProduct.image;
                existingProduct.description = updatedProduct.description;
                existingProduct.category = updatedProduct.category;
                existingProduct.rating = updatedProduct.rating;
            }

        });

        //DELETE PRODUCT REDUCERS
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            const { id } = action.payload;
            console.log("Product with id : ", id, " has been deleted successfully!");
            state.products = state.products.filter(product => product.id !== id);
        });
    },
});

export default productSlice.reducer;

export const selectAllProducts = (state) => state.products.products;
export const selectProductStatus = (state) => state.products.status;
export const selectProductError = (state) => state.products.error;

export const { addProduct } = productSlice.actions;