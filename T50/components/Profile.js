import {useState} from "react";

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


//element containing information about user that displays on Profile page
const userInfo=
<div>
    <ul>
        <li>Name: Michael </li>
        <li>Surname: Jordan</li>
        <li>Shipping Address: Highland Park, IL, 60035, United States</li>
    </ul>
</div>;


export default Profile;