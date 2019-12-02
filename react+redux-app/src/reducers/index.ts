import { stat } from "fs"

interface IPropState {
  menu: Array<any>,
  loading: boolean,
  total: number
}

const initialState:IPropState = {
  menu: [],
  loading: true,
  total: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload.map(item => {
          return {
            ...item,
            counter: 0
          }
        }),
        loading: false
      }
    case 'MENU_REQUESTED' :
      return {
        ...state,
        menu: state.menu,
        loading: true
      }
    case 'MENU_ERROR' : 
      return {
        menu: state.menu,
        loading: false
      }
    case 'ADD_ITEM_TO_CARD' :
      const id = action.payload
      
      const item = state.menu.find(el => {
        return el.id === id
      })
      item.counter += 1

      // return {
      //   ...state,
      //   total: price*counter,
      // }
    // case 'DELETE_FROM_CARD' :
    //   const index = action.payload 
    //   const itemIndex = state.items.findIndex(el => {
    //     return el.id === index
    //   })
    //   return {
    //     ...state,
    //     total: state.total - state.items[itemIndex].price,
    //     items: [
    //       ...state.items.slice(0, itemIndex),
    //       ...state.items.slice(itemIndex+1)
    //     ]
    //   }
    default:
      return state
  }
}

const generateKey =()=> ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15 >> c/4).toString(16));

export default reducer