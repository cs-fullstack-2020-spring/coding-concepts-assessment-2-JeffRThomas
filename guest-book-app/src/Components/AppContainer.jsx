import React, { Component } from 'react';
import { Fragment } from 'react';
import GuestBookForm from './GuestBookForm';
import GuestBookList from './GuestBookList';
import GuestBookListRsvp from './GuestBookListRsvp';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <Fragment>
                <h1>AppContainer-"Here!"</h1>
                <GuestBookForm/>
                <GuestBookList/>
                <GuestBookListRsvp/>
            </Fragment>
        )
    };
};

export default AppContainer;