import { Grid, GridItem, Center, Text, Button, InputGroup, InputRightElement, Input } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { GoSignIn } from 'react-icons/go';
import { useDisclosure } from '@chakra-ui/react';
import 
{  
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
    ModalBody, ModalFooter 
} from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

function GridSection() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <>
            <Center
                w={["100%", "80%"]}
                mb={10}
                l="10%"
                p={[5, 10]}
                bg="blackAlpha.100"
            >
                <Grid
                    templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
                    templateRows={["repeat(3, 1fr)", "repeat(2, 1fr)"]}
                    gap={[2, 5]}
                >
                    <GridItem colSpan={[1, 2]} bg="green.800" 
                        rowSpan={[1, 2]} p={10}
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                    >
                        <Center display="flex" flexDirection="column">
                            <Text textStyle="h2" color="white" textAlign={['center', 'left']}>Train with me</Text>
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
                            onClick={onOpen}
                        >
                            Registration
                        </Button>
                       
                    </GridItem>
                </Grid>
            </Center>
            <Modal isOpen={isOpen} onClose={onClose} isCentered bg="green.900" color="white">
                <ModalOverlay />
                <ModalContent >
                <ModalHeader>JOIN US</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form>
                        <Text>First Name</Text>
                        <Input type="text" name="firstName" />
                        <Text>Last Name</Text>
                        <Input type="text" name="lastName"/>
                        <Text>Login</Text>
                        <Input type="text" name="login"/>
                        <Text>Password</Text>
                        <Input type="password" name="password"/>
                        <Text>Re-enter your password</Text>
                        <Input type="password" name="passwordConfirmation"/>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3}>
                        Register
                    </Button>
                    <Button variant="ghost" onClick={onClose}>Cancel</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default GridSection;
