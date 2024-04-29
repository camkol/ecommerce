export default function CityStateField(props) {
  const { stateOptions } = props;

  return (
    <div className="slots" id="cityState">
      <label htmlFor="city" id="cityCase">
        City:
        <input id="city" name="city" type="text" required />
      </label>
      <label htmlFor="state" id="stateCase">
        State:
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
