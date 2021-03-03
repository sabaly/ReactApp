import Creator from './Creator';
import GridSection from './GridSection';
import { VStack, Text } from '@chakra-ui/react';
import Contact from './Contact';
import Login from './Login';
import { useState } from 'react';

function Section(props) {
    
    return (
        <VStack  
            zIndex="9996"
        >
            <Creator />
            <GridSection />
            <Contact />
            { props.login && <Login />}
        </VStack>
    );
}

export default Section;
