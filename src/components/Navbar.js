import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Fragment>
            <div>
                <nav className="navbar navbar-light navbar-expand-md navigation-clean bg-warning">
                    <div className="container"><a className="navbar-brand" href="/">Company Name</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse"
                            id="navcol-1">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item" role="presentation"><a className="nav-link" href="/login">Login</a></li>
                                <li className="nav-item" role="presentation"><a className="nav-link" href="/register">Register</a></li>
                                <li className="nav-item" role="presentation"><a className="nav-link" href="/">About</a></li>
                                <li className="nav-item" role="presentation"><a className="nav-link" href="/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default Navbar
