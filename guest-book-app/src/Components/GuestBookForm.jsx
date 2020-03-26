import React, { Component } from 'react';
import { Fragment } from 'react';

class GuestBookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Number: "",
            RSVP: ""
        };
    };

    inputFieldInfo = (event) => {
        if (event.target.name === "nameinput") {
            this.setState({ Name: event.target.value })
            console.log(this.state.Name)
        } else if (event.target.name === "numberinput") {
            this.setState({ Number: event.target.value })
            console.log(this.state.Number)
        } else if (event.target.name === "rsvpstatus") {
            this.setState({ RSVP: event.target.value })
            console.log(this.state.RSVP)
        }
    };

    guestEntry = (guest) => {
        guest.preventDefault();
        console.log("Guest Entered");
        console.log(this.state)
        this.props.callback(this.state)
        this.setState({ Name: "", Number: "", RSVP: "" })
    }

    render() {
        return (
            <Fragment>
                {/* Component Roll Call */}
                {/* <h4>GuestForm-"Here!"</h4> */}
                <form id="guestEntry">
                    <fieldset>
                        <legend>Enter A New Guest</legend>
                        <div>
                        <label htmlFor="nameinput">Name: </label>
                        <input name="nameinput" id="nameinput" placeholder="Enter Guest Name" value={this.state.Name} onChange={this.inputFieldInfo}></input>
                        </div>

                        <div>
                        <label htmlFor="numberinput">Number: </label>
                        <input name="numberinput" id="numberinput" placeholder="999-999-9999" value={this.state.Number} onChange={this.inputFieldInfo}></input>
                        </div>

                        <div>
                        <label htmlFor="rsvpstatus">RSVP: </label>
                        <select name="rsvpstatus" id="rsvpstatus" value={this.state.RSVP} onChange={this.inputFieldInfo}>
                            <option>Click To Select</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        </div>

                        <button onClick={this.guestEntry}>Enter Guest</button>
                    </fieldset>
                </form>
            </Fragment>
        )
    };
};

export default GuestBookForm;