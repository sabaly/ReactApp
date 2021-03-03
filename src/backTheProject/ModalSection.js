import React from 'react';
import SelectedPledge from './SelectedPledge';

class ModalSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pledge: false,
            value: this.props.rate,
            id: this.props.id,
            continue: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target === 'radio' ? target.checked : target.value;
        this.setState({ pledge: value });
        this.props.onRateChange(this.props.rate);
    }

    onContinue = () => {
        this.setState({ continue: !this.state.continue });
        this.props.onFinish();
    }

    render() {
        return (
            <div className={"modal-section " + this.props.disabled}>
                <div className="modal-section-head">
                    <input 
                        type="radio" 
                        name="pledge" 
                        value={this.state.value} 
                        id={this.state.id}
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor={this.state.id}>
                        <strong>{this.props.title}</strong>
                        {this.props.rate != 0 &&  <span className="pledge-rate">{this.props.minRate}</span>}
                    </label>
                </div>
            
                <p>{this.props.description}</p>

                {this.props.rate != 0 &&  <span className="modal-left"><strong>{this.props.left}</strong><sup> left</sup></span>}
                {this.props.selected && <hr/>}

                {this.props.selected && 
                <SelectedPledge 
                    rate={this.props.rate}
                    continue={this.state.continue}
                    onContinue={this.onContinue}
                />}
            </div>
        );
    }
}

export default ModalSection;