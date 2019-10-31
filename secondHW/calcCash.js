class calcCash {
  constructor() {

  }
  calc(own = 0) {
    return own.reduce((el, el1) => el + el1)
  }
}

export default calcCash