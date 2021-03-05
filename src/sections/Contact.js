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
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

function Contact() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    return (
        <Flex
            justifyContent="space-around"
            w={["100%", "80%"]}
            p={10}
            mb={10}
            flexDirection={['column-reverse', 'row']}
        >
            <VStack flex={0.1} p={10} bg="whiteAlpha.300" shadow="dark-lg"
                alignItems="center"
                justifyContent="space-around"
                flexDirection={['row', 'column']}
                mt={[10, 0]}
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
            <Box flex={0.8} bg="whiteAlpha.300" shadow="dark-lg" p={[5, 10]} textAlign={["center", "auto"]}>
                <Text textStyle="h2" m={2}>Contact me</Text>
                <form> 
                    <Input type="email" placeholder="email" m={2} focusBorderColor="green.800"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <Input type="text" placeholder="subject" m={2} focusBorderColor="green.800"
                        value={subject}
                        onChange={(e) => {
                            setSubject(e.target.value);
                        }}
                    />
                    <Textarea
                        focusBorderColor="green.800"
                        placeholder="Message"
                        size="sm"
                        m={2}
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                    />
                    <Button bg="green.800" colorScheme="white" m={2}
                        onClick={() => { alert(email + " ; " + subject + " ; " + message) ; }}
                    >Send</Button>
                </form>
            </Box>
        </Flex>
    );
}

export default Contact;