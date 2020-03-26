import React, { Component } from 'react';
import { Fragment } from 'react';

class GuestBookListRsvp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <Fragment>
                <div id="guestBookListRsvp">
                    {/* Component Roll Call */}
                    {/* <h4>RSVP-"Here!"</h4> */}
                    <h2>RSVP</h2>
                    {this.props.rsvpGuest}
                </div>
            </Fragment >
        )
    };
};

export default GuestBookListRsvp;