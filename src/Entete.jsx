import './sass/components/Entete.scss';
import Navigation from './Navigation';
import LinkProjet from './LinkProjet';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBurger from './MenuBurger';

export default function Entete(props){
    return (
        <header className="Entete">
            <div className="contactLinks">
            </div>
            <Navigation/>
            <div></div>
        </header>
    );
}