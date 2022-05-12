import { Link } from "react-router-dom";
import logo from '../../assets/images/aprende_logo.webp';
import './header.scss'
const Header = () => {
  return (
    <div className="aprende-header">
      <div className="container">
        <div className="aprende-header--logo">
          <Link to="/">
            <img src={logo} className="" alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header