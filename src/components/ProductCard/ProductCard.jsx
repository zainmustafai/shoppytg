import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Image, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
const ProductCard = ({ product }) => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={product?.image}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    h={64}
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
