import React from "react";
import mapPopup from "./mapPopup.scss";
import Walk from "../../images/icons/walk.svg";

import BabyChanger from "../../images/icons/baby-changer.svg";
import Contactless from "../../images/icons/contactless.svg";
import HappeePlace from "../../images/icons/happeePlace.svg";
import Handicap from "../../images/icons/handicap.svg";
import HandSanitizer from "../../images/icons/handSanitizer.svg";

export default function MapPopup({ srcPicture, providerName, walkingTime, providerAddress, openingTime, closingTime, logos }) {


    return (
        <div className="popupContainer" >
            <img src={srcPicture} alt={providerName} width="200px" />
            <h1>{providerName}</h1>
            <p><img src={Walk} alt="Shoes" height="20" width="20" />{walkingTime} min</p>
            <p>{providerAddress}</p>
            <p> Open from {openingTime} to {closingTime}.</p>
            <div>
                {logos.map((l) => {
                    return (
                        l.sanitized === true ? <img src={HappeePlace} alt={"sanitized"} /> : ""
                    )
                })}
                {logos.map((l) => {
                    return (
                        l.diaperchanger === true ? <img src={BabyChanger} alt={"diaper-changer"} /> : ""
                    )
                })}
                {logos.map((l) => {
                    return (
                        l.contactless === true ? <img src={Contactless} alt={"contactless"} /> : ""
                    )
                })}
                {logos.map((l) => {
                    return (
                        l.handsanitizer === true ? <img src={HandSanitizer} alt={"hand-sanitizer"} /> : ""
                    )
                })}
                {logos.map((l) => {
                    return (
                        l.handicap === true ? <img src={Handicap} alt={"handicap"} /> : ""
                    )
                })}
            </div>
            <button>Take me there</button>


        </div>
    )
};
