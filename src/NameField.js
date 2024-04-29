export default function NameField(props) {
  const { titleOptions } = props;

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
          placeholder="First"
          required
        />
        <input
          id="last-name"
          name="last-name"
          type="text"
          placeholder="Last"
          required
        />
      </div>
    </label>
  );
}
