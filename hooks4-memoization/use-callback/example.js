import React, { useCallback } from 'react';

function Hello({ firstName, lastName }) {
  const handleClick = useCallback(() => {
    return `${firstName} ${lastName}`;
  }, [ firstName, lastName ]);

  return (
    <Thing onClick={handleClick}>Hello</Thing>
  );
};
