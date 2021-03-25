import React, { Component } from 'react';

import Fragment from '../../hoc/fragment/fragment.hoc';
import Burger from '../../components/burger/burger/burger.component';

class BurgerBuilder extends Component {
  state = {
    ingredients:{
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }


  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
