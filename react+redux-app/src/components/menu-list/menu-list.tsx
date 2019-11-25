import * as React from 'react'
import MenuListItem from '../menu-list-item'
import {connect} from 'react-redux'
import WithRestoService from '../hoc'
import {menuLoaded, menuReq} from '../../actions'
import Spinner from '../spinner'

import './menu-list.scss'

class MenuList extends React.Component<any> {

  componentDidMount() {
    const{RestoService, menuLoaded, menuReq} =  this.props
    menuReq()
    RestoService.getMenuItems()
    .then(res => menuLoaded(res))
  }

  render() {
    const{menuItems, loading} = this.props

    return (
      loading ? <Spinner/> :
      <ul className="menu__list">
        {
          menuItems.map(item => {
            return <MenuListItem key={item.id} menuItem={item}/>
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
  menuReq
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));