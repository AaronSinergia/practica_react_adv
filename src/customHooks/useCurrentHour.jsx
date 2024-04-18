import { useState, useEffect } from 'react';

const useCurrentHour = () => {
  const [hour, setHour] = useState(new Date());

  useEffect(() => {
    const currentHour = setInterval(() => {
      setHour(new Date());
    }, 1000);

    return () => clearInterval(currentHour);
  }, []);

  return hour;
};

export default useCurrentHour;
