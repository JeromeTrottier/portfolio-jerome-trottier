import LinkProjet from './LinkProjet';
import './sass/components/Projet.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import TechnologieUtilisee from './TechnologieUtilisee';
import ListeTechnologies from './ListeTechnologies';

export default function Projet(props){
    return (
        <article className="Projet">
            <a href={props.project_link} target="_blank"><img src={"images/projets/" + props.pid + ".png"} alt=""/></a>
            <div className="contenu">
                <h2 className="nom">{props.nom}</h2>
                <p className="desc">{props.desc}</p>
                <h4 className="techTitre">Technologies utilisées</h4>
                <ListeTechnologies technologies={props.technologies}/>
                <div className="liens">
                    <LinkProjet link={props.github_link} contenu="GitHub" icone={<GitHubIcon/>}/>
                    <LinkProjet link={props.project_link} contenu="Projet" icone={<PreviewIcon/>}/>
                </div>
                <p className="date">{props.date}</p>
            </div>
        </article>
    );
}