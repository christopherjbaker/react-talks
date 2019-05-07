// before
<h1 className="greeting">
  Hello, {name}!
</h1>

// after
React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, ',
  name,
  '!'
);
