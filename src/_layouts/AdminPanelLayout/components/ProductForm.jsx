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
    Select
} from '@chakra-ui/react';

const ProductForm = ({ onSubmit, initialProduct }) => {
    const [formData, setFormData] = useState(initialProduct);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                        onChange={handleChange}
                        required
                    >
                        <option value="electronics">Men's Jackets</option>
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
                </Box>
            </VStack>
        </form>
    );
};

export default ProductForm;
