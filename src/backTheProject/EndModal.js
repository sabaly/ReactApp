import iconCheck from '../images/icon-check.svg';
function EndModal(props) {
    return (
        <div className="thanks">
            <div className="tick">
                <img src={iconCheck} alt="icon-check" />
            </div>
            <h2>Thanks for your support!</h2>
            <p>
                Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.
            </p>
            <button className="got-it-btn" onClick={() => { props.onEnd() }}>
                Got it!
            </button>
        </div>
    );
}

export default EndModal;