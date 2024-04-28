export default function NameField(props) {
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
