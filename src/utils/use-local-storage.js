import { useState, useEffect } from 'react'

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    if (window) {
      const stickyValue = window.localStorage.getItem(key);

      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    }
  });

  useEffect(() => {
    if (window) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage
