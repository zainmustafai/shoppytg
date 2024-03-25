import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    VStack,
    Center,
    Image,
    Box,
    Select,
    useToast
} from '@chakra-ui/react';
import {  createProduct, updateProduct } from '../../../store/productSlice';

import { useDispatch } from 'react-redux';
import ShowConditional from '../../../components/ShowConditional/ShowConditional';


const ProductForm = ({ onSubmit, initialProduct, formType }) => {
    const [formData, setFormData] = useState(initialProduct);
    const dispatch = useDispatch();
    const toast = useToast();

    // HANDLERS:
    const handleReset = () => {
        setFormData({
            title: '',
            price: 0,
            image: '',
            description: '',
            category: '',
            rating: {
                rate: 0.00,
                count: 0
            }
        })
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (formType === 'create') {
            // DISPATCH CREATE PRODUCT ACTION
            dispatch(createProduct(formData));
            // dispatch(addProduct(responseProduct));
        } else {
            // DISPATCH UPDATE PRODUCT ACTION
            dispatch(updateProduct(formData));
            toast({
                title: 'Product Updated Successfully!',
                description: "Product with id : " + formData.id + " has been updated successfully!",
                status: 'success',
                duration: 3000,
                isClosable: true,

            })

        }
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch"
                maxW={"md"} m={"auto"} p={4}>
                <FormControl id="title">
                    <FormLabel>Title</FormLabel>
                    <Input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </FormControl>
                <FormControl id="price">
                    <FormLabel>Price</FormLabel>
                    <Input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </FormControl>
                <FormControl id="description">
                    <FormLabel>Description</FormLabel>
                    <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </FormControl>
                <FormControl id="category">
                    <FormLabel>Category</FormLabel>
                    <Select
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={(e) => {
                            setFormData({ ...formData, category: e.target.value })
                        }}
                        required
                    >
                        <option value="Men's Jackets">Men's Jackets</option>
                        <option value="jewel">Jewellery</option>
                    </Select>
                </FormControl>
                <FormControl id="image">
                    <FormLabel>Image URL</FormLabel>
                    <Input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        required
                    />
                </FormControl>

                <Box textAlign="center">
                    <Button type="submit" colorScheme="teal" mt={4} w={"100%"}>
                        Submit
                    </Button>
                    {/* RESET FORM */}
                    <ShowConditional condition={formType === 'create'}>
                        <Button variant={"outline"} mt={4} w={"100%"} onClick={handleReset}>
                            RESET
                        </Button>
                    </ShowConditional>
                </Box>
            </VStack>
        </form>
    );
};

export default ProductForm;