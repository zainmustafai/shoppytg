import { Box, Button, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
    return (
        <Box h={"80vh"} bg={"black"} position={"relative"}>
            <Image src="/assets/hero.jpg" alt="hero" w={'100%'} h={'100%'} objectFit={"cover"} />
            {/* DARK OVERLAY opacity */}
            <Box bg={"black"} w={'100%'} h={'100%'} opacity={"80%"} position={"absolute"} zIndex={2} top={0} bottom={0} left={0} right={0} />
            {/* HERO TYPOGRAPHY */}
            <Box w={'100%'} h={'100%'} position={"absolute"} zIndex={3} top={0} bottom={0} left={0} right={0} padding={"10px"} >
                <Box textAlign={"center"} color={"white"} position={"relative"} top={"50%"} transform={"translateY(-50%)"} fontSize={"5rem"} fontWeight={"thin"} letterSpacing={'wide'}>
                    <Heading as={"h1"} fontSize={["2xl", "4xl", "6xl", "8xl"]} fontWeight={"thin"}>
                        Explore, shop, repeat again.
                    </Heading>
                    <Button rounded={"full"} variant={"outline"} colorScheme={"yellow"} size={"lg"} position={"relative"} top={"70%"} transform={"translateY(-50%)"} mt={20} px={16} py={8}>SHOP NOW</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Hero
