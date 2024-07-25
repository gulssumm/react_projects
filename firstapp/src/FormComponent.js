import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class FormComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            resultSum:0,
            num1:0,
            num2:0
        }
        this.handlenum1Change = this.handlenum1Change.bind(this);
        this.handlenum2Change = this.handlenum2Change.bind(this);
    }

    handlenum1Change(evnt){
        this.setState({num1:Number(evnt.target.value)});
    }

    handlenum2Change(evnt){
        this.setState({num2:Number(evnt.target.value)});
    }

    sum = () =>{
        this.setState({resultSum:this.state.num1 + this.state.num2});
    }

    evenodd = () =>{
        var rst = "";
        if(this.state.num1 % 2 == 0){
            rst = "first number is even";
        }else{
            rst = "first number is odd";
        }
        if(this.state.num2 % 2 == 0){
            rst = rst + "  second number is even";
        }else{
            rst = rst + "  second number is odd";
        }
        this.setState({resultSum:rst})
    }

    listAllNumbers = () =>{
        var rst = "";
        var n1 = this.state.num1;
        var n2 = this.state.num2;
        var temp = 0;
        if(n1 > n2){
            temp = n1;
            n1 = n2;
            n2 = temp;
            alert("numbers are replaced");
        }
        for(temp = n1; temp <= n2; temp++){
            rst = rst + temp + "-" ;
        }
        this.setState({resultSum: rst});
    }

    generateRandomNumber = () =>{
        {/* This function generates a random number between 1 and 100*/}
        var x = Math.floor(Math.random()*100);
        this.setState({resultSum: x});
    }

    render()
    {
        return(
            <div>
                <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>first number</Form.Label>
          <Form.Control placeholder="enter first number" onChange={this.handlenum1Change}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>second number</Form.Label>
          <Form.Control placeholder="enter second number" onChange={this.handlenum2Change}/>
        </Form.Group>
      </Row>

      <Button variant="primary" onClick={this.sum}>
        Sum
      </Button>
      &nbsp; &nbsp;
      <Button variant="danger" onClick={this.evenodd}>
        Even/Odd
      </Button>
      &nbsp; &nbsp;
      <Button variant="warning" onClick={this.listAllNumbers}>
        List All Numbers Between
      </Button>
      &nbsp; &nbsp;
      <Button variant="success" onClick={this.generateRandomNumber}>
      <span class="material-symbols-outlined">
        change_circle
      </span>
        Generate Random Number
      </Button>

      <Row></Row>
      <br/>

      <Row>
        <Form.Label>{this.state.resultSum}</Form.Label>
      </Row>
      
    </Form>
            </div>
        )
    }
}
export default FormComponent;