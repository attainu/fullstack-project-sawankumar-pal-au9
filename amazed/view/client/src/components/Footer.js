
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const backToTop = () => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }

    return (
        <footer>
            <center>
                <button className="btn btn-primary" style={{width:'100%'}} onClick={backToTop}>Back To Top</button>
            </center>
            <div className="container">
                <div className="top-footer">
                    <div className="reg">
                        <p className="top-heading">Registered Office</p>
                        <p className="details">Amazed.in<br/>
                            Buildings Alyssa, Begonia &<br/>
                            Clove Embassy Tech Village,<br/>
                            Outer Ring Road, Devarabeesanahalli Village,<br/>
                            Bengaluru, 560103,<br/>
                            Karnataka, India</p>
                        
                        <p className="details">phone: 9538852608</p>
                    </div>
                    <div className="mail">
                        <p className="top-heading">Mail Us</p>
                        <p className="details">Amazed.in<br/>
                            Buildings Alyssa, Begonia &<br/>
                            Clove Embassy Tech Village,<br/>
                            Outer Ring Road, Devarabeesanahalli Village,<br/>
                            Bengaluru, 560103,<br/>
                            Karnataka, India</p>
                        <p className="details">Email: info@amazed.in</p>
                    </div>
                    <div className="socialMedia">
                        <p className="top-heading">Social Media</p>
                        <p className="details">
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/amazed.in"><i className="fa fa-facebook-square" aria-hidden="true"></i>&nbsp;Facebook</a>
                        </p>
                        <p className="details">
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/amazed.in"><i className="fa fa-twitter" aria-hidden="true"></i>&nbsp;Twitter</a>
                        </p>
                        <p className="details">

                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/amazed.in/"><i className="fa fa-instagram" aria-hidden="true"></i>&nbsp;Instagram</a>

                        </p>
                    </div>
                    <div className="about">
                        <p className="top-heading">About</p>
                        <p className="details">
                            <Link to='/about'>About Us</Link>
                            </p>
                            {
                        (sessionStorage.getItem('role') !== 'Admin') && 
                        <p className="details">
                            <Link to='/contact'>Contact Us</Link>
                        </p>
                        }
                    </div>
                </div>
                <hr className="line"/>
                <center>
                    <small>Developed by Sunitta and Sawan. &copy; 2021</small>
                </center>
            </div>
        </footer>
    );
}

export default Footer;