import React, { useMemo } from 'react';

function Hello({ bigJSONBlob }) {
  const lines = useMemo(() => {
    const data = JSON.parse(bigJSONBlob);
    return flatten(data);
  }, [ bigJSONBlob ]);

  return (
    <div>{lines.map(line => <div>{line}</div>)}</div>
  );
};

function flatten(input) {
  return Object.keys(input).map(key => {
    if (typeof input[key] === 'object') {
      return [
        `${key}:`,
        ...flatten(input[key]).map(line => `  - ${line}`),
      ];
    }

    return [ `${key}: ${input[key]}` ];
  }).flat();
}
