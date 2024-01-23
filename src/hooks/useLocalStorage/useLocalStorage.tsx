import { useState } from 'react';

export const useLocalStorage = <T,>(key: string, initData?: T) => {
  const storedData = localStorage.getItem(key);
  const prevData = storedData ? JSON.parse(storedData) : initData ? initData : {};

  const [currentValue, setCurrentValue] = useState<T>(prevData);

  const updateValue = (newData: T) => {
    const data = {
      ...currentValue,
      ...newData
    };
    setCurrentValue(data);
    localStorage.setItem(key, JSON.stringify(data));

    return;
  };

  return [currentValue, updateValue] as const;
};
