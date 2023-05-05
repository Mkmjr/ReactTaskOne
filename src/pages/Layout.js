import React from "react";
import '../CSS files/Layout.css';
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">ReactTaskOne</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/table">Table</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/test">Test</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >

            <Outlet />
        </>
    );

};

export default Layout;