import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./button.scss";
import { Form } from "../../components/FormItems/formitems";

function ActionButton() {
    console.log("The button was clicked")
}



function Button({ to, variant, children }) {
    const [buttonC, SetButtonC] = useState(false);
    return (
        <>
            <Link to={to}>
                <button onClick={() => SetButtonC(!buttonC)} className={`${variant ? variant : ""}-button ${buttonC === true ? "selected" : ""}`}>
                    {children}
                </button>
            </Link>
        </>
    );
}

export default Button;

