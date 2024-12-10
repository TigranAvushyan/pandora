import { useCallback, useEffect, useState } from 'react';

const useCountdown = (initialCountStart: number, interval = 1000) => {
  const [countStart, setCountStart] = useState(initialCountStart);
  const [timer, setTimer] = useState(initialCountStart);
  const [isRunning, setIsRunning] = useState(false);

  const startCountdown = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stopCountdown = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resetCountdown = useCallback(
    (newCountStart?: number) => {
      setIsRunning(false);
      const newStart = newCountStart ?? countStart;
      setCountStart(newStart);
      setTimer(newStart);
    },
    [countStart]
  );

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isRunning, interval]);

  return {
    timer,
    isRunning,
    startCountdown,
    stopCountdown,
    resetCountdown,
    setCountStart,
  };
};

export default useCountdown;
