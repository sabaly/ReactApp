import Creator from './Creator';
import GridSection from './GridSection';
import { VStack, Text } from '@chakra-ui/react';
import Contact from './Contact';
import Login from './Login';
import RandomUsers from './RandomUsers';
import { useState } from 'react';

function Section(props) {
    
    return (
        <VStack  
            zIndex="9996"
        >
            <Creator />
            <GridSection />
            <RandomUsers />
            <Contact />
            { props.login && <Login />}
        </VStack>
    );
}

export default Section;
