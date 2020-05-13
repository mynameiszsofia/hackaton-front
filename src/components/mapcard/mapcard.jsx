import React from 'react';
import { Card } from "../Card/card";
import { Form } from "../FormItems/formitems";
import "./mapcard.scss";
import Button from "../Buttons/button";
import Walk from "../../images/icons/walk.svg"
import first from "../../images/photography/1.jpg";
import BabyChanger from "../../images/icons/baby-changer.svg";
import Contactless from "../../images/icons/contactless.svg";
import HappeePlace from "../../images/icons/happeePlace.svg";
import Handicap from "../../images/icons/handicap.svg";
import HandSanitizer from "../../images/icons/handSanitizer.svg";

const dropdown = [
    { name: "coffee", value: "Coffee" },
    { name: "gas station", value: "Gas station" },
];

export default function Mapcard() {
    return (
        <>
            <Card>
                <Card.Title>Filter by type of stablishment</Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Dropdown
                            data={dropdown}
                            placeholder="Select type of stablishment"
                            idValue={"firstDropdown"}
                        ></Form.Dropdown>
                    </Form>
                    <Button
                        children={"Sanitized"}

                        variant="secondary"
                    ></Button>
                    <Button
                        children={"Hand sanitizer"}

                        variant="secondary"
                    ></Button>
                    <Button
                        children={"Baby Changer"}

                        variant="secondary"
                    ></Button>
                    <Button
                        children={"Contactless"}

                        variant="secondary"
                    ></Button>
                    <Button
                        children={"Handicap"}

                        variant="secondary"
                    ></Button>

                </Card.Body>
                <Card.Card>
                    <img src={first} alt="budi" width="100"></img>
                    <p>Cafelito</p>
                    <img src={Walk} alt="shoes"></img>2min
                    <p>Calle Sombrerete, 20, Madrid</p>

                </Card.Card>
            </Card>
        </>
    )
}