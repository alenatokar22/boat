import * as React from 'react';
import { Battlefield } from './Battlefield';
import { HeaderWithCounter } from './HeaderWithCounter';
import { ResetButton } from './ResetButton';
import { useGameState } from './state/useGameState';

import './App.css';

export default function App() {
  const { turn, reset, matrix, fire, won } = useGameState();

  React.useEffect(() => {
    if (won) {
      setTimeout(() => alert('MOSCOW DOWN!'), 0);
    }
  }, [won]);

  console.log('App component called');

  return (
    <div className="App">
      <HeaderWithCounter turn={turn} />
      <Battlefield disabled={won} matrix={matrix} onFire={fire} />
      <ResetButton reset={reset} />
    </div>
  );
}
