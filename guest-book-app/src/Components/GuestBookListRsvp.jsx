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
                {/* Component Roll Call */}
                {/* <h4>RSVP-"Here!"</h4> */}
                <h2>RSVP</h2>
                {this.props.rsvpGuest}
            </Fragment>
        )
    };
};

export default GuestBookListRsvp;