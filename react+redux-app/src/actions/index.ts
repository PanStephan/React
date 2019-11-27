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

export {
  menuLoaded,
  menuReq,
  menuErr
}
