import './sass/components/ListeProjets.scss';
import Projet from './Projet';
import lesProjets from './data/lesProjets.json';
import {AnimatePresence} from 'framer-motion';
import { useEffect, useState } from 'react';


export default function ListeProjets(props){

    const [sortedProjects, setSortedProjects] = useState([]);

    useEffect(() => {
        const filteredProjects = lesProjets.sort(
            ({vieillesse:a}, {vieillesse:b}) => sortByAge(a, b)
        ).filter(filterByType);
        setSortedProjects(filteredProjects);
    }, [props.orderByAge, props.orderByType]);

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
            return project.type.includes(element);
        });

        return contains;
    }

    return (
        <section className="ListeProjets">
                <AnimatePresence>
                {
                    sortedProjects.map(unProjet => (
                        <Projet 
                            key={unProjet.id}
                            pid={unProjet.id} 
                            nom={unProjet.nom} 
                            desc={unProjet.desc}            
                            github_link={unProjet.github_link} 
                            project_link={unProjet.project_link} 
                            date={unProjet.date}
                            technologies={unProjet.technologies}
                        />
                    ))
                }
                </AnimatePresence>    
        </section>  
    );
}