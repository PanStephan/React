import * as React from 'react'
import MenuListItem from '../menu-list-item'
import {connect} from 'react-redux'
import WithRestoService from '../hoc'
import {menuLoaded, menuReq, menuErr, addedToCard} from '../../actions'
import Spinner from '../spinner'

import './menu-list.scss'

class MenuList extends React.Component<any> {

  componentDidMount() {
    const{RestoService, menuLoaded, menuReq, category} =  this.props
    menuReq()
    RestoService.getMenuItems()
    .then(res => {     
      if(!category) return menuLoaded(res)
      const currentRes = res.filter(el => {
        return el.category === category.replace('/', '')
      })
      return menuLoaded(currentRes)
    })
    .catch(() => menuErr())
  }

  componentDidUpdate() {
    const{RestoService, menuLoaded, category} =  this.props
    menuReq()
    RestoService.getMenuItems()
    .then(res => {     
      const currentRes = res.filter(el => {
        return el.category === category.replace('/', '')
      })
      return menuLoaded(currentRes)
    })
    .catch(() => menuErr())
  }

  render() {
    const{menuItems, loading, addedToCard} = this.props

    return (
      loading ? <Spinner/> :
      <ul className="menu__list">
        {
          menuItems.map(item => {
            return <MenuListItem key={item.id} menuItem={item} onAddToCart={addedToCard.bind(this, item.id)}/>
          })
        }  
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
    loading: state.loading
  }
}

const mapDispatchToProps = {
  menuLoaded,
  menuReq,
  menuErr,
  addedToCard
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));