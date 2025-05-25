import { useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T) => void, () => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window !== "undefined") {
        const item = window.localStorage.getItem(key);
        if (!item) return initialValue;
        const parsed = JSON.parse(item);
        return parsed ?? initialValue;
      }
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
    }
    return initialValue;
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  };

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error("Error removing item from localStorage:", error);
    }
  };

  return [storedValue, setValue, removeItem];
};
