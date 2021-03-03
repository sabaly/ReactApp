import { Center, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
    return (
        <Center p={10} fontSize="14px">
            <IconContext.Provider value={{ color: "green", className: "global-class-name" }}>
                Made width 
                <FaHeart bg="green.800"/>,   
                <Text color="green.800">
                    <Text color="black" display="inline">by </Text>
                    S@dmin 
                </Text>
            </IconContext.Provider>
        </Center>
    );
}

export default Footer;