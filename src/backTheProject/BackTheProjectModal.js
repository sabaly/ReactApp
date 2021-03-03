import React from 'react';
import ModalSection from './ModalSection';

class BackTheProjectModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: 0,
            finish: false,
        }
    }

    onRateChange = (newrate) => {
        this.setState({ rate: newrate })
    }

    onFinish = () => {
        this.setState({ finish: !this.state.finish });
        this.props.onEnd();
    }

    render() {
        return (
            <div 
                className="back-this-project"
            >
                <h2>Back this project</h2>
                <i className="icofont-close" onClick={() => { this.props.onModalActive(false); }}></i>
                <p>
                    Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                </p>

                <ModalSection 
                    rate={0}
                    id={"no-reward"}
                    selected={false}
                    onRateChange={this.onRateChange}
                    onFinish={this.onFinish}
                    title={"Pledge with no reward"} 
                    description={"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."}
                />

                <ModalSection 
                    rate={25}
                    left={101}
                    id={"25"}
                    selected={this.state.rate == 25 ? true: false}
                    onRateChange={this.onRateChange}
                    onFinish={this.onFinish}
                    minRate={" Pledge $25 or more"}
                    title={"Pledge with no rewardBamboo Stand"} 
                    description={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, you’ll be added to a special Backer member list."}
                />

                <ModalSection 
                    rate={75}
                    left={60}
                    id={"75"}
                    selected={this.state.rate == 75 ? true: false}
                    onRateChange={this.onRateChange}
                    onFinish={this.onFinish}
                    minRate={" Pledge $75 or more"}
                    title={" Black Edition Stand"} 
                    description={"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
                />

                <ModalSection 
                    rate={200}
                    left={0}
                    disabled={"disabled"}
                    id={"200"}
                    selected={this.state.rate == 200 ? true: false}
                    onRateChange={this.onRateChange}
                    onFinish={this.onFinish}
                    minRate={" Pledge $200 or more"}
                    title={" Mahogany Special Edition"} 
                    description={"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
                />
            </div>
        );
    }
}

export default BackTheProjectModal;