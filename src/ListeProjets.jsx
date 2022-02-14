import './sass/components/ListeProjets.scss';
import Projet from './Projet';
import lesProjets from './data/lesProjets.json';


export default function ListeProjets(props){
    return (
        <section className="ListeProjets">
            {lesProjets.map(unProjet => <Projet pid={unProjet.id} 
                                                nom={unProjet.nom} 
                                                desc={unProjet.desc}            
                                                github_link={unProjet.github_link} 
                                                project_link={unProjet.project_link} 
                                                date={unProjet.date}
                                                technologies={unProjet.technologies}
                                        />)
            }
        </section>
    );
}