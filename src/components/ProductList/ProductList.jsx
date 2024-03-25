// ProductList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectAllProducts, selectProductStatus, selectProductError } from "../../store/productSlice";
import ProductCard from '../ProductCard/ProductCard';
import { Box, Heading, Spinner, Wrap, WrapItem } from '@chakra-ui/react';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const status = useSelector(selectProductStatus);
    const error = useSelector(selectProductError);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return <Box textAlign={"center"} p={10}>  <Spinner size='xl' /></Box>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <Box maxW="8xl" mx="auto" px={4}>
            <Heading as="h1" size="3xl" textAlign="center" mt={8} mb={4} py={10}>
                Our Products
            </Heading>
            <Wrap spacing={8} justify="center">
                {products.map(product => (
                    <WrapItem key={product.id}>
                        <ProductCard product={product} />
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    );
};

export default ProductList;
