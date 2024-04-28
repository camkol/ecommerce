export default function EmailPhone() {
  return (
    <div>
      <label htmlFor="email">
        Enter Your Email Address:
        <input id="email" name="email" type="email" required />
      </label>
      <label htmlFor="phone">
        Enter Your Phone Number:
        <input id="phone" name="phone" type="tel" />
      </label>
    </div>
  );
}
