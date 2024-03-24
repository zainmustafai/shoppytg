import React, { useState } from 'react'
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    Checkbox,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Replace with your form submission logic
        // IF any field is empty, return
    };
    return (
        <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
            <Box textStyle={"h1"}>
                <Text fontSize={"4xl"} textAlign={"center"} > Register</Text>
            </Box>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                    <Input
                        required
                        autoFocus
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                    <Input
                        required
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                        required
                        type={formData.showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl >
                    <Box display={"flex"} alignItems={"center"} alignSelf={'center'} gap={4}>
                        <Checkbox id="showPassword"
                            name="showPassword"
                            value={formData.showPassword}
                            onChange={(e) => { setFormData({ ...formData, showPassword: e.target.checked }) }}
                            size={"lg"}
                        />
                        <FormLabel htmlFor="showPassword" mt={4}>Show Password</FormLabel>
                    </Box>
                </FormControl>
                <Button mt={4} colorScheme="blue" type="submit" w={"100%"} onClick={() => {
                    navigate('/')
                }}>
                    Register
                </Button>

                <Button mt={4} variant={"outline"} w={"100%"} onClick={() => {
                    navigate('/')
                }}>
                    Go Back
                </Button>
            </form>
        </Box>
    );
}

export default Register
