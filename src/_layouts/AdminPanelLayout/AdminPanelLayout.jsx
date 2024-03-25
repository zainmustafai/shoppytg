import { Box, Button, Divider, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductsTable from '../../components/ProductsTable/ProductsTable'
import ProductForm from './components/ProductForm'
import ShowConditional from '../../components/ShowConditional/ShowConditional'

const AdminPanelLayout = () => {
    const [showForm, setShowForm] = useState(false);


    return (
        <div>
            <Box>
                <header>
                    <Box display={"flex"} alignItems={"center"} p={8} gap={4}>
                        <Link to={'/'}>
                            <Button>
                                Back to Home
                            </Button>
                        </Link>
                        <Heading as={"h2"}>
                            Admin Panel
                        </Heading>
                    </Box>
                </header>
                <Divider />
                <Heading as={"h2"} m={8} textAlign={"center"}>
                    Task 2 : Product Data Management
                </Heading>
                <Divider />
            </Box>

            <Box
                display={"flex"}
                maxW={"8xl"}
                justifyContent={"end"}
            >
                <Button onClick={() => setShowForm(!showForm)}
                    m={4}
                    variant={"outline"}
                    bg={showForm ? 'red.500' : 'green.400'}
                >
                    {
                        showForm ? 'Close' : 'Create New Product'
                    }
                </Button>
            </Box>
            <ShowConditional isVisble={showForm}>
                <ProductForm
                    formType={'create'}
                    initialProduct={{
                        title: '',
                        price: 0,
                        description: '',
                        category: '',
                        rating: {
                            rate: 0.00,
                            count: 0
                        }
                    }}
                    onSubmit={(product) => {
                        console.log(product);
                    }}
                />
            </ShowConditional>

            <Box m={"auto"} overflow={"auto"}>
                <ProductsTable />
            </Box>
        </div>
    )
}

export default AdminPanelLayout
