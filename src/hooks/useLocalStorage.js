import { useState, useEffect } from "react";

function useLocalStorage(initialValue, key) {
  const getValue = () => {
    const storage = localStorage.getItem(key); // string || null

    if (storage) {
      return storage;
    }
    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

export { useLocalStorage };
