import "./ProductButton.css";
import { GoPlus } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ProductButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/product-preview");
  };
  return (
    <>
      <button className="Button-prev" onClick={handleClick}>
        <div className="Button-logo-prev">
          <FaRegUser color="black" size="30px" />
        </div>
        Preview
      </button>

      <button className="Button-add">
        <div className="Button-logo-add">
          <GoPlus color="black" size="40px" />
        </div>
        Add product
      </button>
    </>
  );
};

export default ProductButton;
