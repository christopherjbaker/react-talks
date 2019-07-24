import React, { useCallback } from 'react';

function Hello2() {
  const handleClick = useCallback(() => { /* do stuff */ }, []);

  return (
    <div onClick={handleClick}>Hello</div>
  );
};

function Hello2b() {
  const handleClick = () => { /* do stuff */ };
  const handleClickCallback = useCallback(handleClick, []);
  return (
    <div onClick={handleClickCallback}>Hello</div>
  );
};

function Hello1() {
  const handleClick = () => { /* do stuff */ };

  return (
    <div onClick={handleClick}>Hello</div>
  );
};

function Hello3() {
  const handleClick = useCallback(() => { /* do stuff */ }, []);

  return (
    <Thing onClick={handleClick}>Hello</Thing>
  );
};
