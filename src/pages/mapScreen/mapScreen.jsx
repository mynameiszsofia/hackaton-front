import React, { Component, Fragment } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import happeePlace from "../../images/icons/happeePlace.svg";
import okPlace from "../../images/icons/ok.svg";
import unknownPlace from "../../images/icons/unknown.svg";
import { Form } from "../../components/FormItems/formitems";
import HandSanitizer from "../../images/icons/handSanitizer.svg";
import MapPopup from "../../components/MapPopup/mapPopup";
import BathroomExample1 from "../../images/photography/1.jpg";
import BathroomExample2 from "../../images/photography/3.jpg";
import BathroomExample3 from "../../images/photography/2.jpg";
import Mapcard from "../../components/mapcard/mapcard";
import BabyChanger from "../../images/icons/baby-changer.svg";
import Contactless from "../../images/icons/contactless.svg";
import HappeePlace from "../../images/icons/happeePlace.svg";
import Handicap from "../../images/icons/handicap.svg";
import Search from "react-leaflet-search";
import ReactLeafletSearch from "react-leaflet-search";

import "./mapScreen.scss";

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
    <Popup ><MapPopup srcPicture={picture} providerName={name} walkingTime={walkingTime} providerAddress={address} openingTime={openingTime} closingTime={closingTime} logos={details} /></Popup>
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
      zoom: 13,
      markers: [
        {
          key: "marker1",
          position: [40.439, -3.705],
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
          position: [40.420, -3.723790],
          content: "My second popup",
          sanitized: false,
          diaperchanger: false,
          contactless: false,
          handsanitizer: false,
          handicap: false,
          verified: false,
          happeeStatus: "unknownPlace",
          picture: BathroomExample2,
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
          position: [40.410, -3.685],
          content: "My third popup",
          sanitized: true,
          diaperchanger: false,
          contactless: true,
          handsanitizer: false,
          handicap: false,
          verified: true,
          happeeStatus: "okPlace",
          picture: BathroomExample3,
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
      <div style={{ display: 'flex' }} classname="MapContainer">
        <Mapcard />
        <Map
          className="map"
          center={[40.420, -3.703]}
          zoom={this.state.zoom}
          style={{ height: "80vh", width: "60vh" }}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ReactLeafletSearch
            position="topleft"
            inputPlaceholder="The default text in the search bar"
            search={[]} // Setting this to [lat, lng] gives initial search input to the component and map flies to that coordinates, its like search from props not from user
            zoom={16} // Default value is 10
            showMarker={true}
            showPopup={false}
            openSearchOnLoad={false} // By default there's a search icon which opens the input when clicked. Setting this to true opens the search by default.
            closeResultsOnClick={false} // By default, the search results remain when you click on one, and the map flies to the location of the result. But you might want to save space on your map by closing the results when one is clicked. The results are shown again (without another search) when focus is returned to the search input.
            providerOptions={{ searchBounds: [] }} // The BingMap and OpenStreetMap providers both accept bounding coordinates in [se,nw] format. Note that in the case of OpenStreetMap, this only weights the results and doesn't exclude things out of bounds.
            customProvider={undefined | { search: (searchString) => { } }} // see examples to usage details until docs are ready
          />
          <MyMarkersList markers={this.state.markers} />
        </Map>

      </div>
    );
  }
}

export default mapScreen;

