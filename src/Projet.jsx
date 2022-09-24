import LinkProjet from './LinkProjet';
import './sass/components/Projet.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import ListeTechnologies from './ListeTechnologies';
import {motion} from 'framer-motion';

export default function Projet(props){
    return (
            <motion.div 
                layout
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 0.2,
                        type: "spring"
                    }
                }}
                exit={{
                    opacity: 0,
                    transition: {
                        delay: 0.2,
                        type: "spring"
                    }
                }}
                initial={{opacity: 0}}
                className="Projet">
                    <a href={props.project_link} target="_blank" rel='noopener noreferrer'><img src={"images/projets/" + props.pid + ".png"} alt=""/></a>
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
            </motion.div>     
    );
}