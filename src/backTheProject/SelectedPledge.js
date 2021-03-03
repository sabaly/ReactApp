import React from 'react';
class SelectedPledge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.rate,
            classes: "selected-pledge pledge-min-" + this.props.rate
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div className={this.state.classes}>
                <span className="enter-pledge">Enter your pledge</span>
                <div className="action">
                    <label className="pledge">
                        <strong>$</strong>
                        <input
                            type="text" 
                            value={this.state.value}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <button 
                        className="continue-btn"
                        onClick={() => { 
                            this.props.onContinue()
                        }}
                    >
                        Continue
                    </button>
                </div>
            </div>
        );
    }
}

export default SelectedPledge;
