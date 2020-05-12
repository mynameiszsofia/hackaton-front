import React, { Component } from 'react';
//import Header from '../../components/Header/'
import mainPicture from "../../images/illustrations/about.svg"
import { Form } from "../../components/FormItems/formitems";
import MyStepper from "../../components/Stepper/stepper";
import HandSanitizer from "../../images/icons/handSanitizer.svg";
import Sanitizer from "../../images/icons/handSanitizer.svg";
import "./signup.scss"

const dropdown = [{ name: "coffee", value: "Coffee" }, { name: "gas station", value: "Gas station" }];
const city = [{ name: "Budapest", value: "Budapest" }, { name: "Bécs", value: "Bécs" }]

const Registration1 = () => {
    return (
        <Form>
            <MyStepper activeStepId={0} />
            <h2>Bathroom information</h2>
            <div style={{ display: "flex" }}>
                <Form.Input name="stablishment" type="text" placeholder="e.g. Starbucks Coffee" required>
                    Name of stablishment *
                        </Form.Input>
                <Form.Dropdown data={dropdown} placeholder="Select type of stablishment" idValue={"firstDropdown"} labelValue={"Type of stablishment *"}>

                </Form.Dropdown>

                <Form.Input name="street" type="text" placeholder="Street" required>
                    Street *
                        </Form.Input>
                <Form.Input isNumber name="number" type="text" placeholder="Number" required>
                    Number *
                        </Form.Input>
                <Form.Input isNumber name="zip" type="text" placeholder="ZIP" required>
                    Postal Code *
                        </Form.Input>
                <Form.Dropdown data={city} idValue={"secondDropdown"} placeholder="Select city" labelValue={"City *"}>
                </Form.Dropdown>
                <Form.Input isNumber name="contact-number" type="text" placeholder="Contact number" required>
                    Contact number *
                        </Form.Input>
            </div>
        </Form>)
};

const Registration2 = () => {
    return (
        <>
            <MyStepper activeStepId={1} />
            <Form.Button children={"Sanitized"} to={""} src={HandSanitizer} alt={"test"} variant="feature"></Form.Button>
            <Form.Button children={"Hand sanitizer"} to={""} src={HandSanitizer} alt={"test"} variant="feature"></Form.Button>
        </>
    )
};

const Registration3 = () => {
    return (
        <>
            <MyStepper activeStepId={2} />
            <p>sth3</p>
        </>
    )
};
const Registration4 = () => {
    return (
        <>
            <MyStepper activeStepId={2} />
            <p>finished</p>
        </>
    )
};

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeId: 0,
        };
        this.handlePlusTab = this.handlePlusTab.bind(this);
        this.handleMinusTab = this.handleMinusTab.bind(this);
        this.getTabContent = this.getTabContent.bind(this);
    }

    handlePlusTab() {
        this.setState({ activeId: this.state.activeId + 1 }, function () {
            console.log(this.state.activeId);
        });
    }

    handleMinusTab() {
        this.setState({ activeId: this.state.activeId - 1 }, function () {
            console.log(this.state.activeId);
        });
    }

    getTabContent() {
        switch (this.state.activeId) {
            case 0:
                return <Registration1 />;
            case 1:
                return <Registration2 />;
            case 2:
                return <Registration3 />;
            case 3:
                return <Registration4 />;
            default:
                return <p>Nothing here</p>;
        }
    }

    render() {

        return (
            <div>
                <h1>Share your Happee place</h1>
                <p>Be part of a Happee community and experience the new culture of clean bathrooms</p>
                <img src={mainPicture} alt="Main picture of WC" />
                <div>{this.getTabContent(this.state.activeId)}</div>
                <Form>
                    <Form.Button to={""} variant="brand" onClickFunc={this.handlePlusTab}>Continue</Form.Button>
                    <Form.Button to={""} variant="secondary" onClickFunc={this.handleMinusTab}>Back</Form.Button>
                </Form>
            </div>
        );
    }
};


export default SignUp;