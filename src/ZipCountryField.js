export default function ZipCountryField(props) {
  const { countryOptions, zipcodeLabel, countryLabel } = props;

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
