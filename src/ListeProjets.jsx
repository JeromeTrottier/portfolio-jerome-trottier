import './sass/components/ListeProjets.scss';
import Projet from './Projet';
import lesProjets from './data/lesProjets.json';


export default function ListeProjets(props){

    const sortByAge = (a, b) => {
        switch (props.orderByAge){
            case 'desc':
                return a - b;
            default:
                return b - a;
        }
    }

    const filterByType = (project) => {
        
        if (props.orderByType.length === 0)
        {
            return project;
        }
        
        const contains = props.orderByType.some(element => {
            console.log(project.type.includes(element));
            return project.type.includes(element);
        });

        return contains;
    }

    return (
        <section className="ListeProjets">
            {lesProjets.sort(({vieillesse:a}, {vieillesse:b}) => sortByAge(a, b)).filter(filterByType).map(unProjet => <Projet pid={unProjet.id} 
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