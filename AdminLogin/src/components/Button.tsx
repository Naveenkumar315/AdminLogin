import React from "react";
import "../App.css";

interface ButtonProp {
  text: string;
  className: string;
  color?: string;
  background?: string;
  onClick?: () => void;
}

const Buttons: React.FC<ButtonProp> = ({ text, className, color, background, onClick }) => {
  return (
    <div>
      <button onClick={onClick} style={{
        color: color,
        backgroundColor: background
      }} className={className}>{text}</button>
    </div>
  );
};

export default Buttons;
