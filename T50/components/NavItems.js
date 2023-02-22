import {Link} from "react-router-dom"; 

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

export default NavItems;