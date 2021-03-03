import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pledge: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target === 'radio' ? target.checked : target.value;

    }

    render() {
        return (
            <input 
                type={this.props.type}
                for={this.props.for}
                onChange = {this.handleInputChange}
            />
        );
    }
}

export default Input;