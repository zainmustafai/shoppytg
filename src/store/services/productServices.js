import axios from "axios";

export const productService = {
    getProducts: async () => {
        try {
            const URL = import.meta.env.VITE_APP_API_URL + 'products';
            const response = await axios.get(URL);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    createProduct: async (product) => {
        try {
            const URL = import.meta.env.VITE_APP_API_URL + 'products';
            const response = await axios.post(URL, product);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    updateProduct: async (product) => {
        try {
            const URL = import.meta.env.VITE_APP_API_URL + `products/${product.id}`;
            const response = await axios.put(URL, product);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    deleteProduct: async (id) => {
        try {
            const URL = import.meta.env.VITE_APP_API_URL + `products/${id}`;
            const response = await axios.delete(URL);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}