import React, { Component } from 'react';
import { Fragment } from 'react';
import GuestBookForm from './GuestBookForm';
import GuestBookList from './GuestBookList';
import GuestBookListRsvp from './GuestBookListRsvp';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            GuestWhoHaveRSVP: ["RSVP :-)"],
            GuestWhoDidntRSVP: ["RSVP :-("]
        };
    };

    render() {
        return (
            <Fragment>
                {/* Component Roll Call */}
                {/* <h1>AppContainer-"Here!"</h1> */}
                <h1 id="AppHeader">Guest Book Manager</h1>
                <GuestBookForm id="Form" />
                <GuestBookList id="List" awaitResponse={this.state.GuestWhoDidntRSVP} />
                <GuestBookListRsvp id="Rsvp" rsvpGuest={this.state.GuestWhoHaveRSVP} />
            </Fragment>
        )
    };
};

export default AppContainer;