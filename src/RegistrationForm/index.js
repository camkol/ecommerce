import React, { useEffect, useState } from "react";
import NameField from "./NameField";
import StreetAddressField from "./StreetAddressField";
import CityStateField from "./CityStateField";
import ZipCountryField from "./ZipCountryField";
import EmailPhone from "./EmailPhone";
import TermsAndConditionsField from "./TermsAndConditionsField";
import titleOptions from "./titleOptions";
// import stateOptions from "./stateOptions";
//import countryOptions from "./countryOptions";

export default function RegistrationForm() {
  const [zipcode, setZipcode] = useState("");
  const [cityState, setCityState] = useState([]);
  //const { countryOptions, zipcodeLabel, countryLabel } = props;

  // function get_api() {
  //   fetch(`http://api.zippopotam.us/us/${zip}`)
  //     .then((response) =>
  //       response.json().then((data) => {
  //         console.log(data);
  //       })
  //     )
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // const zip = "23518";

  useEffect(
    function () {
      async function get_api() {
        if (zipcode.length === 5) {
          try {
            const response = await fetch(
              `http://api.zippopotam.us/us/${zipcode}`
            );

            if (!response.ok)
              throw new Error("Something is wrong with Zipcode");

            const data = await response.json();
            setCityState(data);
            console.log(data);
          } catch (err) {
            console.error(err);
            setCityState(null);
          }
        }
      }

      get_api();
    },
    [zipcode]
  );

  return (
    <form method="post" action="https://register-demo.freecodecamp.org">
      <fieldset>
        <NameField titleOptions={titleOptions} />
        <StreetAddressField />
        <ZipCountryField zipcode={zipcode} setZipcode={setZipcode} />{" "}
        {/* <ZipCountryField countryOptions={countryOptions} />{" "} */}
        <CityStateField cityState={cityState} />
        <EmailPhone />
        <TermsAndConditionsField />
      </fieldset>
      <input id="submit" type="submit" value="Submit" />
    </form>
  );
}
