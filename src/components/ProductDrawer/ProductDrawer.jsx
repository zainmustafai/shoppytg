import { Button, useDisclosure, Image, Box, Text } from "@chakra-ui/react";
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';
import { useEffect, useState } from "react";

export default function ProductDrawer({ product, openDrawer, setDrawerProduct }) {
  const [size, setSize] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = ({ newSize }) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ['full'];

  return (
    <>
      {sizes.map((size) => (
        <Button
          w={"100%"}
          // variant={"outline"}
          onClick={() => handleClick(size)}
          key={size}
        >
          View
        </Button>
      ))}

      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        size={size === 'full' ? 'full' : 'md'}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent bg="gray.100">
          <DrawerCloseButton />
          <DrawerHeader bg="teal.500" color="white">{product.title}</DrawerHeader>
          <DrawerBody>
            <Box>
              <Image src={product.image} alt={product.title}
                onErrorCapture={(e) => {
                  e.target.src = 'https://via.placeholder.com/300';
                }} />
              <Text mt={4} fontSize="xl" fontWeight="bold" textAlign="center">Price: ${product.price}</Text>
              <Text mt={2} fontSize="xl">Category</Text>
              <Text mt={2} fontSize="md">{product.category}</Text>
              <Text mt={2} fontSize="xl">Description:</Text>
              <Text mt={2} fontSize="md">{product.description}</Text>
              <Text mt={2} fontSize="md" textAlign="center">Rating: {product?.rating?.rate ? product?.rating?.rate : 0} ({product?.rating?.count ? product?.rating?.count : 0} reviews)</Text>
            </Box>
          </DrawerBody>
          <DrawerFooter justifyContent="center">
            <Button variant="outline" colorScheme="teal" onClick={onClose}>Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
