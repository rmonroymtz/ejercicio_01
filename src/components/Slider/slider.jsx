import classes from './slider.module.css';
import { Categories } from '../Categories'
import { ProductList } from '../ProductList';
import {useSlider} from './useSlider';


export function Slider(props){

  const {
    categoriesData,
    productData
  } = useSlider(props)

  return (
    <div className={classes.root}>
      <Categories categories={categoriesData} />
      <ProductList products={productData} />
    </div>
  )
}
