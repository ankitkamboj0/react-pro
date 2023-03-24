import {useContext} from "react"
import { Link } from 'react-router-dom';
import {UserContext} from 'utils/userContext';


const Header = () => {
  const {user} = useContext(UserContext);
  return (
    <div className="space-between header flex">
      <div className='w-[300px] logo'>
        <img  src="https://img.freepik.com/free-vector/www-icon_23-2147934922.jpg?size=338&ext=jpg" />
      </div>

      <ul className="listUnstyle grid-gap-5 flex">
        <li>
          {user.name}
        </li>  
        <li>
          <Link className='p-2' to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
