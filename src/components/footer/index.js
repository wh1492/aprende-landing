import { Link } from "react-router-dom";
import instagram from '../../assets/images/ico_social_instagram.svg';
import facebook from '../../assets/images/ico_social_facebook.svg';
import linkedin from '../../assets/images/ico_social_linkedin.svg';
import tiktok from '../../assets/images/ico_social_tiktok.svg';
import './footer.scss'
const Footer = () => {
  return (
    <div className="aprende-footer">
      <ul className="aprende-footer--social">
        <li><Link to="/"><img src={instagram} alt="instagram" /></Link></li>
        <li><Link to="/"><img src={facebook} alt="facebook" /></Link></li>
        <li><Link to="/"><img src={linkedin} alt="linkedin" /></Link></li>
        <li><Link to="/"><img src={tiktok} alt="tiktok" /></Link></li>
      </ul>
      <p>
        &copy; 2020 Aprende Institute.
      </p>
      <ul className="aprende-footer--footlinks">
        <li><Link to="/">Terminos y Condiciones</Link></li>
        <li><Link to="/">Politica de Privacidad</Link></li>
      </ul>
    </div>
  )
}

export default Footer