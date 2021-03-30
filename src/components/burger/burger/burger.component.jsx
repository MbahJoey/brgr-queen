import React from 'react';

import BurgerIngredient from '../burgerIngredient/burger-ingredient.component';

import './burger.styles.css';

const Burger = (props) => {
  let transformedIngredient = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  })
  .reduce((arr, el) => {
      return arr.concat(el)
  }, []);
  if (transformedIngredient.length === 0){
      transformedIngredient = <p>Add ingredients!</p>
  }


  return (
    <div className='burger'>
      <BurgerIngredient type='bread-top' />
      {transformedIngredient}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default Burger;
