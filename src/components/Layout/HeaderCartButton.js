import React, {useContext} from "react";
import { FaShoppingCart } from "react-icons/fa";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=> {
    return curNumber + item.amount
  }, 0)
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <FaShoppingCart />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
