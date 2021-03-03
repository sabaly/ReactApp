import React from 'react';
import Mastercraft from './Mastercraft';
import Discover from './Discover';
import About from '../about/About';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            behindModal: false
        }

    }

    onBehindModalChange = () => {
        this.setState({ behindModal: !this.state.behindModal })
        this.props.onModalActive(!this.state.behindModal);
    }
 
    render() {
        return (
            <main>
                { (this.props.modalBP || this.props.endModal) && <div className="behind-modal"></div>}
                <Mastercraft 
                    behindModal={this.state.behindModal}
                    onBehindModalChange={this.onBehindModalChange}
                />
                <Discover />
                <About />
            </main>
        );
    }
}

export default Main;
