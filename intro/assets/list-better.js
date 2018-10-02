function Profile({ name, age, phone, github, twitter }) {
  return (
    <div>
      <h2 className="profile-name">{name}</h2>
      <ul className="profile-info">
        <Row>
          <Label>Age</Label>
          <Value>{age} years</Value>
        </Row>
        <Row>
          <Label>Phone</Label>
          <Value>{phone}</Value>
        </Row>
        <Row>
          <Label>
            <a href={`http://www.github.com/${github}`}>Gitbub</a>
          </Label>
        </Row>
        <Row>
          <Label>
            <a href={`http://www.twitter.com/${twitter}`}>Twitter</a>
          </Label>
        </Row>
      </ul>
    </div>
  );
};

function Row({ children, ...props }) => (
  <li {...props} className="profile-row">{children}</li>
);

function Label({ children, ...props }) => (
  <span {...props} className="profile-label">{children}</span>
);

function Value({ children, ...props }) => (
  <span {...props} className="profile-value">{children}</span>
);
