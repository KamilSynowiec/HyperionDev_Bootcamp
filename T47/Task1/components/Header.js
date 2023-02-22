import logo from "../logo.png";  //importing logo 
import React from "react";

//Header component that uses state to check if user is logged in
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isLoggedIn: false };
    }
  
    //this method is setting isLoggedIn state 
    userLogging() {
      this.setState({ isLoggedIn: this.props.isLoggedIn });
    }
  
    //this method runs when the component is mounted
    componentDidMount() {
      this.userLogging();
    }
  
    render() {
      if (this.state.isLoggedIn === true) {  //if user is logged in the app will display Welcome + name of the user
        return (
          <div>
            <img src={logo} alt="Logo" />
            <h1>The fictitious cloth store</h1>
            <p class="welcome">Welcome {this.props.name}</p>
          </div>
        );
      } else {  //if the user is not logged in the app will ask user to sign up
        return (
          <div>
            <img src={logo} alt="Logo" />
            <h1>The fictitious cloth store</h1>
            <p class="welcome">Please sign in first{this.state.isLoggedIn}</p>
          </div>
        );
      }
    }
  }

  export default Header;
