import React, { useEffect } from 'react'
import { useToast } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    ButtonGroup,
    Button,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, fetchProducts, selectAllProducts, selectProductError, selectProductStatus } from '../../store/productSlice'

const ProductsTable = () => {
    const toast = useToast();
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
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }
    // HANDLERS:
    const handleDeleteClick = (id) => {
        console.log(`Delete product with id: ${id}`)
        // Prompt the user to confirm the deletion
        // If the user confirms, dispatch the deleteProduct action
        const isConfirmed = window.confirm("Are you sure you want to delete?");
        toast({
            title: 'Product Deleted Successfully!',
            description: "Product with id : " + id + " has been deleted successfully!",
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
        if (isConfirmed) {
            // dispatch the deleteProduct action
            dispatch(deleteProduct({ id }));
        }
    }

    return (
        <div>
            <TableContainer maxW={"1280px"} m="auto" >
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>PRODUCTS</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Prod.ID</Th>
                            <Th>Title</Th>
                            <Th>Category</Th>
                            <Th>Price</Th>
                            <Th>Ratings</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            products.map(product => (
                                <Tr key={product.id}>
                                    <Td>{product.id}</Td>
                                    <Td>{product.title.slice(0, 20)}...</Td>
                                    <Td>{product.category}</Td>
                                    <Td>{product.price}</Td>
                                    <Td>{product.rating.rate}/5  ({product.rating.count})</Td>
                                    <Td>
                                        <ButtonGroup>
                                            <Button colorScheme="teal" variant="solid">
                                                Edit
                                            </Button>
                                            <Button colorScheme="red" variant="solid" onClick={() => {
                                                handleDeleteClick(product.id)
                                            }}>
                                                Delete
                                            </Button>
                                        </ButtonGroup>
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ProductsTable
