import * as React from 'react';
import { CHECKED_SHIP, CHECKED_WATER, WATER, SHIP } from './state/cellstate';

type CellProps = {
  handleClick: (y: number, x: number) => void;
  value: number;
  x: number;
  y: number;
};

const cellStateMap: { [key: number]: string } = {
// const cellStateMap: any = {
  [WATER]: '',
  [SHIP]: '',
  [CHECKED_WATER]: '🌊',
  [CHECKED_SHIP]: '🔥',
};

const Cell = ({ handleClick, value, x, y }: CellProps) => {
  // console.log('Cell component called');
  return (
    <button type='button' className={'cell'} onClick={() => handleClick(y, x)}>
      {cellStateMap[value]}
    </button>
  );
};

type BattlefieldProps = {
  matrix: number[][];
  disabled: boolean;
  onFire: (y: number, x: number) => void;
};
const empty = () => null;

export const Battlefield = ({ matrix, onFire, disabled }: BattlefieldProps) => {
  const fire = disabled ? empty : onFire;
  console.log('Battlefield component called');
  return (
    <div className={`${disabled ? 'disabled' : ''}`}>
      {matrix.map((line, lineNumber) => (
        <div className="line" key={lineNumber}>
          {line.map((v, i) => (
            <Cell
              key={`${lineNumber}${i}`}
              value={v}
              y={lineNumber}
              x={i}
              handleClick={fire}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
