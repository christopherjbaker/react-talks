import React from 'react';

function Hello1() {
  const handleClick = () => { /* do stuff */ };

  return (
    <div onClick={handleClick}>Hello</div>
  );
};

function Hello2() {
  const handleClick = useCallback(() => { /* do stuff */ }, []);

  return (
    <div onClick={handleClick}>Hello</div>
  );
};
