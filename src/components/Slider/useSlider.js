export function useSlider(props){
  const categoriesData = ['coffes', 'espresso', 'eiskaffe'];

  const productData = [ {
    name:'Traditional Turkish Filter Coffe',
    stars:5,
    price: 61.00,
    offerPrice: 56.12,
    tags:[{newProduct: true},{discount:4}]
  }, {
    name:'Milk Frother Free Vanilla Coffe',
    stars:4,
    price:76.00,
    tags:[]
  }, {
    name:'Blueberry Flavoured Instant Coffe',
    stars:0,
    price:84.00,
    offerPrice:80.64,
    tags:[{discount:4}]
  }, {
    name:'rage coffee vanilla punch flavour',
    stars:5,
    price:48.00
  } ]

  return {
    categoriesData,
    productData
  }
}
