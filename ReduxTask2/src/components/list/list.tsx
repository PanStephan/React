import * as React from 'react'
import ListItem from '../listItem/listItem'
import Input from '../formItem/formItem'

export default class List extends React.Component<any> {
  render() {
    return (
      <div className='list-overflow '>
        {this.props.todos.map(el => (
          // <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
          <ListItem key={el.id} {...el}/>
        ))}
        <Input/>
      </div>
    )
  }
}
 
