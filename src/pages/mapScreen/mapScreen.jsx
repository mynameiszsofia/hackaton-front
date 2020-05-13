import React, { Component, Fragment } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import happeePlace from "../../images/icons/happeePlace.svg";
import okPlace from "../../images/icons/ok.svg";
import unknownPlace from "../../images/icons/unknown.svg";
import { Form } from "../../components/FormItems/formitems";
import HandSanitizer from "../../images/icons/handSanitizer.svg";
import MapPopup from "../../components/MapPopup/mapPopup";
import BathroomExample1 from "../../images/photography/eweq.png";
import Mapcard from "../../components/mapcard/mapcard";

const dropdown = [
  { name: "coffee", value: "Coffee" },
  { name: "gas station", value: "Gas station" },
];

/* TODO: make icons more dry */

var happeeIcon = L.icon({
  iconUrl: happeePlace,
  iconSize: [50, 80],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

var okIcon = L.icon({
  iconUrl: okPlace,
  iconSize: [50, 80],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

var unknownIcon = L.icon({
  iconUrl: unknownPlace,
  iconSize: [50, 80],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const MyPopupMarker = ({ position, happeeStatus, picture, name, walkingTime, address, openingTime, closingTime, details }) => (
  <Marker
    position={position}
    icon={
      happeeStatus === "happeePlace"
        ? happeeIcon
        : happeeStatus === "okPlace"
          ? okIcon
          : unknownIcon
    }
  >
    <Popup ><MapPopup srcPicture={"https://www.commercialinteriordesign.com/public/styles/full_img_crop/public/images/2019/08/07/01_Titisee.jpg?itok=_lp7j2Md"} providerName={name} walkingTime={walkingTime} providerAddress={address} openingTime={openingTime} closingTime={closingTime} /></Popup>
  </Marker>
);

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ));
  return <Fragment>{items}</Fragment>;
};


class mapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
      markers: [
        {
          key: "marker1",
          position: [51.5, -0.1],
          content: "My first popup",
          sanitized: true,
          diaperchanger: true,
          contactless: true,
          handsanitizer: true,
          handicap: true,
          verified: true,
          happeeStatus: "happeePlace",
          picture: BathroomExample1,
          name: "Cafelito",
          walkingTime: 2,
          address: "Calle Sombrerete, 20, Madrid",
          openingTime: 8,
          closingTime: 20,
          details: [{
            sanitized: true,
            diaperchanger: true,
            contactless: true,
            handsanitizer: true,
            handicap: true,
          }]
        },
        {
          key: "marker2",
          position: [51.51, -0.1],
          content: "My second popup",
          sanitized: false,
          diaperchanger: false,
          contactless: false,
          handsanitizer: false,
          handicap: false,
          verified: false,
          happeeStatus: "unknownPlace",
          picture: BathroomExample1,
          name: "Betérő",
          walkingTime: 4,
          address: "Csillag köz, 18, Hörcsögröcsöge",
          openingTime: 5,
          closingTime: 17,
          details: [{
            sanitized: false,
            diaperchanger: false,
            contactless: false,
            handsanitizer: false,
            handicap: false,
            verified: false,
          }]
        },
        {
          key: "marker3",
          position: [51.49, -0.05],
          content: "My third popup",
          sanitized: true,
          diaperchanger: false,
          contactless: true,
          handsanitizer: false,
          handicap: false,
          verified: true,
          happeeStatus: "okPlace",
          picture: BathroomExample1,
          name: "Sarok",
          walkingTime: 20,
          address: "Rutyutu köz, 666, Karakószörcsög",
          openingTime: 11,
          closingTime: 23,
          details: [{
            sanitized: true,
            diaperchanger: false,
            contactless: true,
            handsanitizer: false,
            handicap: false,
            verified: true,
          }]
        },
      ],
    };
    /*     this.setHappeeStatus = this.setHappeeStatus.bind(this); */
  }

  render() {
    /* TODO: make function so happeeStatus state isn't hardcoded 
    
    function setHappeeStatus() {
      this.state.markers.map((marker) => {
        return marker.verified === true
          ? marker.sanitized === true &&
            marker.diaperchanger === true &&
            marker.contacless === true &&
            marker.handsanitizer === true &&
            marker.handicap === true
            ? this.setState((marker.happeeStatus = "happeePlace"))
            : this.setState((marker.happeeStatus = "okPlace"))
          : this.setState((marker.happeeStatus = "unknownPlace"));
      });
    } */

    return (
      <div>
        <Map
          className="map"
          center={[51.505, -0.09]}
          zoom={this.state.zoom}
          style={{ height: "80vh", width: "60vh" }}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyMarkersList markers={this.state.markers} />
        </Map>
        <Mapcard />
      </div>
    );
  }
}

export default mapScreen;

