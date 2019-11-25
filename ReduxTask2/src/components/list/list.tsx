import * as React from 'react'
import ListItem from '../listItem/listItem'
import FormItem from '../formItem/formItem'

export default class List extends React.Component<any> {
  render() {
    const{todos, toggleTodo, onFilter} = this.props
    return (
      <div className='list-overflow'>
        {todos.map(todo =>
          <ListItem text={todo.text} key={todo.id} completed={todo.completed} toggleTodo={() => toggleTodo(todo.id)}/>
        )}
        <FormItem/>
      </div>
    )
  }
}

