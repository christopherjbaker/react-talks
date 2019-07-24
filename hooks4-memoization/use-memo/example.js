import React, { useMemo } from 'react';

function Hello({ firstName, lastName }) {
  const name = useMemo(() => {
    // some expensive derived value
    return `${firstName} ${lastName}`;
  }, [ firstName, lastName ]);
​
  return (
    <div>{name}</div>
  );
};
