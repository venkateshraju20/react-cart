// Add item to Cart
export const addCart = (product) => {
  return {
    type: "ADD-ITEM",
    payload: product,
  };
}; 
// Add item to Cart
export const deleteCart = (product) => {
  return {
    type: "DELETE-ITEM",
    payload: product,
  };
};
