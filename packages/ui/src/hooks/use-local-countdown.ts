import { useCallback, useEffect, useRef } from "react";
import { useDebounceCallback, useLocalStorage } from "usehooks-ts";

export const useLocalCountdown = (
  countStart: number,
  localKey: string,
): [
  number,
  {
    startCountdown: () => void;
    stopCountdown: () => void;
    resetCountdown: () => void;
    clearCountdown: () => void;
  },
] => {
  const [timer, setLocalTimer] = useLocalStorage(localKey, countStart);

  const interval = useRef<number | null>(null);

  const startCountdown = useDebounceCallback(() => {
    setTimeout(() => {
      interval.current = window.setInterval(() => {
        setLocalTimer((p) => p - 1);
      }, 1000);
    });
  }, 500);

  const stopCountdown = useCallback(() => {
    if (interval.current) {
      window.clearInterval(interval.current);
      interval.current = null;
    }
  }, []);

  const resetCountdown = useCallback(() => {
    setLocalTimer(countStart);
    startCountdown();
  }, [setLocalTimer, countStart, startCountdown]);

  useEffect(() => {
    if (timer < countStart) {
      startCountdown();
    }
    return () => {
      stopCountdown();
    };
  }, [countStart, startCountdown, stopCountdown, timer]);

  useEffect(() => {
    if (timer <= 0) {
      stopCountdown();
    }
  }, [timer, stopCountdown]);

  return [
    timer,
    {
      startCountdown,
      stopCountdown,
      resetCountdown,
      clearCountdown: () => localStorage.removeItem(localKey),
    },
  ];
};
