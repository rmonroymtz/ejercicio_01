import {useMemo} from 'react'
import classes from './categories.module.css'
export function Categories(props){
  const { categories } = props

  const categoriesDisplay = useMemo(() => <div className={classes.categories}>
    {categories.map( (category, index) => (
          <p key={`category-${index}`}>{category}</p>
  ))}</div>
    , categories)


  const buttons = (
    <div className={classes.buttons}>
      <button>&#60;</button>
      <button>&#62;</button>
    </div>
  )

  return (
    <div className={classes.root}>
      {categoriesDisplay}
      {buttons}
    </div>
  )}
