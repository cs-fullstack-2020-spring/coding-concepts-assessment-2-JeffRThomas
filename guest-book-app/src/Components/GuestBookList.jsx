import React, { Component } from 'react';
import { Fragment } from 'react';

class GuestBookList extends Component {
    render() {
        return (
            <Fragment>
                <div id="guestBookList">
                    {/* Component Roll Call */}
                    {/* <h4>GuestList-"Here!"</h4> */}
                    <h2>Waiting for Response</h2>
                    {this.props.awaitResponse.map(
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
            </Fragment>
        )
    };
};

export default GuestBookList;