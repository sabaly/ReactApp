import Creator from './Creator';
import GridSection from './GridSection';
import { VStack, Text } from '@chakra-ui/react';
import Contact from './Contact';

function Section(props) {
    return (
        <VStack  
            zIndex="9996"
        >
            <Creator />
            <GridSection />
            <Contact />
        </VStack>
    );
}

export default Section;
