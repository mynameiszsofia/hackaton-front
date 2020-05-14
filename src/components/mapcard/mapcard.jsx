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

import "../../utils/GlobalStyling.scss";

const dropdown = [
  { name: "coffee", value: "Coffee" },
  { name: "gas station", value: "Gas station" },
];

export default function Mapcard() {
  return (
    <>
      <Card>
        <Card.Separator></Card.Separator>
        <Card.Title>
          <b>Filter by type of stablishment</b>
        </Card.Title>
        <Card.Body>
          <Form>
            <Form.Dropdown
              data={dropdown}
              placeholder="Select type of stablishment"
              idValue={"firstDropdown"}
            ></Form.Dropdown>
          </Form>
          <div>
            <Button children={"Sanitized"} variant="map"></Button>
            <Button children={"Hand sanitizer"} variant="map"></Button>
            <Button children={"Baby Changer"} variant="map"></Button>
            <Button children={"Contactless"} variant="map"></Button>
            <Button children={"Handicap"} variant="map"></Button>
          </div>
        </Card.Body>

        {dataFile.map((d) => {
          return (
            <Card.Card>
              <img
                src={d.picture}
                style={{ borderRadius: "0.5rem" }}
                alt="budi"
                width="110"
                height="90"
              ></img>
              <div className="card-container" style={{ width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: "5px",
                    paddingTop: "3px",
                    fontWeight: "800",
                  }}
                >
                  <div>{d.name}</div>
                  <div style={{ color: "#CA02A2" }}>
                    <img src={Walk} alt="shoes"></img>
                    {d.walkingTime}
                  </div>
                </div>
                <p style={{ fontSize: "0.8em" }}>{d.address}</p>
                <div>
                  {d.details.map((l) => {
                    return l.sanitized === true ? (
                      <img src={HappeePlace} alt={"sanitized"} width="30px" />
                    ) : (
                      ""
                    );
                  })}
                  {d.details.map((l) => {
                    return l.diaperchanger === true ? (
                      <img
                        src={BabyChanger}
                        alt={"diaper-changer"}
                        width="30px"
                      />
                    ) : (
                      ""
                    );
                  })}
                  {d.details.map((l) => {
                    return l.contactless === true ? (
                      <img src={Contactless} alt={"contactless"} width="30px" />
                    ) : (
                      ""
                    );
                  })}
                  {d.details.map((l) => {
                    return l.handsanitizer === true ? (
                      <img
                        src={HandSanitizer}
                        alt={"hand-sanitizer"}
                        width="30px"
                      />
                    ) : (
                      ""
                    );
                  })}
                  {d.details.map((l) => {
                    return l.handicap === true ? (
                      <img src={Handicap} alt={"handicap"} width="30px" />
                    ) : (
                      ""
                    );
                  })}
                </div>
              </div>
            </Card.Card>
          );
        })}
      </Card>
    </>
  );
}
