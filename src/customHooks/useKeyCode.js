import { useRef, useEffect } from 'react';

export const useKeyCode = (keyCode, callBack) => {
  const callbackRef = useRef(callBack);

  useEffect(()=> {
    callbackRef.current = callBack;
  })

  useEffect(() => {
    const handle = event => {
      if(event.keyCode === keyCode) {
        callbackRef.current(event)
      }
    }

    document.addEventListener('keypress', handle);
    return () => document.removeEventListener('keypress', handle);
  }, [keyCode])
}
