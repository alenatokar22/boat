import * as React from 'react';

export const ResetButton = ({ reset }: { reset: () => void; }) => {
  return (
    <button type='button' onClick={reset}>
      Reset
    </button>
  );
};
