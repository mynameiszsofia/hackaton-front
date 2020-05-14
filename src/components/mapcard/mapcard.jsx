import React, { useState } from "react";
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
  const [sanitized, setSanitized] = useState(false);
  const [handSanitizer, setHandSanitizer] = useState(false);
  const [babyChanger, setBabyChanger] = useState(false);
  const [contactless, setContactless] = useState(false);
  const [handicap, setHandicap] = useState(false);

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
            <Button
              children={"Sanitized"}
              variant="map"
              onClick={() => setSanitized(!sanitized)}
            ></Button>
            <Button
              children={"Hand sanitizer"}
              variant="map"
              onClick={() => setHandSanitizer(!handSanitizer)}
            ></Button>
            <Button
              children={"Baby Changer"}
              variant="map"
              onClick={() => setBabyChanger(!babyChanger)}
            ></Button>
            <Button
              children={"Contactless"}
              variant="map"
              onClick={() => setContactless(!contactless)}
            ></Button>
            <Button
              children={"Handicap"}
              variant="map"
              onClick={() => setHandicap(!handicap)}
            ></Button>
          </div>
        </Card.Body>

        {dataFile
          .filter((d) => !sanitized || d.details.sanitized === true)
          .map((d, index) => (
            <Card.Card {...d}>
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
          ))}
      </Card>
    </>
  );
}
{
  /* 
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
      </Card> */
}
