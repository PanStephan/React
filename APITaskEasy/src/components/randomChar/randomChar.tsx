import * as React from 'react';
import './randomChar.scss';
import gotService from './../../services/gotService'
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage/errorMessage'

interface IPropState {
    char: object,
    loading: boolean,
    error: boolean,
    errStatus: number
}

export default class RandomChar extends React.Component<any, IPropState> {

    constructor() {
        super()
        this.updateChar()
    }

    gotService = new gotService();

    state : IPropState = {
        char: {},
        loading: true,
        error: false,
        errStatus: null
    }

    onCharLoaded = char => {
        this.setState({
            char,
            loading: false,
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
            errStatus: err
        })
    }

    updateChar() {
        const id : number = 303
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(err => this.onError(err.message))
    }

    render() {
        const {char, loading, error, errStatus} = this.state

        const errorMessage = error ? <ErrorMessage errStatus={errStatus}/> : null
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? <View char={char}/> : null

        return (
            <div className="random-block rounded">
              {errorMessage}  
              {spinner}
              {content}
            </div>
        );
    }
} 

const View = ({char}) => {
    const {name, gender, born, died, culture} = char
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}