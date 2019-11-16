import * as React from 'react'
import gotService from '../../../services/gotService'
import Details, {Field} from '../../details/details'
import {Link} from 'react-router-dom'

export default class BooksItem extends React.Component {

  gotService = new gotService()

  render() {
    return (
      <div>
        <Details id={this.props.bookId} data={this.gotService.getBooks} text="choose book">
          <Field field='name' label='Name'></Field>
          <Field field='numberOfPages' label='NumberOfPages'></Field>
          <Field field='publiser' label='Publiser'></Field>
          <Field field='released' label='Released'></Field>
          <Link className="text-warning" to='/books/'>Back to book page</Link>
        </Details>
      </div> 
    )
  }

}

