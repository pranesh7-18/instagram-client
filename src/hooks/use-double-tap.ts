import { useCallback, useRef } from 'react';

export function useDoubleTap(onDoubleTap: () => void, delay = 300) {
  const lastTap = useRef<number>(0);

  const handleTap = useCallback(() => {
    const now = Date.now();
    const timeDiff = now - lastTap.current;

    if (timeDiff < delay && timeDiff > 0) {
      onDoubleTap();
    }

    lastTap.current = now;
  }, [onDoubleTap, delay]);

  return handleTap;
}
