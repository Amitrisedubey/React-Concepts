import { useRef } from "react";

export const UseRefUse = () => {
  const inputRef = useRef();

  return (
    <div>
      <div
        ref={inputRef}
        style={{ height: "400px", width: "400px", background: "coral" }}
      >
        1
      </div>
      <div style={{ height: "400px", width: "400px", background: "yellow" }}>
        2
      </div>
      <div style={{ height: "400px", width: "400px", background: "green" }}>
        3
      </div>

      <div style={{ height: "400px", width: "400px", background: "pink" }}>
        4
      </div>
      <div style={{ height: "400px", width: "400px", background: "grey" }}>
        5
      </div>
      <div style={{ height: "400px", width: "400px", background: "black" }}>
        6
      </div>
      <div style={{ height: "400px", width: "400px", background: "blue" }}>
        7
      </div>
      <div style={{ height: "400px", width: "400px", background: "purple" }}>
        8
      </div>
      <button
        onClick={() => {
          inputRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Back To Top
      </button>
    </div>
  );
};
