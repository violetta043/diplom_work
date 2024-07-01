import "./Input.css";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";

const Input = ({ showIcon, label, name, value, onInputChange }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleClick = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="InputWrapper">
      <input
        type={showIcon ? (isPasswordVisible ? "text" : "password") : "text"}
        className="Input"
        name={name}
        value={value}
        onChange={(event) => onInputChange(event.target.value)}
      />
      <label
        className={`Text-label ${value !== "" ? "Text-label--hidden" : ""}`}
      >
        {label}
      </label>
      {showIcon && (
        <button onClick={handleClick} className="IconButton">
          {isPasswordVisible ? (
            <IoEyeOff size="34px" color="#44B26F" />
          ) : (
            <IoEye size="34px" color="#44B26F" />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
