export default function ZipCountryField({ zipcode, setZipcode }) {
  return (
    <div id="zipCountry">
      <label htmlFor="zipcode" id="zipcodeCase">
        Zip Code:{" "}
        <div className="slots" id="zipcode">
          {" "}
          <input
            id="zip"
            name="zipcode"
            minLength={5}
            maxLength={5}
            type="text"
            onChange={(e) => setZipcode(e.target.value)}
            required
          />
          {/* <button id="search" type="button">
            Search
          </button> */}
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
