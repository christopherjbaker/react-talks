function Profile({ name, age, phone, github, twitter }) {
  return (
    <div>
      <h2 className="profile-name">{name}</h2>
      <ul className="profile-info">
        <Item>
          <Label>Age</Label>
          <Value>{age} years</Value>
        </Item>
        <Item>
          <Label>Phone</Label>
          <Value>{phone}</Value>
        </Item>
        <Item>
          <Label>
            <a href={`http://www.github.com/${github}`}>Github</a>
          </Label>
        </Item>
        <Item>
          <Label>
            <a href={`http://www.twitter.com/${twitter}`}>Twitter</a>
          </Label>
        </Item>
      </ul>
    </div>
  );
};

function Item({ children, ...props }) => (
  <li {...props} className="profile-row">{children}</li>
);

function Label({ children, ...props }) => (
  <span {...props} className="profile-label">{children}</span>
);

function Value({ children, ...props }) => (
  <span {...props} className="profile-value">{children}</span>
);
