import logo from "../logo.png";  //importing logo 
import React, {useEffect, useState} from "react";




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

    export default Header;