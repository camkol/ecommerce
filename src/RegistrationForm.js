import React from "react";
import NameField from "./NameField";
import StreetAddressField from "./StreetAddressField";
import CityStateField from "./CityStateField";
import ZipCountryField from "./ZipCountryField";
import EmailPhone from "./EmailPhone";
import TermsAndConditionsField from "./TermsAndConditionsField";
import titleOptions from "./titleOptions";
import stateOptions from "./stateOptions";
import countryOptions from "./countryOptions";

export default function RegistrationForm() {
  return (
    <form method="post" action="https://register-demo.freecodecamp.org">
      <fieldset>
        <NameField titleOptions={titleOptions} />
        <StreetAddressField />
        <ZipCountryField countryOptions={countryOptions} />{" "}
        <CityStateField stateOptions={stateOptions} />
        <EmailPhone />
        <TermsAndConditionsField />
      </fieldset>
      <input id="submit" type="submit" value="Submit" />
    </form>
  );
}
