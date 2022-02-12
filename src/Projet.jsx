import LinkProjet from './LinkProjet';
import './sass/components/Projet.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';

export default function Projet(props){
    return (
        <article className="Projet">
            <img src={"images/projets/" + props.pid + ".png"} alt=""/>
            <div className="contenu">
                <h2 className="nom">{props.nom}</h2>
                <p className="desc">{props.desc}</p>
                <div className="liens">
                    <LinkProjet link={props.github_link} contenu="GitHub" icone={<GitHubIcon/>}/>
                    <LinkProjet link={props.project_link} contenu="Projet" icone={<PreviewIcon/>}/>
                </div>
                <p className="date">{props.date}</p>
            </div>
        </article>
    );
}