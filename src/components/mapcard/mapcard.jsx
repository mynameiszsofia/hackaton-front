import React from 'react';
import { Card } from "../Card/card";
import { Form } from "../FormItems/formitems";

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
                        <Form.Button
                            children={"Hand sanitizer"}
                            to={""}
                            src={HandSanitizer}
                            alt={"test"}
                            variant="feature"
                        ></Form.Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}