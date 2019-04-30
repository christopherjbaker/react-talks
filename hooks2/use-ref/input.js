import React, { useRef } from 'react';

function Hello() {
  const ref = useRef('');

  return (
    <input
      defaultValue={ref.current}
      onChange={e => ref.current = e.target.value}
    />
  );
};
