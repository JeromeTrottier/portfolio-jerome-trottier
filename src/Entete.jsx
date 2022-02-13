import './sass/components/Entete.scss';
import Navigation from './Navigation';
import LinkProjet from './LinkProjet';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Entete(props){
    return (
        <header className="Entete">
            <div className="contactLinks">
                <LinkProjet link="https://github.com/JeromeTrottier" icone={<GitHubIcon/>}/>
                <LinkProjet link="https://github.com/JeromeTrottier" icone={<LinkedInIcon/>}/>
            </div>
            <Navigation/>
            <div></div>
        </header>
    );
}