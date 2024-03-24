import React from 'react'
import { Box, Button, Container, Divider, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <Box mx={"auto"} maxWidth={"6xl"} display={"flex"} justifyContent={'space-between'} p={4}>
                <Box
                    display={"flex"}
                    alignItems={"center"}
                >
                    <Image
                        src="/assets/logo.png"
                        alt="react logo"
                        boxSize="50px"
                        rounded={"full"}
                    />
                    <Text
                        fontSize={"2xl"}
                        fontWeight={"bold"}
                        letterSpacing={"wide"}
                        color={"gray.800"}
                        ml={2}
                    >
                        SHOPPY
                    </Text>
                </Box>

                <Link to={'/register'}>
                    <Button>
                        Register
                    </Button>
                </Link>
            </Box>
            <Divider />
        </nav>
    )
}

export default Navbar
