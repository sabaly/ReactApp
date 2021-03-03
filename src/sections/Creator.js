import { Flex, Box, Image, Text, HStack, Center, Button } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Creator() {
    return (
        <Flex justifyContent="space-between" alignItems="center" p={5} 
            w="80%"
            mx="auto"
        >
            <Box  flex="0.5">
                <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" borderRadius="50%"/>
            </Box>
            <Box flex="1" p={10} pl={20}>
                <Text color="gray.900" textStyle="h1">
                    Segun Adebayo
                </Text>
                <Text color="green.800" textStyle="h2" fontStyle="italic">The creator</Text>
                <Text color="gray.800" pt={5}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus lacus nunc, sed pharetra nulla mattis eu. Proin ac odio et purus accumsan suscipit. Vestibulum mi ipsum, mattis sit amet tempus sed, malesuada quis erat. Nam ac elit congue ligula elementum porttitor sed vel est. Aenean luctus semper lectus, eget hendrerit neque lobortis id. Nunc posuere nisi id nibh dapibus pretium. Cras vitae nibh sit amet est posuere bibendum non fringilla nunc. Integer ornare sapien vel condimentum egestas. Suspendisse potenti. Donec gravida bibendum nisl sit amet vestibulum. Integer venenatis feugiat neque, at consectetur arcu consectetur eget.
                </Text>
                <HStack pt={5}>
                    <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                        Facebook
                    </Button>
                    <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
                        Twitter
                    </Button>
                    <Button colorScheme="linkedin" leftIcon={<FaLinkedin />}>
                        Linkedin
                    </Button>
                </HStack>
            </Box>
        </Flex>
    );
}

export default Creator;