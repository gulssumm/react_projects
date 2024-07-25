import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class StringComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            result:'',
            text1:'',
            text2:''
        }
        this.handletext1Change = this.handletext1Change.bind(this);
        this.handletext2Change = this.handletext2Change.bind(this);
    }

    handletext1Change(evnt){
        this.setState({text1:evnt.target.value});
    }

    handletext2Change(evnt){
        this.setState({text2:evnt.target.value});
    }

    findLength = () =>{
        var sln = this.state.text1.length;
        sln = 'the length of the text: ' + sln;
        this.setState({result: sln});
    }

    reverse = () =>{
        this.setState({result: this.state.text1.split("").reverse().join("")});
    }

    charAt = () =>{
        var str = this.state.text1;
        var str2 = this.state.text2;
        var pos = str.indexOf(str2);
        this.setState({result: pos});
    }

    charAtAll = () =>{
        var str = this.state.text1;
        var str2 = this.state.text2;
        var textResult = '';
        for(var j=0; j<str2.length; j++){
            for(var i=0; i<str.length; i++){
                if(str.charAt(i) == str2.charAt(j)){
                    textResult = textResult + str.charAt(i) + ' exists, ';
                    break;
                }
            }
        }
        this.setState({result: textResult});
    }

    shuffleText = () =>{
        var str = this.state.text1;
        var a = str.split("");
        var n = a.length;
        for(var i = n-1; i>0; i--){
            var j = Math.floor(Math.random()*(i+1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        this.setState({result: a.join("")});
    }


render()
{
    return(
        <div>
            <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>first text</Form.Label>
          <Form.Control placeholder="enter first text" onChange={this.handletext1Change}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>second text</Form.Label>
          <Form.Control placeholder="enter second text" onChange={this.handletext2Change}/>
        </Form.Group>
      </Row>

      <Button variant="primary" onClick={this.findLength}>
        Find the length
      </Button>
      &nbsp; &nbsp;
      <Button variant="danger" onClick={this.reverse}>
        Reverse the text
      </Button>
      &nbsp; &nbsp;
      <Button variant="warning" onClick={this.charAt}>
        Get index of the text in the second input
      </Button>
      &nbsp; &nbsp;
      <Button variant="success" onClick={this.charAtAll}>
        Check the existance of each element of second text in first text
      </Button>
      &nbsp; &nbsp;
      <Button variant="dark" onClick={this.shuffleText}>
        Shuffle the text
      </Button>

      <Row></Row>
      <br/>

      <Row>
        <Form.Label>{this.state.result}</Form.Label>
      </Row>
      
    </Form>
        </div>
    )
}  
}
export default StringComponent;