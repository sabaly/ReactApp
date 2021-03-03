import React from 'react';
import './index.css';
import { Flex, Link, Text, List, ListItem, IconButton } from "@chakra-ui/react";
import { LockIcon } from '@chakra-ui/icons';
function Header(props) {
    return (
        <Flex p="5" 
            justifyContent="space-around" 
            alignItems="center" 
            shadow="lg"
            position="sticky"
            top="0"
            zIndex="9997"
            bg="white"
        >
          <Text as="h1" 
                fontSize="xl" 
                fontWeight="bolder" 
                color="green.900"
                fontStyle="italic"
          >
            Chakra Train
          </Text>
          
          <List display="flex" alignItems="flex-end">
            <ListItem ml="5">
              <Link href="#getstarted">Get started</Link>
            </ListItem>
            <ListItem ml="5">
              <Link href="#about">About me</Link>
            </ListItem>
            <ListItem ml="5">
              <Link href="">Contacts</Link>
            </ListItem>
            <ListItem ml="5">
              <IconButton 
                  h={10}
                  variant="outline"
                  color="red.400"
                  aria-label="Reserved"
                  icon={<LockIcon />}
              />
            </ListItem>
          </List>
        </Flex>
    );
}

export default Header;