import { Flex, Center, Button, Text, Tooltip } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
function Hero(props) {
    return (
        <Center 
            bg="green.900"
            w="100%"
            h="50vh"
            color="white"
            zIndex="9996"
        >
          <Flex 
            direction="column" 
            w="50%" 
            alignItems="center" 
            justifyContent="space-between"
          >
            <Text textAlign="center" 
                  theme={props.theme} 
                  textStyle="h1"
                  color="white"
            >
              Welcome to my Chakra APP
            </Text>

            <Tooltip hasArrow label="Go and learn Chakra" bg="white" color="black">
                <Button 
                    colorScheme="white" 
                    variant="outline"
                    rightIcon={<ExternalLinkIcon />}
                >
                    Get Started
                </Button>
            </Tooltip>
          </Flex>
        </Center>
    );
}

export default Hero;
