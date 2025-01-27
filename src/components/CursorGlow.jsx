import { useState, useEffect, useRef } from "react";
import "../App.css";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (cursorRef.current) {
        setPosition({ x: event.clientX, y: event.clientY });
      }
    };

    const updateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${position.x - 10}px, ${position.y - 10}px)`;
      }
      requestAnimationFrame(updateCursor);
    };

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(updateCursor);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [position]);

  return (
    <div
      className="custom-cursor"
      ref={cursorRef}
    />
  );
};

export default CursorGlow;
