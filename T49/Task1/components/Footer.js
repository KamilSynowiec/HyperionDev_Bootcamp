import React from 'react';
import '../styles.css'

function Footer(props){
    return(
        <div id="footer">
            <div class="grayField">      {/*upper part containing country*/}
                <h6 id="country">United Kingdom</h6>
            </div>
            <div id='new-line'></div>
            <div class="grayField">
                <div>
                    <p id="carbon-text">Carbon neutral since 2007</p>
                </div>
                <div>
                    <div id="left-footer">  {/*footer is divided into 2 main parts left-nav and right-nav*/}
                        <a class="footer-elements">Advertising</a>
                        <a class="footer-elements">Business</a>
                        <a class="footer-elements">How Search works</a>
                    </div>
                    <div id="right-footer">
                        <a class="footer-elements">Privacy</a>
                        <a class="footer-elements">Terms</a>
                        <a class="footer-elements">Settings</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
