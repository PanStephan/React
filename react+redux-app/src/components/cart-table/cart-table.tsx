import * as React from 'react'
import './cart-table.scss'
import {connect} from 'react-redux'
import {deleteFromCard} from '../../actions'

const CartTable = ({menu, deleteFromCard}) => {
  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {
          menu.map(item => {
            const {title, price, url, id, number, counter} = item
            
            return (
              <div className="cart__item" key={id}>
                <div>{number}</div>
                <img src={url} className="cart__item-img" alt={title}></img>
                <div className="cart__item-title">{title}</div>
                <span className='cart__item-counter'>{counter}</span>
                <div className="cart__item-price">{price*counter}$</div>
                <div onClick={deleteFromCard.bind(this, id)} className="cart__close">&times;</div>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

const mapStateToProps = ({menu}) => {
  return {
    menu
  }
}

const mapDispatchToProps = {
  deleteFromCard
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);