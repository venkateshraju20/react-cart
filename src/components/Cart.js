import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, deleteCart } from "../redux/actions";

const Cart = () => {
  const products = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="container my-5 py-5 text-center">
        <i className="fa fa-cart-xmark me-1"></i>
        <i className="fa fa-shopping-cart me-1"></i>
        <h2>Your Cart is Empty!</h2>
        <NavLink to="/" className="btn btn-outline-dark px-3 py-2 mt-3">
          Continue Shopping
        </NavLink>
      </div>
    );
  };

  return (
    <>
      {products.length === 0 ? (
        <EmptyCart />
      ) : (
        products.map((product) => {
          return (
            <div className="container py-5" key={product.id}>
              <div className="row py-4 justify-content-center">
                <div className="col-md-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    width="180px"
                    height="200px"
                  />
                </div>
                <div className="col-md-4">
                  <h3>{product.title}</h3>
                  <p className="lead fw-bold">
                    {product.qty} X ${product.price} = $
                    {product.qty * product.price}
                  </p>
                  <button
                    className="btn btn-outline-dark me-4"
                    onClick={() => dispatch(deleteCart(product))}
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => dispatch(addCart(product))}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Cart;
