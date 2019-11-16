import * as React from 'react'
import gotService from '../../../services/gotService'
import Details, {Field} from '../../details/details'

export default class BooksItem extends React.Component {

  gotService = new gotService()

  render() {
    return (
      <Details id={this.props.bookId} data={this.gotService.getBooks} text="choose book">
        <Field field='name' label='Name'></Field>
        <Field field='numberOfPages' label='NumberOfPages'></Field>
        <Field field='publiser' label='Publiser'></Field>
        <Field field='released' label='Released'></Field>
      </Details>
    )
  }

}

