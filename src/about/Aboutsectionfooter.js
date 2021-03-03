function Aboutsectionfooter(props) {
    return (
        <div className="about-section-foot">
            <span><strong>{props.numberOfLeft}</strong><sup> left</sup></span>
            <button>Select Reward</button>
        </div>
    );
}

export default Aboutsectionfooter;
