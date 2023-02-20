import logo from "./logo.png";  //importing logo 
import React from "react";
import "./styles.css"; //stylesheet

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

function LandingPage() {
  return (
    <div>
      <h2>About our company: </h2>
      <p>Out company is specializing in selling fictitious clothes</p>
    </div>
  );
}

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
      <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Secondary card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

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

let pageComponents = [];
pageComponents.push({ display: <Header name="Michael" isLoggedIn={true} /> });
pageComponents.push({ display: <LandingPage /> });
pageComponents.push({ display: <Product1 /> });
pageComponents.push({ display: <Product2 /> });
pageComponents.push({ display: <Product3 /> });

function App() {
  return (
    <div>
      {pageComponents[0].display}
      {pageComponents[1].display}
      {pageComponents[2].display}
      {pageComponents[3].display}
      {pageComponents[4].display}
    </div>
  );
}

export default App;
