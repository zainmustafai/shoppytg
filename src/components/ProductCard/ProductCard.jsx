import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Image, Divider, ButtonGroup, Button, Text, Box, } from '@chakra-ui/react'
import ProductDrawer from '../ProductDrawer/ProductDrawer'
const ProductCard = ({ product }) => {

    return (
        <Card maxW='sm' cursor={"pointer"}>
            <CardBody>
                <Image
                    src={product?.image}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    h={64}
                    onErrorCapture={(e) => {
                        e.target.src = 'https://via.placeholder.com/300';
                    }}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>
                        {
                            product?.title.slice(0, 20) + '...'
                        }
                    </Heading>
                    <Text h={70}>
                        {product?.description.slice(0, 100) + '...'}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        ${product?.price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider color={"gray"} />
            <CardFooter>
                <ButtonGroup spacing='2' display={"flex"} w={"100%"} justifyContent={"space-between"}>
                    <ProductDrawer product={product} />
                    <Button variant='solid' colorScheme='blue' w={"100%"} >
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue' w={"100%"}>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
            <Box w={'100%'} textAlign={"center"}>
            </Box>
        </Card>
    )
}

export default ProductCard
