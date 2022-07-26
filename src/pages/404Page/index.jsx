import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NoMatch extends Component {
    render() {
        return (
            <>
                <h1>404 Error Screen</h1>
                <p>
                    <Link to="/">Go to the home page</Link>
                </p>
            </>

        );
    }
}

export default NoMatch;