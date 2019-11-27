import * as React from 'react'
import './cart-table.scss'
import {connect} from 'react-redux'
import {deleteFromCard} from '../../actions'

const CartTable = ({items, deleteFromCard}) => {
  let counter = 0
  let titles = []
  items.forEach(el => console.log(items.indexOf(el.title)))
  
  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {
          items.map(item => {
            const {title, price, url, id} = item
            return (
              <div className="cart__item" key={id}>
                <img src={url} className="cart__item-img" alt={title}></img>
                <div className="cart__item-title">{title}</div>
                <div className="cart__item-price">{price}$</div>
                <div onClick={deleteFromCard.bind(this, id)} className="cart__close">&times;</div>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

const mapStateToProps = ({items}) => {
  return {
    items
  }
}

const mapDispatchToProps = {
  deleteFromCard
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);