// Export initial state
export const initialState = {
  basket: [],
};

// Reducer function
function reducer(state, action) {
  console.log(action);
  // Set switch case for Add to cart and remove from cart
  switch (action.type) {
    case "ADD_TO_BASKET":
      /*
      Logic for adding item to basket
      ...state => state[0], state[1], state[2]
      state store all objects for React app which is created by useStateValue()
      basket - one of keys in state object
      basket: [...state.basket, action.item] =>
             1. create new value with name basket in state object
             2. Put there all items from state.basket (...state.basket)
             3. Put there action.item.
                action.item holds product value which we dispatched from Product.addToBasket function
      */

      // Variable to include basket filtered items
      const addItems = state.basket.filter(function (item) {
        return item.title === action.item.title;
      });

      // Conditional statement for basket items
      if (addItems.length > 0) {
        const newBasket = state.basket.map(function (item) {
          if (item.title === action.item.title) {
            item.quantity = item.quantity + 1;
          }
          return item;
        });
        return {
          ...state,
          basket: newBasket,
        };
      } else {
        action.item.quantity = 1;
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      }
      // Break switch case
      break;
    case "REMOVE_FROM_BASKET":
      const removeItems = state.basket.filter(function (item) {
        return item.title === action.item.title;
      });

      if (removeItems.length > 0 && removeItems[0].quantity > 1) {
        const newBasket = state.basket.map(function (item) {
          if (item.title === action.item.title) {
            item.quantity = item.quantity - 1;
          }
          return item;
        });

        return {
          ...state,
          basket: newBasket,
        };
      } else {
        //Logic for removing item from basket
        const newBasket = state.basket.filter(function (item) {
          return item.title != action.item.title;
        });

        console.log(newBasket);

        return { ...state, basket: newBasket };
      }

      break;
    default:
      return { ...state };
  }
}

export default reducer;
