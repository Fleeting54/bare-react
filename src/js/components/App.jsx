import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'reactstrap';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <Button color='danger'>HELLO WORLD</Button>
            </div>
        );
    }
}