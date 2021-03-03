import { Box, Text, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
export default function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <Box w="300" h="400" bg="green.800" color="white"
            position="fixed"
            zIndex="9996"
            right={20}
            top={20}
            p={5}
            borderRadius={2}
            shadow="dark-lg"
        > 
            <form>
                <Text color="white">Login</Text>
                <Input type="text" mt={5}
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <Text color="white" mt={5} mb={5}>Password</Text>
                <Input type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button mt={5} 
                    colorScheme="white" 
                    variant="outline"
                    onClick={() => alert("Login = " + login + "; Password = " + password) }
                >Submit</Button>
            </form>
        </Box>
    );
}