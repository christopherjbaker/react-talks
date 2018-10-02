function Thing1() {
  return (
    <div className="thing">Hello World!</div>
  );
}

function Thing2({ isActive }) {
  let className = 'thing';
  if (isActive) {
    className += ' thing-active';
  }

  return (
    <div className={className}>Hello World!</div>
  );
}
