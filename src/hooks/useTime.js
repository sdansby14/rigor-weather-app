import { useEffect, useState } from 'react';

const useTime = () => {
  const date = new Date();
  const [time, setTime] = useState(`${date.getHours()} am`);

  useEffect(() => {
    if (date.getHours() > 12) {
      setTime(`${date.getHours() - 12} pm`);
    }
  }, []);

  return time;
};

export default useTime;
