import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Image, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
const ProductCard = ({ product }) => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>
                        {
                            product?.title.slice(0, 20) + '...'
                        }
                    </Heading>
                    <Text>
                        {product?.description.slice(0, 100) + '...'}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        ${product?.price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default ProductCard
