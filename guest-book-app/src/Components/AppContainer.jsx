import React, { Component } from 'react';
import { Fragment } from 'react';
import GuestBookForm from './GuestBookForm';
import GuestBookList from './GuestBookList';
import GuestBookListRsvp from './GuestBookListRsvp';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            GuestWhoHaveRSVP: [],
            GuestWhoDidntRSVP: []
        };
    };

    didTheyRSVP = (guest) => {
        console.log("RSVP Status Check")
        console.log(guest)
        if (guest.RSVP === "Yes") {
            this.state.GuestWhoHaveRSVP.push(guest)
        } else if (guest.RSVP === "No") {
            this.state.GuestWhoDidntRSVP.push(guest)
        }
        console.log(this.state.GuestWhoHaveRSVP)
        console.log(this.state.GuestWhoDidntRSVP)
    };

    render() {
        return (
            <Fragment>
                {/* Component Roll Call */}
                {/* <h1>AppContainer-"Here!"</h1> */}
                <h1 id="AppHeader">Guest Book Manager</h1>
                <GuestBookForm callback={this.didTheyRSVP} id="Form" />
                <GuestBookList awaitResponse={this.state.GuestWhoDidntRSVP} />
                <GuestBookListRsvp rsvpGuest={this.state.GuestWhoHaveRSVP} />
            </Fragment>
        )
    };
};

export default AppContainer;