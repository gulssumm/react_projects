import React, {Component} from "react";
import Button from 'react-bootstrap/Button';

class FirstComponent extends Component{
    render()
    {
        return(
            <div>
                {this.props.preText}<input type='text' size={20}></input>
                <Button variant="warning">{this.props.buttonText}</Button>{' '}
            </div>
        )
    }
}

export default FirstComponent;