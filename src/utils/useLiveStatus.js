import React, { useEffect, useState } from 'react';
const useLiveStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener('offline', () => {
      setIsOnline(false);
    });
    window.addEventListener('online', () => {
      setIsOnline(true);
    });
  }, []);
  return isOnline;
};
export default useLiveStatus;
