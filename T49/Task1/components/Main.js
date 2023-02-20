import React from 'react';
import '../styles.css';
import googleLogo from '../google.png';  //personal use http://www.stickpng.com/img/icons-logos-emojis/tech-companies/google-logo from http://www.stickpng.com/img/icons-logos-emojis/tech-companies/google-logo




function Main(props){

    const displayAlert = () => {   //alert displayed when any of the buttons under input are clicked
        alert(props.info);
    };

    return(
        <div id="main">
            <div>
                <a><img id="googleLogo" src={googleLogo}/></a>  {/*google logo*/}
            </div>
            <div>
                <div>
                    <input type="text" id="inputField"></input>   {/*input*/}
                </div>
                <div>
                    <button class="buttons" onClick={displayAlert}>Google Search</button>       {/*buttons under input*/}
                    <button class="buttons" onClick={displayAlert}>I'm feeling lucky</button>
                </div>
            </div>
        </div>
    );
}

export default Main;
