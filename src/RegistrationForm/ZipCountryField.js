import { useEffect } from "react";

export default function ZipCountryField() {
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

  const zip = "23518";

  useEffect(function () {
    async function get_api() {
      try {
        const response = await fetch(`http://api.zippopotam.us/us/${zip}`);

        if (!response.ok) throw new Error("Something is wrong with Zipcode");

        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    get_api();
  }, []);

  return (
    <div id="zipCountry">
      <label htmlFor="zipcode" id="zipcodeCase">
        Zip Code:{" "}
        <div className="slots" id="zipcode">
          {" "}
          <input id="zip" name="zipcode" type="text" required />
          <button id="search" type="button">
            Search
          </button>
        </div>
      </label>{" "}
      {/* <label htmlFor="country" id="countryCase">
        Country:
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
      </label> */}
    </div>
  );
}
