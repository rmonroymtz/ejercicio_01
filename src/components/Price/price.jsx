import classes from './price.module.css'
export function Price({price, offerPrice}){
  const eur = new Intl.NumberFormat('en-DE', {
    style:'currency',
    currency:'EUR'
  });

  if(offerPrice){
    return <p className={classes.price}><span>{eur.format(price)}</span> {eur.format(offerPrice)}</p>
  }else{
    return <p className={classes.price}>{eur.format(price)}</p>
  }
}
