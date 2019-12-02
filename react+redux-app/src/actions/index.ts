const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  }
}

const menuReq = () => {
  return {
    type: 'MENU_REQUESTED',
  }
}

const menuErr = () => {
  return {
    type: 'MENU_ERROR'
  }
}

const addedToCard = (id) => {
  return {
    type: 'ADD_ITEM_TO_CARD',
    payload: id
  }
}

const deleteFromCard = (id) => {
  return {
    type: 'DELETE_FROM_CARD',
    payload: id
  }
}

export {
  menuLoaded,
  menuReq,
  menuErr,
  addedToCard,
  deleteFromCard
}
