import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Form } from 'react-bootstrap';


export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form style={{display:"flex",flexDirection:"Column", maxWidth:"250px", alignSelf:"center"}}>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        	<input
            type="tel"
            name="number"
            placeholder="Valid thru"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        	<input
            type="tel"
            name="number"
            placeholder="CVV"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
     
        </form>

        <Form.Group style={{marginTop:"1rem"}}>
                    <label htmlFor="exampleInputName1"> Business Info</label>
                    <Form.Control type="text" className="form-control"  id="exampleInputName1" placeholder="Price in INR" />
        </Form.Group>
        <button type="submit" className="btn btn-primary ">Submit</button>
            <button className="btn btn-light">Cancel</button>
      </div>
    );
  }
}