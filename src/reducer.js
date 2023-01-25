

export const initialState = {
  basket: [],
};
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic for adding item to basket
      //...state => state[0], state[1], state[2]
      // state store all objects for React app which is created by useStateValue()
      // basket - one of keys in state object
      // basket: [...state.basket, action.item] => 
      //        1. create new value with name basket in state object
      //        2. Put there all items from state.basket (...state.basket)
      //        3. Put there action.item. 
      //           action.item holds product value which we dispatched from Product.addToBasket function 
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      break;
    case "REMOVE_TO_BASKET":
      //Logic for removing item from basket
      break;
    default:
      return { state };
  }
}

export default reducer;
