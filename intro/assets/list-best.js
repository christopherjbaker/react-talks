function Profile({ name, age, phone, github, twitter }) {
  return (
    <div>
      <Title>{name}</Title>
      <Items>
        <Item label="Age" value={`${age} years`} />
        <Item label="Phone" value={phone} />
        <Item label="Gitbub" href={`http://www.github.com/${github}`} />
        <Item label="Twitter" href={`http://www.twitter.com/${twitter}`} />
      </Items>
    </div>
  );
};

function Title({ children, ...props }) => (
  <h2 {...props} className="profile-name">{children}</h2>
);

function Items({ children, ...props }) => (
  <ul {...props} className="profile-info">{children}</ul>
);

function Item({ label, value, href, ...props }) => (
  <li {...props} className="profile-row">
    <Label href={href}>{label}</Label>
    <Value>{value}</Value>
  </li>
);

function Label({ children, href, ...props }) {
  return (
    <span {...props} className="profile-label">
      { href ? (<a href={href}>{children}</a>) : children }
    </span>
  );
}

function Value({ children, ...props }) {
  if (!children) {
    return null;
  }

  return (
    <span {...props} className="profile-value">{children}</span>
  );
}
