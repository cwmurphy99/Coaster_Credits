import './Footer.css';
import githubLogo from '../../images/githubLogo.png';
import linkedInLogo from '../../images/linkedInLogo2.png';
import profileImage from '../../images/profileImage.png';

export const Footer = () => {
        
    return (
        <>
            <footer className="footer">
                <section className="footer-main">

                    <div className="footer-copyrite">
                        <p>&copy; 2021 - Nashville Software School</p>
                    </div>

                    <div>
                        <a href="" target="_blank" className="footer-imageProfileImage"><img src={profileImage} /> </a>
                    </div>

                    <div>
                        <a href="https://linkedin.com/in/christopherwmurphy" target="_blank" className="footer-imageLinkedInImage"><img src={linkedInLogo} /> </a>
                    </div>

                    <div>
                        <a href="https://github.com/cwmurphy99" target="_blank" className="footer-imageGitHubImage"><img src={githubLogo} /> </a>
                    </div>

                </section>
            </footer>
        </>
    )
}
