import './styles/Footer.css'
import github from '../../src/assets/images/GitHub_Logo_White.png';
import linkedin from '../../src/assets/images/pngwing.com.png';

export default function Footer() {
    return (
        <footer>
        <div className='footer'>
            <a href="https://github.com/ChrisRome00">
                <img className='logo1' src={github}/>
            </a>
            <a  href="https://www.linkedin.com/in/christopher-romero-b25779272/">
                <img className='logo2' src={linkedin}/>
            </a>
        </div>
        </footer>
    )
}