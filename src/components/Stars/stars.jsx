export function Stars({number}){
  return (
    <div>
      {[...Array(5)].map((_, index) => <span style={{color:`${index <= number ? '#f2b600' : 'black'}`}}>&#9733;</span>)}
  </div>
  ) }
