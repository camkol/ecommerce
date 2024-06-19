export default function CityStateField({ cityState }) {
  const city = cityState?.places?.[0]?.["place name"] || "";
  const state = cityState?.places?.[0]?.["state"] || "";

  return (
    <div className="slots" id="cityState">
      <label htmlFor="city" id="cityCase">
        City:
        <input id="city" name="city" type="text" value={city} readOnly />
      </label>
      <label htmlFor="state" id="stateCase">
        State:
        <input id="state" name="state" type="text" value={state} readOnly />
      </label>
    </div>
  );
}
