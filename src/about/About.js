import Aboutsection from './Aboutsection';
import React from 'react';

class About extends React.Component {
    
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div id="about">
                <h2>About this project</h2>
                <p className="about-text">
                    The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                </p>
                <p className="about-text">
                    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                    to allow notepads, pens, and USB sticks to be stored under the stand.
                </p>

                <Aboutsection 
                    paragraph={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."}
                    title="Bamboo Stand" 
                    pledgeRate="25"
                    numberOfLeft="101"
                />
                <Aboutsection 
                    paragraph={"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
                    title="Black Edition Stand" 
                    pledgeRate="75"
                    numberOfLeft="60"
                />
                <Aboutsection 
                    paragraph={"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
                    title="Mahogany Special Edition" 
                    pledgeRate="200"
                    numberOfLeft="0"
                    disabled = "disabled"
                />
            </div>
        );
    }
}

export default About;