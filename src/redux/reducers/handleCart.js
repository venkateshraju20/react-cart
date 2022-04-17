const cart = [];

export const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD-ITEM":
      //Check if product is already exists
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELETE-ITEM":
      const existItem = state.find((x) => x.id === product.id);
      if (existItem.qty === 1) {
        return state.filter((x) => x.id !== existItem.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};
