import React, { Component } from "react";
//import Header from '../../components/Header/'
import mainPicture from "../../images/illustrations/about.svg";
import { Form } from "../../components/FormItems/formitems";
import MyStepper from "../../components/Stepper/stepper";
import HandSanitizer from "../../images/icons/handSanitizer.svg";
import BabyChanger from "../../images/icons/baby-changer.svg";
import Contactless from "../../images/icons/contactless.svg";
import Handicap from "../../images/icons/handicap.svg";
import Success from "../../images/icons/success.svg";
import HappeePlace from "../../images/icons/happeePlace.svg";
import FemaleProducts from "../../images/icons/female-products-48.svg";
import Free from "../../images/icons/free-48.svg";
import HairDryer from "../../images/icons/hair-dryer-48.svg";
import HandDryer from "../../images/icons/hand-dryer-48.svg";
import Mirror from "../../images/icons/mirror-48.svg";
import PotableWater from "../../images/icons/potable-water-48.svg";
import ToiletPaper from "../../images/icons/toilet-paper-48.svg";
import WaterFountain from "../../images/icons/water-fountain-48.svg";
import bathroomdata from "../../bathroomdata.json"
import "./signup.scss";
import "../../utils/GlobalStyling.scss";

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
const city = [
  { name: "Madrid", value: "Madrid" },
  { name: "Barcelona", value: "Barcelona" },
  { name: "Sevilla", value: "Sevilla" },
  { name: "Valencia", value: "Valencia" },
  { name: "Bilbao", value: "Bilbao" },
  { name: "Zaragoza", value: "Zaragoza" },
];

/* function handleSubmit(data) {
  const store = JSON.parse(localStorage.getItem('login')).JWTtoken 
  event.preventDefault();
  console.log('data', JSON.stringify(data))
  fetch("/api/bathroom", {
    headers: {
      /       "Authorization": `Bearer ${store}`, 
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(resp => resp.json())
    .then(data => {
      console.log('data1', data, 'datastr', JSON.stringify(data));
              if (data.type === "error") {
                setErrors(data.message)
              } 
    })
    .catch(err => {
      console.log(err)
    })
} */


const Registration1 = () => {
  function handleSubmit(data) {
    bathroomdata.name = data.name
    bathroomdata.type = data.type
    bathroomdata.street = data.street
    bathroomdata.city = data.city
    bathroomdata.number = data.number
    bathroomdata.postalcode = data.postalcode
    bathroomdata.phone = data.phone
    console.log(bathroomdata, 'bathdata', data, 'data')
  }

  return (
    <Form onSubmit={(data) => handleSubmit(data)}>
      <div className="bathroom-form-container">
        <h2>Bathroom information</h2>
        <div className="bathroom-input container">
          <div /*style={{ display: "flex" }}*/>
            <Form.Input
              name="name"
              type="text"
              placeholder="e.g. Starbucks Coffee"
              label="Name of establishment *"
              required
            >
            </Form.Input>

            <Form.Input name="street" type="text" placeholder="Street" align="right" label="Street *" required>
            </Form.Input>
            <Form.Dropdown
              name="city"
              data={city}
              idValue={"secondDropdown"}
              placeholder="Select city"
              labelValue={"City *"}
            ></Form.Dropdown>
          </div>
          <div>
            <Form.Dropdown
              name="type"
              data={dropdown}
              placeholder="Select type of establishment"
              idValue={"firstDropdown"}
              labelValue={"Type of establishment *"}
            ></Form.Dropdown>
            <span className="num-postcode-container"><Form.Input
              isNumber
              name="number"
              type="text"
              placeholder="Number"
              inputClass="number-input"
              label="Number *"
              required
            >
            </Form.Input>
              <Form.Input
                isNumber
                name="postalcode"
                type="text"
                placeholder="ZIP"
                inputClass="postal-input"
                label="Postal Code *"
                required>
              </Form.Input></span>
            <Form.Input
              isNumber
              name="phone"
              type="text"
              placeholder="Contact number"
              label="Contact number *"
              required
            >
            </Form.Input>
          </div>
        </div>
      </div>
      <button type="submit">Submit</button>
    </Form>

  );
};

const Registration2 = () => {
  const [sanitized_, setSanitized] = React.useState(false)
  const [handsanitizer_, setHandsanitizer] = React.useState(false)
  const [diaperchanger_, setDiaperchanger] = React.useState(false)
  const [contactless_, setContactless] = React.useState(false)
  const [handicap_, setHandicap] = React.useState(false)
  const data = {sanitized : sanitized_, handsanitizer : handsanitizer_, diaperchanger : diaperchanger_, contactless : contactless_, handicap : handicap_ }
  console.log("data", data)

  function handleSubmit(data) {
    bathroomdata.sanitized = data.sanitized
    bathroomdata.handsanitizer = data.handsanitizer
    bathroomdata.diaperchanger = data.diaperchanger
    bathroomdata.contactless = data.contactless
    bathroomdata.handicap = data.handicap
    console.log(bathroomdata, 'bathdata', data, 'data')
  }


  return (
<<<<<<< HEAD
    <>
      <h2>Is your bathroom a Happee place?</h2>
      <p>Please select the main features of your bathroom. In order <br /> to have a Happee place you must have all these features. </p>
      <div className="features-container">
        <Form.Button
          to={""}
          src={HappeePlace}
          alt={"happee"}
          variant={sanitized_ ? "feature-clicked" : "feature"}
          onClickFunc={() => { setSanitized(!sanitized_) }}
        >Sanitized</Form.Button>
        <Form.Button
          to={""}
          src={HandSanitizer}
          alt={"handsanitizer"}
          variant={handsanitizer_ ? "feature-clicked" : "feature"}
          onClickFunc={() => { setHandsanitizer(!handsanitizer_) }}
        >Hand sanitizer</Form.Button>
        <Form.Button
          to={""}
          src={BabyChanger}
          alt={"babychanger"}
          variant={diaperchanger_ ? "feature-clicked" : "feature"}
          onClickFunc={() => { setDiaperchanger(!diaperchanger_) }}
        >Baby Changer</Form.Button>
        <Form.Button
          to={""}
          src={Contactless}
          alt={"contactless"}
          variant={contactless_ ? "feature-clicked" : "feature"}
          onClickFunc={() => { setContactless(!contactless_) }}
        >Contactless</Form.Button>
        <Form.Button
          to={""}
          src={Handicap}
          alt={"handicap"}
          variant={handicap_ ? "feature-clicked" : "feature"}
          onClickFunc={() => { setHandicap(!handicap_) }}
        >Handicap</Form.Button>
      </div>
    <button type="button" onClick={handleSubmit(data)}>Submit</button>
    </>
=======
    <Form>
      <h3>Is your bathroom a Happee place?</h3>
      <p>Please select the main features of your bathroom. In order to have a Happee place you must have all these features. </p>
      <Form.Button
        children={"Sanitized"}
        to={""}
        src={HappeePlace}
        alt={"happee"}
        variant="feature"
      ></Form.Button>
      <Form.Button
        children={"Hand sanitizer"}
        to={""}
        src={HandSanitizer}
        alt={"handsanitizer"}
        variant="feature"
      ></Form.Button>
      <Form.Button
        children={"Baby Changer"}
        to={""}
        src={BabyChanger}
        alt={"babychanger"}
        variant="feature"
      ></Form.Button>
      <Form.Button
        children={"Contactless"}
        to={""}
        src={Contactless}
        alt={"contactless"}
        variant="feature"
      ></Form.Button>
      <Form.Button
        children={"Handicap"}
        to={""}
        src={Handicap}
        alt={"handicap"}
        variant="feature"
      ></Form.Button>
    </Form>
>>>>>>> origin/front
  );
};

const Registration3 = () => {
  const [mirror, setMirror] = React.useState(false)
  const [handDryer, setHandDryer] = React.useState(false)
  const [hairDryer, setHairDryer] = React.useState(false)
  const [potableWater, setPotableWater] = React.useState(false)
  const [waterFountain, setWaterFountain] = React.useState(false)
  const [femaleProducts, setFemaleProducts] = React.useState(false)
  const [toiletPaper, setToiletPaper] = React.useState(false)
  const [free, setFree] = React.useState(false)

  
  return (
<<<<<<< HEAD
    <>
      <h2>Is your bathroom a Happee place?</h2>
      <p>Please select the other amenities in your bathroom. More is always better! </p>
    {/*   <div className="features-main-container"> */}
        <div className="features-container">
          <Form.Button
            to={""}
            src={Mirror}
            alt={"mirror"}
            variant={mirror ? "feature-clicked" : "feature"}
            onClickFunc={() => { setMirror(!mirror) }}
          >Mirror</Form.Button>
          <Form.Button
            to={""}
            src={HandDryer}
            alt={"handdryer"}
            variant={handDryer ? "feature-clicked" : "feature"}
            onClickFunc={() => { setHandDryer(!handDryer) }}
          >Hand Dryer</Form.Button>
          <Form.Button
            to={""}
            src={HairDryer}
            alt={"hairdryer"}
            variant={hairDryer ? "feature-clicked" : "feature"}
            onClickFunc={() => { setHairDryer(!hairDryer) }}
          >Hair Dryer</Form.Button>
          <Form.Button
            to={""}
            src={PotableWater}
            alt={"water"}
            variant={potableWater ? "feature-clicked" : "feature"}
            onClickFunc={() => { setPotableWater(!potableWater) }}
          >Potable Water</Form.Button>
 {/*        </div>
        <div className="features-container"> */}
          <Form.Button
            to={""}
            src={WaterFountain}
            alt={"water"}
            variant={waterFountain ? "feature-clicked" : "feature"}
            onClickFunc={() => { setWaterFountain(!waterFountain) }}
          >Water Fountain</Form.Button>
          <Form.Button
            to={""}
            src={FemaleProducts}
            alt={"femaleproducts"}
            variant={femaleProducts ? "feature-clicked" : "feature"}
            onClickFunc={() => { setFemaleProducts(!femaleProducts) }}
          >Female Products</Form.Button>
          <Form.Button
            to={""}
            src={ToiletPaper}
            alt={"toiletpaper"}
            variant={toiletPaper ? "feature-clicked" : "feature"}
            onClickFunc={() => { setToiletPaper(!toiletPaper) }}
          >Toilet Paper</Form.Button>
          <Form.Button
            to={""}
            src={Free}
            alt={"free"}
            variant={free ? "feature-clicked" : "feature"}
            onClickFunc={() => { setFree(!free) }}
          >Free</Form.Button>
        </div>
   {/*    </div> */}
    </>
=======
    <Form>
      <h3>Is your bathroom a Happee place?</h3>
      <p>Please select the other amenities in your bathroom. More is always better! </p>
      <Form.Button
        children={"Female Products"}
        to={""}
        src={FemaleProducts}
        alt={"femaleproducts"}
        variant="feature"
      ></Form.Button>
      <Form.Button
        children={"Free"}
        to={""}
        src={Free}
        alt={"free"}
        variant="feature"
      ></Form.Button>
      <Form.Button
        children={"Hair Dryer"}
        to={""}
        src={HairDryer}
        alt={"hairdryer"}
        variant="feature"
      ></Form.Button>
      <Form.Button
        children={"Hand Dryer"}
        to={""}
        src={HandDryer}
        alt={"handdryer"}
        variant="feature"
      ></Form.Button>
      <Form.Button
        children={"Mirror"}
        to={""}
        src={Mirror}
        alt={"mirror"}
        variant="feature"
      ></Form.Button>
      <Form.Button
        children={"Potable Water"}
        to={""}
        src={PotableWater}
        alt={"water"}
        variant="feature"
      ></Form.Button>
      <Form.Button
        children={"Toilet Paper"}
        to={""}
        src={ToiletPaper}
        alt={"toiletpaper"}
        variant="feature"
      ></Form.Button>
      <Form.Button
        children={"Water Fountain"}
        to={""}
        src={WaterFountain}
        alt={"water"}
        variant="feature"
      ></Form.Button>

    </Form>
>>>>>>> origin/front
  );
};
const Registration4 = () => {
  function handleSubmit(data) {
    /*const store = JSON.parse(localStorage.getItem('login')).JWTtoken */
    /*event.preventDefault();*/
    console.log('data', JSON.stringify(data))
    fetch("/api/bathroom", {
      headers: {
        /*       "Authorization": `Bearer ${store}`, */
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(resp => resp.json())
      .then(data => {
        console.log('data1', data, 'datastr', JSON.stringify(data));
  /*               if (data.type === "error") {
                  setErrors(data.message)
                }  */
      })
      .catch(err => {
        console.log(err)
      })
  } 
  return (
    <>
      <p>Thank you for uploading your bathroom!</p>
      <img src={Success} alt="success" />
      <p>
        The Happee team will contact you as soon as possible to review your
        bathroom. Meanwhile your place will be shown in the map as unreviewed.
      </p>
      <button type="button" onClick={handleSubmit(bathroomdata)}>Submit</button>
    </>
  );
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 0,
      stepId: 0,
    };
    this.handlePlusTab = this.handlePlusTab.bind(this);
    this.handleMinusTab = this.handleMinusTab.bind(this);
    this.getTabContent = this.getTabContent.bind(this);
    /*   this.handleSubmit = this.handleSubmit.bind(this) */
  }

  handlePlusTab() {
    this.setState({ activeId: this.state.activeId + 1, stepId: this.state.stepId + 1 }, function () {
      console.log(this.state.activeId);
    });
  }

  handleMinusTab() {
    this.setState({ activeId: this.state.activeId - 1, stepId: this.state.stepId - 1 }, function () {
      console.log(this.state.activeId);
    });
  }

  getTabContent() {
    switch (this.state.activeId) {
      case 0:
        return <Registration1 />;
      case 1:
        return <Registration2 />;
      case 2:
        return <Registration3 />;
      case 3:
        return <Registration4 />;
      /*default:
      /*return <p>Nothing here</p>;*/
    }
  }


  render() {
    return (
      <>
        <div className="stepper-container">

        </div>
        <div className="container">
          <div className="title-container">
            <h1>Share your <br />  Happee place</h1>
            <p>
              Be part of the Happee community and experience the <br /> new culture of clean
              bathrooms
        </p>
            <img src={mainPicture} alt="Main pic of WC" />
          </div>
          <div className="bathroom-registration-container">
            <MyStepper activeStepId={this.state.stepId} />
            <div>{this.getTabContent(this.state.activeId)}</div>
            <div className="button-container">
              <Form>
                <Form.Button to={""} variant="brand-continue" onClickFunc={this.handlePlusTab}>
                  Continue
          </Form.Button>
                <Form.Button
                  to={""}
                  variant="brand-back"
                  onClickFunc={this.handleMinusTab}
                  
                >
                  Back
          </Form.Button>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
