import { Grid, GridItem, Center, Text, Button, InputGroup, InputRightElement, Input } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { GoSignIn } from 'react-icons/go'
function GridSection() {
    return (
        <Center 
            w="80%"
            mb={10}
            l="10%"
            p={10}
            bg="blackAlpha.100"
        >
            <Grid
                templateColumns="repeat(3, 1fr)"
                templateRows="repeat(2, 1fr)"
                gap={5}
            >
                <GridItem colSpan={2} bg="green.800" 
                    rowSpan={2} p={10}
                    display="flex"
                    alignItems="center"
                    justifyContent="left"
                >
                    <Center display="flex" flexDirection="column">
                        <Text textStyle="h2" color="white">Train with me</Text>
                        <Text color="whiteAlpha.500" textAlign="left" textAlign="center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus lacus nunc, sed pharetra nulla mattis eu. Proin ac odio et purus accumsan suscipit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Text>
                    </Center>
                </GridItem>
                <GridItem w="100%" h="30" bg="teal.200" p={5} 
                    fontSize="20px"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    flexDirection="column"
                >
                    <Text color="gray.800" textAlign="center" p={10}>
                        READY !!!<br/> Let's Go
                    </Text>
                    <Button>
                            <ArrowDownIcon />
                    </Button>
                </GridItem>
                <GridItem w="100%" h="30" bg="teal.800" pt={0} p={5} fontSize="20px"
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                    justifyContent="space-around"
                >
                    <Text color="white" fontSize="20px">JOIN US</Text>
                    <Button
                        leftIcon = {<GoSignIn />}
                    >
                        Registration
                    </Button>

                </GridItem>
            </Grid>
        </Center>
    );
}

export default GridSection;
