import React, { RefObject, FC } from 'react';
import { fireEvent } from '@testing-library/dom';
import { act } from '@testing-library/react-hooks';

import { render } from '@testing-library/react';
import useHover from './useHover';

interface RenderHookProps {
  callback: (isHovering: boolean, ref: RefObject<HTMLDivElement>) => void;
}

const RenderHook: FC<RenderHookProps> = ({ callback }) => {
  const [ref, isHovering] = useHover<any>();

  callback(isHovering, ref);

  return (
    <div ref={ref}>test</div>
  );
};

// TODO: fix strange warning
it.skip('should update return value on hover', () => {
  jest.useFakeTimers();

  let hasHover = false;
  let currentRef: RefObject<HTMLDivElement> | null = null;
  render(<RenderHook callback={(isHovering, ref) => { hasHover = isHovering; currentRef = ref; }} />);

  expect(hasHover).toBe(false);

  act(() => {
    if (!currentRef || !currentRef.current) {
      throw new Error('ref is null');
    }
    fireEvent.mouseOver(currentRef.current);
  });

  act(() => {
    jest.runOnlyPendingTimers();
  });

  expect(hasHover).toBe(true);

  act(() => {
    if (!currentRef || !currentRef.current) {
      throw new Error('ref is null');
    }
    fireEvent.mouseOut(currentRef.current);
  });

  expect(hasHover).toBe(false);
});
