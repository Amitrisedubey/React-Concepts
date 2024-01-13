import { useEffect, useState } from "react";

export const Timer = () => {
  const [counter, setCounter] = useState(50);
  useEffect(() => {
    //updating phase
    const id = setInterval(() => {
      setCounter((prev) => {
        if (prev === 0) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      //unmounting phase useeffect callback function
      //unmounting phase
      console.log("unmounting");
      clearInterval(id);
    };
  }, []);
  return (
    /** mounting phase */
    <div>
      <h1>Timer :- {counter}</h1>
    </div>
  );
};
