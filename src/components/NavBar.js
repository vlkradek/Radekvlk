import React from "react";
import { Link, NavLink } from "react-router-dom";
import classnames from "classnames";

export function NavBar({ visible }) {
    return (
        <nav
            className={classnames("navbar", {
                "navbar--hidden": !visible,
            })}
        >
            <div className="row">
                <Link to="/" className="home-link">
                    Radek Vlk
                </Link>

                <ul>
                    <NavLink to="/about" className="navlink">
                        O mně
                    </NavLink>
                    <NavLink to="/portfolio" className="navlink">
                        Portfolio
                    </NavLink>
                    <NavLink to="/contact" className="navlink contact-btn">
                        Kontaktujte mě
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
}

//How to fix error with react-spring installation?
