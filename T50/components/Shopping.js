//shopping component that refers to other product components
function Shopping(){
    return(
        <div>
            <h2>Shopping</h2>
            <Product1/>
            <Product2/>
            <Product3/>
        </div>
    );
}

//product components
function Product1(props) {
    return (
      <div>
        <h6>Shirts: </h6>
        <ul>
          <li>blue</li>
          <li>red</li>
          <li>yellow</li>
          <li>green</li>
        </ul>
      </div>
    );
  }
  
  function Product2() {
    return (
      <div>
        <h6>Shoes: </h6>
        <ul>
          <li>leather</li>
          <li>sandals</li>
          <li>boots</li>
        </ul>
      </div>
    );
  }
  
  function Product3() {
    return (
      <div>
        <h6>hats: </h6>
        <ul>
          <li>summer</li>
          <li>winter</li>
          <li>caps</li>
        </ul>
      </div>
    );
  }

export default Shopping;