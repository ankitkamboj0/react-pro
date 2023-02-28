
import { Link } from "react-router-dom"
const Header = ()=>{
    return(
        <div className="flex space-between header">
            <div className="logo">
                <img src="https://img.freepik.com/free-vector/www-icon_23-2147934922.jpg?size=338&ext=jpg" />
            </div>
           
            <ul className="listUnstyle flex grid-gap-5">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">contact</Link>
                </li>
            </ul>        
        </div>
    )
}

export default Header