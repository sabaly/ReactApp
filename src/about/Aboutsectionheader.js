function Aboutsectionheader(props) {
    return (
        <div className="about-section-head">
            <strong>{props.title}</strong>
            <span className="left">Pledge ${props.pledgeRate} or more</span>
        </div>
    );
}

export default Aboutsectionheader;
