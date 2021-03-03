import { 
        Box, 
        Flex, 
        Input, Textarea, 
        Square, 
        VStack, 
        Button,
        Text
    } from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";


function Contact() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    return (
        <Flex
            justifyContent="space-around"
            w="80%"
            p={10}
            mb={10}
        >
            <VStack flex={0.1} p={10} bg="whiteAlpha.300" shadow="dark-lg"
                alignItems="center"
                justifyContent="space-around"
            >
                <Square size="40px" bg="green.800" color="white" cursor="pointer">
                    <FaWhatsapp />
                </Square>
                <Square size="40px" bg="green.800" color="white" cursor="pointer">
                    <FaFacebook />
                </Square>
                <Square size="40px" bg="green.800" color="white" cursor="pointer">
                    <FaLinkedin />
                </Square>
            </VStack>
            <Box flex={0.8} bg="whiteAlpha.300" shadow="dark-lg" p={10}>
                <Text textStyle="h2" m={2}>Contact me</Text>
                <form onSubmit={() => { alert(email + " ; " + subject + " ; " + message) ; }}> 
                    <Input type="email" placeholder="email" m={2} focusBorderColor="green.900"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <Input type="text" placeholder="subject" m={2} focusBorderColor="green.900"
                        value={subject}
                        onChange={(e) => {
                            setSubject(e.target.value);
                        }}
                    />
                    <Textarea
                        focusBorderColor="green.900"
                        placeholder="Message"
                        size="sm"
                        m={2}
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                    />
                    <Button bg="green.800" colorScheme="white" m={2}>Send</Button>
                </form>
            </Box>
        </Flex>
    );
}

export default Contact;