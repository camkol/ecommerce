export default function TermsAndConditionsField() {
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
