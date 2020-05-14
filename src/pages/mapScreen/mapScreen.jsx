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
import BathroomExample2 from "../../images/photography/2.jpg";
import BathroomExample3 from "../../images/photography/3.jpg";
import BathroomExample4 from "../../images/photography/4.jpg";
import BathroomExample5 from "../../images/photography/5.jpg";
import BathroomExample6 from "../../images/photography/6.jpg";
import BathroomExample7 from "../../images/photography/eweq.png";
import Mapcard from "../../components/mapcard/mapcard";
import BabyChanger from "../../images/icons/baby-changer.svg";
import Contactless from "../../images/icons/contactless.svg";
import HappeePlace from "../../images/icons/happeePlace.svg";
import Handicap from "../../images/icons/handicap.svg";
import Search from "react-leaflet-search";
import ReactLeafletSearch from "react-leaflet-search";
import "./mapScreen.scss";
import Geocode from "react-geocode";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import dataFile from "./data.json";

import "../../utils/GlobalStyling.scss";

/* const fetchData = React.useCallback(() => {
  fetch("/api/bathroom")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    });
});
React.useEffect(() => {
  fetchData();
}, []);
 */

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

const MyPopupMarker = ({
  position,
  happeeStatus,
  picture,
  name,
  walkingTime,
  address,
  openingTime,
  closingTime,
  details,
}) => (
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
      <Popup>
        <MapPopup
          srcPicture={picture}
          providerName={name}
          walkingTime={walkingTime}
          providerAddress={address}
          openingTime={openingTime}
          closingTime={closingTime}
          logos={details}
        />
      </Popup>
    </Marker>
  );

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ));
  return <Fragment>{items}</Fragment>;
};
let addressNames = [];
let transformResults = [];
let urlArray = [];
const provider = new OpenStreetMapProvider(); /* 


/* function arrayofurl() {
  urlArray.map((u) => {
    fetch(u)
      .then(response => response.json())
      .then((data) => {
        this.setState({ url: data.result });
        console.log(urlArray)
      })
    return console.log("")
  }, [])
} */

class mapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [],
      url: [],
      zoom: 13,
      markers: dataFile,
    };
    /*     this.setHappeeStatus = this.setHappeeStatus.bind(this); */
  }

  address() {
    const data1 = this.state.data1;
    {
      data1.map((d) => {
        return (
          (addressNames = d.street + " " + d.number + ", " + d.city),
          console.log(addressNames)
        );
      });
    }
  }
  async search(params) {
    console.log("params", params);
    const results = await provider.search({
      query: params,
    });
    console.log("result", results);
    return await results;
  }

  transformAddress = () => {
    {
      this.state.data1.map((d) => {
        const url =
          "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" +
          d.city +
          " " +
          d.street +
          " " +
          d.number;
        urlArray.push(url);
        /*     console.log("XML:", XMLHttpRequest.open("GET", url, true)); */
        return url;
      });
    }
  };

  /* const url = `https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${d.city}${d.street}${d.number}` */
  /* 
const transformedCity = d.city.replace(/\s/g, '%20')
  const transformedStreet = d.street.replace(/\s/g, '%20')
  const url = "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" + transformedCity + '%20' + transformedStreet + '%20' + d.number  */

  /* results.map((r) => {
  return {r.x}
  })   */

  componentDidMount() {
    fetch("api/bathroom")
      .then((response) => response.json())
      .then(async (data) => {
        // data.result.forEach(
        //   async (place) =>
        //     await console.log(
        //       "test2",
        //       await this.search(this.address(place.address))
        //     )
        // );
        const array2 = await data.result.map(
          async (place) => await this.search(await this.address(place.address))
        );
        await console.log("result2", await array2);
        // this.setState({ data1: data.result });
      })
      .then((resp) => console.log("test", resp))
      .catch(function () {
        console.log("error");
      });
    console.log("Data Mount", this.state.data1);
    this.address();
    this.transformAddress();
    /*    arrayofurl(); */
  }

  render() {
    console.log("After render", this.state.data1);

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
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="MapContainer"
      >
        {this.address()}
        {this.transformAddress()}
        {/*   {arrayofurl()} */}
        {this.state.data1.map((t) => {
          return <p key={t.key}>{t.name}</p>;
        })}

        <Mapcard />
        <Map
          className="map"
          center={[40.42, -3.703]}
          zoom={this.state.zoom}
          style={{ height: "80vh", width: "120vh" }}
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
