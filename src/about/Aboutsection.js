import Aboutsectionheader from "./Aboutsectionheader";
import Aboutsectionfooter from "./Aboutsectionfooter";

function Aboutsection(props) {
    const classes = "about-section " + props.disabled;
    return (
        <div className={classes}>
            <Aboutsectionheader title={props.title} pledgeRate={props.pledgeRate}/>
            <p>{props.paragraph}</p>
            <Aboutsectionfooter numberOfLeft={props.numberOfLeft}/>
        </div>
    );
}

export default Aboutsection;
