import { createStore } from 'redux'

const initialState = {
    cart: [],
    sum: 0
  }

  
  const reducer = (state = initialState, action) => {
  

    if (action.type === 'ADD_TO_CART') {
      
        return { 
            ...state,
            cart: state.cart.concat(action.payload),
            //sum: state.cart.map(li => (li.price * li.quantity + 1)).reduce((sum, val) => sum + val, 0)
        }
    }

    if (action.type === 'UPDATE_QUANTITY') {
        return {
            ...state,
            cart: state.cart.map((product,index) => {
            if (index === action.payload.index || (action.payload.id != null && product.id == action.payload.id)) {
              return {...product, quantity: product.quantity + action.payload.quantity}
            };
            return product;
          }),
          //sum: state.cart.map(li => (li.price * li.quantity)).reduce((sum, val) => sum + val, 0)
        }
    }

    if (action.type === 'REMOVE_FROM_CART') {
        return {
            ...state,
            cart: [...state.cart.slice(0, action.payload.index), ...state.cart.slice(action.payload.index + 1)],
            //sum: state.cart.map(li => (li.price * li.quantity)).reduce((sum, val) => sum + val, 0)
        }
        
    }


    return state
  }


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store