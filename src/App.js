import React from "react";
import "./registration.css";

function RegistrationForm() {
  const titleOptions = ["Mr", "Ms", "Miss", "Mrs", "Dr", "Prof", "Sr"];
  const stateOptions = [
    "-", // placeholder
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  const countryOptions = [
    "Select a country",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  return (
    <form method="post" action="https://register-demo.freecodecamp.org">
      <fieldset>
        <NameField
          titleOptions={titleOptions}
          firstNamePlaceholder="First"
          lastNamePlaceholder="Last"
        />
        <StreetAddressField />
        <CityStateField
          stateOptions={stateOptions}
          cityLabel="City"
          stateLabel="State"
        />
        <ZipCountryField
          countryOptions={countryOptions}
          zipcodeLabel="Zipcode"
          countryLabel="Country"
        />
        <EmailField />
        <PhoneField />
        <TermsAndConditionsField />
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
  );
}

function NameField(props) {
  const { titleOptions, firstNamePlaceholder, lastNamePlaceholder } = props;

  return (
    <label htmlFor="fullName">
      Name:
      <div className="slots" id="fullName">
        <select id="title" name="title" required>
          <option value="">Title</option>
          {titleOptions.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
        <input
          id="first-name"
          name="first-name"
          type="text"
          placeholder={firstNamePlaceholder}
          required
        />
        <input
          id="last-name"
          name="last-name"
          type="text"
          placeholder={lastNamePlaceholder}
          required
        />
      </div>
    </label>
  );
}

function StreetAddressField() {
  return (
    <label htmlFor="streetAddress">
      Street Address:
      <div className="slots" id="streetAddress">
        <input
          id="street-number"
          name="street-number"
          type="text"
          placeholder="Number"
          required
        />
        <input
          id="street"
          name="street"
          type="text"
          placeholder="Street"
          required
        />
      </div>
    </label>
  );
}

function CityStateField(props) {
  const { stateOptions, cityLabel, stateLabel } = props;

  return (
    <div className="slots" id="cityState">
      <label htmlFor="city" id="cityCase">
        {cityLabel}:
        <input id="city" name="city" type="text" required />
      </label>
      <label htmlFor="state" id="stateCase">
        {stateLabel}:
        <select id="state" name="state" required>
          <option value="" disabled>
            -
          </option>
          {stateOptions.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

function ZipCountryField(props) {
  const { countryOptions, zipcodeLabel, countryLabel } = props;

  function get_api() {
    fetch(`http://api.zippopotam.us/us/${zip}`)
      .then((response) =>
        response.json().then((data) => {
          console.log(data);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="slots" id="zipCountry">
      <label htmlFor="zipcode" id="zipcodeCase">
        {zipcodeLabel}:
        <input id="zipcode" name="zipcode" type="text" required />
      </label>
      <label htmlFor="country" id="countryCase">
        {countryLabel}:
        <select id="country" name="country" required>
          <option value="" disabled>
            -
          </option>
          {countryOptions.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

function EmailField() {
  return (
    <label htmlFor="email">
      Enter Your Email Address:
      <input id="email" name="email" type="email" required />
    </label>
  );
}

function PhoneField() {
  return (
    <label htmlFor="phone">
      Enter Your Phone Number:
      <input id="phone" name="phone" type="tel" />
    </label>
  );
}

function TermsAndConditionsField() {
  return (
    <label htmlFor="terms-and-conditions">
      <input
        id="terms-and-conditions"
        type="checkbox"
        required
        name="terms-and-conditions"
        className="inline"
      />
      I accept the{" "}
      <a href="https://www.freecodecamp.org/news/terms-of-service/">
        terms and conditions
      </a>
    </label>
  );
}

function App() {
  return (
    <main>
      <section id="registration">
        <h1>Registration Form</h1>
        <p>Please fill out this form with the required information</p>
        <RegistrationForm />
      </section>
    </main>
  );
}

export default App;
