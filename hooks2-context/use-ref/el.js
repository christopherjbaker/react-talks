import React, { useRef, useEffect } from 'react';

function Hello() {
  const el = useRef();
  const map = useRef();

  useEffect(() => {
    map.current = new google.maps.Map(el.current, {});
  }, []);

  return (
    <div ref={el} />
  );
};
