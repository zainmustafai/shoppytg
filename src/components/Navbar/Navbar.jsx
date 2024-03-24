import React from 'react'
import { Box, Button, Container, Divider, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <Box mx={"auto"} maxWidth={"6xl"} display={"flex"} justifyContent={'space-between'} p={4}>
                <Image
                    src="/src/assets/logo.png"
                    alt="react logo"
                    boxSize="50px"
                    rounded={"full"}
                />

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
