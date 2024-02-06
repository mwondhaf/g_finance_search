import { useEffect, useRef } from "react";

export default function ClickOutside({ children, onClick }) {
  const wrapperRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickListener);

    return () => {
      document.removeEventListener("mousedown", handleClickListener);
    };
  }, []);

  const handleClickListener = (event) => {
    let clickedInside;

    clickedInside = wrapperRef && wrapperRef.current.contains(event.target);

    if (clickedInside) return;
    else onClick();
  };

  return <div ref={wrapperRef}>{children}</div>;
}
