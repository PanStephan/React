import * as React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';

interface IPropState {
    showRandomChar: boolean
}

export default class App extends React.Component<any, IPropState>{

    state : IPropState = {
        showRandomChar: true
    }

    onClickButton = () => {
        this.setState({showRandomChar: !this.state.showRandomChar})
    }

    render() {

        const randomChar = this.state.showRandomChar ? <RandomChar/> : null

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Button onClick={this.onClickButton}>Delete Random char</Button>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
};