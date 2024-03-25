import React, { useState } from 'react';
// import {} from  'react-router-dom'
import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    VStack,
    Box,
    Select,
    useToast
} from '@chakra-ui/react';
import { addProduct, createProduct, updateProduct } from '../../../store/productSlice';

import { useDispatch } from 'react-redux';
import ShowConditional from '../../../components/ShowConditional/ShowConditional';
import { useNavigate } from 'react-router-dom';


const ProductForm = ({ onSubmit, initialProduct, formType }) => {
    const [formData, setFormData] = useState(initialProduct);
    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();

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
            // // DISPATCH CREATE PRODUCT ACTION
            // dispatch(createProduct({
            //     ...formData,
            //     id: Math.floor(Math.random() * 10000)
            // }));
            const dataWithID = {
                ...formData,
                id: Math.floor(Math.random() * 10000)
            }
            dispatch(addProduct(dataWithID));
            toast({
                title: 'Product Created Successfully!',
                description: "Product with id : " + formData.id + " has been created successfully!",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            handleReset();
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
        <form onSubmit={handleSubmit} aria-label="Product Form">
            <VStack spacing={4} align="stretch" maxW={"md"} m={"auto"} p={4}>
                <FormControl id="title">
                    <FormLabel htmlFor="title">Title</FormLabel>
                    <Input
                        autoFocus
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        aria-required="true"
                    />
                </FormControl>
                <FormControl id="price">
                    <FormLabel htmlFor="price">Price</FormLabel>
                    <Input
                        type="number"
                        name="price"
                        id="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        aria-required="true"
                    />
                </FormControl>
                <FormControl id="description">
                    <FormLabel htmlFor="description">Description</FormLabel>
                    <Textarea
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        aria-required="true"
                    />
                </FormControl>
                <FormControl id="category">
                    <FormLabel htmlFor="category">Category</FormLabel>
                    <Select
                        type="text"
                        name="category"
                        id="category"
                        value={formData.category}
                        onChange={(e) => {
                            setFormData({ ...formData, category: e.target.value })
                        }}
                        required
                        aria-required="true"
                    >
                        <option value="Men's Jackets">Men's Jackets</option>
                        <option value="jewel">Jewellery</option>
                    </Select>
                </FormControl>
                <FormControl id="image">
                    <FormLabel htmlFor="image">Image URL</FormLabel>
                    <Input
                        type="url"
                        name="image"
                        id="image"
                        value={formData.image}
                        onChange={handleChange}
                        required
                        aria-required="true"
                    />
                </FormControl>

                <Box textAlign="center">
                    <Button type="submit" colorScheme="teal" mt={4} w={"100%"}>
                        Submit
                    </Button>
                    {/* RESET FORM */}
                    <ShowConditional condition={formType === 'create' ? true : false}>
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
