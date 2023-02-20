import React from 'react';
import '../styles.css'
import nineDots from '../nineDots.png';  //9 dots icon


//header containing nav bar with elements and icons
function Header(props){
    return(
        <div id="nav-bar">
            <div id="left-nav">   {/*nav bar is divided into 2 main parts left-nav and right-nav*/}
                <a class="nav-elements" href="/About">About</a>
                <a class="nav-elements" href="/Store">Store</a>
            </div>
            <div id="right-nav" class="navi">
                <a class="nav-elements" href="/Gmail">Gmail</a>
                <a class="nav-elements" href="/Images">Images</a>
                <a class="nav-elements" href="/nineDots"><img id="nineDots" src={nineDots}/></a>
                <a class="nav-elements"><button id="sign-in">Sign in</button></a>
            </div>
        </div>
    );
}

export default Header;
