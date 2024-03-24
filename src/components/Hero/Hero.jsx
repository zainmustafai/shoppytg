import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
    return (
        <Box  h={"80vh"} bg={"black"} position={"relative"}>
            <Image src="/src/assets/hero.jpg" alt="hero" w={'100%'} h={'100%'} objectFit={"cover"} />
            {/* DARK OVERLAY opacity */}
            <Box bg={"black"} w={'100%'} h={'100%'} opacity={"80%"} position={"absolute"} zIndex={2} top={0} bottom={0} left={0} right={0} />
            {/* HERO TYPOGRAPHY */}
            <Box w={'100%'} h={'100%'} position={"absolute"} zIndex={3} top={0} bottom={0} left={0} right={0} padding={"10px"} >
                <Box textAlign={"center"} color={"white"} position={"relative"} top={"50%"} transform={"translateY(-50%)"} fontSize={"5rem"} fontWeight={"thin"} letterSpacing={'wide'}>
                    <h1>PRODUCT FOR SOUL</h1>
                    <Button variant={"outline"} colorScheme={"yellow"} size={"lg"} position={"relative"} top={"50%"} transform={"translateY(-50%)"}>SHOP NOW</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Hero
