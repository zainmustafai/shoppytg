import React, { useEffect } from 'react'
import { Box, Spinner, useToast } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
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
import ProductDrawer from '../ProductDrawer/ProductDrawer'
import ProductForm from '../../_layouts/AdminPanelLayout/components/ProductForm'
import ModalDialog from '../Modal/Modal'
import { HashLink } from 'react-router-hash-link'

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
        return <Box textAlign={"center"} p={10}>  <Spinner size='xl' /></Box>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }
    // HANDLERS:
    const handleDeleteClick = (id) => {
        // Prompt the user to confirm the deletion
        // If the user confirms, dispatch the deleteProduct action
        const isConfirmed = window.confirm("Are you sure you want to delete?");
        if (isConfirmed) {
            // dispatch the deleteProduct action
            dispatch(deleteProduct({ id }));
            toast({
                title: 'Product Deleted Successfully!',
                description: "Product with id : " + id + " has been deleted successfully!",
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
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
                                <Tr key={product.id} id={product.id}>
                                    <Td><HashLink
                                        to={`/admin#${product.id}`}
                                    >{product.id}</HashLink></Td>
                                    <Td> {product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}</Td>
                                    <Td>{product.category}</Td>
                                    <Td>{product.price}</Td>
                                    <Td>{product?.rating?.rate ? product?.rating?.rate : 0}/5  ({product?.rating?.count ? product?.rating?.count : 0}) </Td>
                                    <Td>
                                        <ButtonGroup>
                                            <ProductDrawer product={product} />
                                            <ModalDialog
                                                modalSize={"xl"}
                                                tirggerText='Edit'
                                            >
                                                <ProductForm
                                                    formType={"update"}
                                                    initialProduct={product}
                                                />
                                            </ModalDialog>
                                            <Button colorScheme="red" variant="solid" w={"100%"} onClick={() => {
                                                handleDeleteClick(product?.id)
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
        </div >
    )
}

export default ProductsTable
