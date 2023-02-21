import {Routes, Route, Link} from "react-router-dom"; 
import logo from "./logo.png";  //importing logo 
import "./styles.css"; //stylesheet
import React, {useEffect, useState} from "react";

//page navigation
function NavItems(){
    return(
        <div>
            <nav class="navigation">
                <Link to="/" class="menu">Home page</Link>
                <Link to="/profile" class="menu">User Profile</Link>
                <Link to="/shopping" class="menu">Shopping page</Link>
                <Link to="/legal" class="menu">legal page</Link>
                <Link to="/calc" class="menu">interest calculator</Link>
            </nav>
        </div>
    )
} 

//Header component that uses hooks to check if user is logged in
function Header(props){
    const [isLoggedIn, setLogged] = useState(false);    //this method is setting isLoggedIn state 
   
    
    //this runs when the function is triggered
    useEffect(()=>{
      setLogged(props.isLoggedIn);
    }, [props.isLoggedIn]);
  
      if (isLoggedIn===true) {  //if user is logged in the app will display Welcome + name of the user
        return (
          <div>
            <img src={logo} alt="Logo" />
            <h1>The fictitious cloth store</h1>
            <p class="welcome">Welcome {props.name}</p>
          </div>
        );
      } else {  //if the user is not logged in the app will ask user to sign up
        return (
          <div>
            <img src={logo} alt="Logo" />
            <h1>The fictitious cloth store</h1>
            <p class="welcome">Please sign in first{isLoggedIn}</p>
          </div>
        );
      }
    }
  
//landing page displaying what the company does
  function LandingPage() {
    return (
      <div>
        <h2>About our company: </h2>
        <p>Out company is specializing in selling fictitious clothes</p>
      </div>
    );
  }

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
  


//element containing information about user that displays on Profile page
const userInfo=
<div>
    <ul>
        <li>Name: Michael </li>
        <li>Surname: Jordan</li>
        <li>Shipping Address: Highland Park, IL, 60035, United States</li>
    </ul>
</div>;


function Profile(){
    const [isLoggedIn, setLogged] = useState(true);    //this method is setting isLoggedIn state 
    
        //this.handleClick=this.handleClicking.bind(this); //binding handleClicking method to handleClick
      return(
          <div>
              <h2>User Profile:</h2>
              {isLoggedIn? userInfo : ""} 
              <button onClick={()=>{
                if(isLoggedIn===true){  //checking id user is logged then change state addequately
                  setLogged(false);
                }else{
                  setLogged(true);
                }
              }}>Log out</button> 
              <p>User logged {isLoggedIn? "in" : "out"}</p>  
              <p>{isLoggedIn? "" : alert("User has logged out!")}</p>  {/*Alert informing that user has logged out */}
                
          </div>
      );
}

//legal page 
function Legal(){
    return(
        <div>
            <h2>Legal page</h2>
            <h3>Terms and Conditions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h3>Return policy</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h3>Shipping and payment info</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    );
}


//calculator for interests loan for shopping
function Calculator(){
    let input=0;
    let months=0;

    return(
        <div>
            <h2>Interest calculator</h2>
            <h3>Current interest rate is 20%</h3>
            {input=parseInt(prompt("Enter total shopping value: "))}
            {months=parseInt(prompt("Enter number of months to calculate: "))};
            <p>"your monthly repayment: "{(input+(input*0.2*months/12))}</p>  {/*assumes 20% interest rate */}
        </div>
    );
}


  
  function App() {
    return (
      <div className="App">
        <NavItems/>
        <Header isLoggedIn={true} name="Michael"/>
        <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/shopping" element={<Shopping/>}/>
            <Route path="/legal" element={<Legal/>}/>
            <Route path="/calc" element={<Calculator/>}/>
        </Routes>
    
       
      </div>
    );
  }

export default App;
