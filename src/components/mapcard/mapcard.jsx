import React from "react";
import { Card } from "../Card/card";
import { Form } from "../FormItems/formitems";
import "./mapcard.scss";
import Button from "../Buttons/button";
import Walk from "../../images/icons/walk.svg";
import first from "../../images/photography/1.jpg";
import BabyChanger from "../../images/icons/baby-changer.svg";
import Contactless from "../../images/icons/contactless.svg";
import HappeePlace from "../../images/icons/happeePlace.svg";
import Handicap from "../../images/icons/handicap.svg";
import HandSanitizer from "../../images/icons/handSanitizer.svg";
import dataFile from "../../pages/mapScreen/data.json";

const dropdown = [
  { name: "cafe", value: "Cafe" },
  { name: "bar", value: "Bar" },
  { name: "restaurant", value: "Restaurant" },
  { name: "shoppingmall", value: "Shopping Mall" },
  { name: "hospital", value: "Hospital" },
  { name: "hotel", value: "Hotel" },
  { name: "school", value: "School" },
  { name: "officeco", value: "Offices, Coworking" },
  { name: "shoppingmall", value: "Shopping Mall" },
  { name: "cinema", value: "Cinema" },
  { name: "gas station", value: "Gas station" },

];

export default function Mapcard() {
  return (
    <>
      <Card>
        <Card.Title>Filter by type of establishment</Card.Title>
        <Card.Body>
          <Form>
            <Form.Dropdown
              data={dropdown}
              placeholder="Select type of establishment"
              idValue={"firstDropdown"}
            ></Form.Dropdown>
          </Form>
          <div>
            <Button children={"Sanitized"} variant="secondary"></Button>
            <Button children={"Hand sanitizer"} variant="secondary"></Button>
            <Button children={"Baby Changer"} variant="secondary"></Button>
            <Button children={"Contactless"} variant="secondary"></Button>
            <Button children={"Handicap"} variant="secondary"></Button>
          </div>
        </Card.Body>

        {dataFile.map((d) => {
          return (
            <Card.Card>
              <img src={d.picture} alt="budi" width="100"></img>
              <div className="card-container">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>{d.name}</div>
                  <div>
                    <img src={Walk} alt="shoes"></img>
                    {d.walkingTime}
                  </div>
                </div>
                <p>{d.address}</p>
              </div>
            </Card.Card>
          );
        })}
      </Card>
    </>
  );
}
