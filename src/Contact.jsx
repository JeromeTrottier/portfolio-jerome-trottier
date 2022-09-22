import './sass/components/Contact.scss';
import PhoneIcon from '@mui/icons-material/Phone';
import HouseIcon from '@mui/icons-material/House';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact(props){
    return (
        <section className="Contact">
            <ul>
                    <li>
                        <HouseIcon/>
                        <p>H2G 2C8</p>
                    </li>
                    <li>
                        <PhoneIcon/>
                        <p>(514) 374-9957</p>
                    </li>
                    <li>
                        <EmailIcon/>
                        <p>jerome.trottier@hotmail.ca</p>
                    </li>
                    <li>
                        <GitHubIcon/>
                        <a target="_blank"rel="noopener noreferrer" href="https://github.com/JeromeTrottier">JeromeTrottier</a>
                    </li>
                    <li>
                        <LinkedInIcon/>
                        <a target="_blank "rel="noopene noreferrer" href="https://www.linkedin.com/in/jerometrottier/">JeromeTrottier</a>
                    </li>
                </ul>
        </section>
    );
}