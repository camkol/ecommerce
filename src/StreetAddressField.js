export default function StreetAddressField() {
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
