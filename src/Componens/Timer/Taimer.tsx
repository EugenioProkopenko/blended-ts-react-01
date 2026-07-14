import { useEffect, useState } from 'react';

export default function Timer() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);
  return <p>Timer box {time.toLocaleTimeString()}</p>;
}
