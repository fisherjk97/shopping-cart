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


    return state
  }


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store