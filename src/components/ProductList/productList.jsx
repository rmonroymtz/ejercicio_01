import {useMemo} from 'react';
import classes from './productList.module.css';
import { Price } from '../Price';
import { Stars } from '../Stars';

export function ProductList(props){

  const {products} = props

  console.log(products)

  const productsDetails = useMemo(() => products.map((product, index) => (
    <div key={`product-${index}`} className={classes.productContainer}>
      <p>{product.name}</p>
      <Stars number={product.stars} />
      <Price price={product.price} offerPrice={product.offerPrice} />
      <button>add to cart</button>
    </div>
  )), [products])

  return(
    <div className={classes.root}>
      {productsDetails}
    </div>
      )
}
