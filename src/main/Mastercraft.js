import React from 'react';
import logoMastercraft from '../images/logo-mastercraft.svg';
import { Button, ButtonGroup } from "@chakra-ui/react";

class Mastercraft extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            Bookmark: "Bookmark",
            bookmarkClass: "book-mark "
        }
    }

    onBookmark = () => {
        this.state.Bookmark == "Bookmark" ? 
        this.setState({ Bookmark: "Bookmarked", bookmarkClass: this.state.bookmarkClass + "bookmarked"}) : 
        this.setState({ Bookmark: "Bookmark", bookmarkClass: "book-mark " });
    }

    render() {
        return (
            <div className="mastercraft">
                <img src={logoMastercraft} alt="logo-mastercraft" />
                <h2>Mastercraft Bamboo Monitor Riser</h2>

                <p>
                    A beautiful & handcrafted monitor stand to reduce neck and eye strain.
                </p>
                <div className="mastercraft-btn">
                    {/*<button 
                        className="back-the-project-btn"
                        onClick={() => {
                            this.props.onBehindModalChange(!this.props.behindModal)
                        }}
                    >
                        Back this project
                    </button>*/}

                    <Button 
                        colorScheme="blue"
                      onClick={() => {
                        this.props.onBehindModalChange(!this.props.behindModal)
                    }}>
                        Button
                    </Button>

                    <div className={this.state.bookmarkClass}>
                        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                            <circle fill="#2F2F2F" cx="28" cy="28" r="28"/>
                            <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/>
                            </g>
                        </svg>
                        <button 
                            className="book-mark-btn"
                            onClick={this.onBookmark}
                        >
                            <span>{this.state.Bookmark}</span>
                        </button>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Mastercraft;