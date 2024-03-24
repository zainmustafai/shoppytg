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
}