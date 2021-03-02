import { createStore } from 'redux'

const initialState = {
    cart: [],
  }
  
  const reducer = (state = initialState, action) => {
  

    if (action.type === 'ADD_TO_CART') {
        return { 
            ...state,
            cart: state.cart.concat(action.payload)
        }
    }

    if (action.type === 'UPDATE_QUANTITY') {
        return {...state, cart: state.cart.map((product,index) => {
            if (index === action.payload.index) {
              return {...product, quantity: product.quantity + action.payload.quantity}
            };
            return product;
          })
        }
    }

    if (action.type === 'REMOVE_FROM_CART') {
        return {
            ...state,
            cart: [...state.cart.slice(0, action.payload.index), ...state.cart.slice(action.payload.index + 1)]
        }
        
    }


    return state
  }


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store