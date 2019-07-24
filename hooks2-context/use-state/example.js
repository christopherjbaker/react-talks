import React, { useState } from 'react';

function Hello() {
  const [ value, setValue ] = useState('');

  return (
    <input
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};
