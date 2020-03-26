import React, { Component } from 'react';
import { Fragment } from 'react';

class GuestBookList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <Fragment>
                {/* Component Roll Call */}
                {/* <h4>GuestList-"Here!"</h4> */}
                <h2>Waiting for Response</h2>
                {this.props.awaitResponse}
            </Fragment>
        )
    };
};

export default GuestBookList;