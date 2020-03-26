import React, { Component } from 'react';
import { Fragment } from 'react';

class GuestBookListRsvp extends Component {
    render() {
        return (
            <Fragment>
                <div id="guestBookListRsvp">
                    {/* Component Roll Call */}
                    {/* <h4>RSVP-"Here!"</h4> */}
                    <h2>RSVP</h2>
                    {this.props.rsvpGuest.map(
                        (guest) => {
                            return (
                                <div>
                                    <p>{guest.Name}</p>
                                    <p>{guest.Number}</p>
                                </div>)
                        }
                    )
                    }
                </div>
            </Fragment >
        )
    };
};

export default GuestBookListRsvp;