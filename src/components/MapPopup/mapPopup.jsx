import React from "react";
import mapPopup from "./mapPopup.scss";

export default function MapPopup({ srcPicture, providerName, walkingTime, providerAddress, openingTime, closingTime, logos }) {
    return (
        <div className="popupContainer" >
            <img src={srcPicture} alt={providerName} width="200px" />
            <h1>{providerName}</h1>
            <p><img src="https://cdn3.iconfinder.com/data/icons/public-sign-part02/100/__-98-512.png" alt="Shoes" height="20" width="20" />{walkingTime} min</p>
            <p>{providerAddress}</p>
            <p> Open from {openingTime} to {closingTime}.</p>
            {/* {{ logos }.map((l) => {
                return (<p>{l}</p>)
            })} */}
            <button>Take me there</button>
        </div>
    );
}