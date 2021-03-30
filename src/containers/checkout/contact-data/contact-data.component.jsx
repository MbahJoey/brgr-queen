import React, { Component } from 'react';

import CustomButton from '../../../components/UI/custom-button/custom-button.component';
import axios from '../../../axios-orders.js';

import './contact-data.styles.css';
import Spinner from '../../../components/UI/spinner/spinner.component';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'asd asd',
        address: {
          street: 'street1',
          country: 'spain with silent s',
          zipCode: '123231',
        },
        email: 'pain@spain.es',
      },
      deliveryMethod: 'spanish',
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className='Input'
          type='text'
          name='name'
          placeholder='Your name'
        />
        <input
          className='Input'
          type='email'
          name='email'
          placeholder='Your email'
        />
        <input
          className='Input'
          type='street'
          name='street'
          placeholder='Your street'
        />
        <input
          className='Input'
          type='post'
          name='post'
          placeholder='Your post code'
        />

        <CustomButton btnType='Success' clicked={this.orderHandler}>
          ORDER
        </CustomButton>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className='ContactData'>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}
export default ContactData;
