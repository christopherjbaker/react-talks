function Profile({ name, age, phone, github, twitter }) {
  return (
    <div>
      <h2 className="profile-name">{name}</h2>
      <ul className="profile-info">
        <li className="profile-row">
          <span className="profile-label">Age</span>
          <span className="profile-value">{age} years</span>
        </li>
        <li className="profile-row">
          <span className="profile-label">Phone</span>
          <span className="profile-value">{phone}</span>
        </li>
        <li className="profile-row">
          <span className="profile-label">
            <a href={`http://www.github.com/${github}`}>Github</a>
          </span>
        </li>
        <li className="profile-row">
          <span className="profile-label">
            <a href={`http://www.twitter.com/${twitter}`}>Twitter</a>
          </span>
        </li>
      </ul>
    </div>
  );
};
