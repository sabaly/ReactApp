import React from 'react';
import './icofont/icofont.min.css';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Section from './sections/Section';
import { extendTheme } from '@chakra-ui/react';

// 2. Define the new text styles
const theme = extendTheme({
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["40px", "70px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["36px", "40px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  },
  links: {
    a: {
      textDecoration: "none",
      color: "red",
      fontSize: "25px",
    },
  }
})



function App(props) {
    
    return (
      <div className="App">
        <Header theme={theme}/>
        <Hero theme={theme} />
        <Section theme={theme} />
        <Footer />
      </div>
    );
}

export default App;
