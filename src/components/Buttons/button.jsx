import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";
import { Form } from "../../components/FormItems/formitems";

function Button({ to, variant, children }) {
    return (
        <>
            <Link to={to}>
                <button className={`${variant ? variant : ""}-button`}>
                    {children}
                </button>
            </Link>
        </>
    );
}

export default Button;

