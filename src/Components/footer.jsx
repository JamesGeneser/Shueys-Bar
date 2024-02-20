
import Container from "react-bootstrap/Container";
import ShueysLogo from '../images/ShueysLogo.png';
import FacebookLogo from '../images/FacebookLogo.svg'

function Footer() {




return(
    <div>
<Container fluid className="footer-container">
<img src={ShueysLogo} alt="Shueys Logo" className="shueys-logo"/>
<img src={FacebookLogo} alt="Facebook Logo"/>
</Container>
</div>

);


}

export default Footer;