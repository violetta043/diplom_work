import "./ProductCart.css";
import lenovoImg from "../../assets/lenovo.png";
import { PiShoppingCartLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product-info/${product.id}`, { state: { product } });
  };

  return (
    <div className="Product-card" onClick={handleClick}>
      <img src={lenovoImg} className="lenovo" />
      <div className="Product-descr">
        <div key={product.id}>
          <p className="Product-name">{product.name}</p>
          <div className="Wrapper">
            <div className="Price">{product.price}</div>
            <div className="Quantity">Кількість:{product.quantity}</div>
          </div>
          <div className="Buy-section">
            <PiShoppingCartLight
              color="05BC52"
              size="45px"
              className="ShoppingCart"
            />
            <div className="Buy">Готовий до відправки</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
