import { Flex, Box, Image, Text, HStack, Center, Button } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

function Creator() {
    return (
        <Flex justifyContent="space-between" alignItems="center" p={5} 
            w={[ "100%", "80%"]}
            mx="auto"
            flexDirection={['column', 'row']}
        >
            <Box  flex="0.5">
                <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" borderRadius="50%"/>
            </Box>
            <Box flex="1" p={[5, 10]} pl={[0, 20]} textAlign={["center", "auto"]}>
                <Text color="gray.900" textStyle="h1" textAlign={["center", "auto"]}>
                    Segun Adebayo
                </Text>
                <Text color="green.800" textStyle="h2" fontStyle="italic" textAlign={["center", "auto"]}>The creator</Text>
                <Text color="gray.800" pt={5}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus lacus nunc, sed pharetra nulla mattis eu. Proin ac odio et purus accumsan suscipit. Vestibulum mi ipsum, mattis sit amet tempus sed, malesuada quis erat. Nam ac elit congue ligula elementum porttitor sed vel est. Aenean luctus semper lectus, eget hendrerit neque lobortis id. Nunc posuere nisi id nibh dapibus pretium. Cras vitae nibh sit amet est posuere bibendum non fringilla nunc. Integer ornare sapien vel condimentum egestas. Suspendisse potenti. Donec gravida bibendum nisl sit amet vestibulum. Integer venenatis feugiat neque, at consectetur arcu consectetur eget.
                </Text>
                <HStack pt={[0, 5]} flexWrap="wrap">
                    <Button colorScheme="facebook" leftIcon={<FaFacebook />} fontSize={[12, 16]} m={[5, 0]}>
                        Facebook
                    </Button>
                    <Button colorScheme="twitter" leftIcon={<FaTwitter />} fontSize={[12, 16]} m={[5, 0]}>
                        Twitter
                    </Button>
                    <Button colorScheme="linkedin" leftIcon={<FaLinkedin />} fontSize={[12, 16]} m={[5, 0]}>
                        Linkedin
                    </Button>
                </HStack>
            </Box>
        </Flex>
    );
}

export default Creator;