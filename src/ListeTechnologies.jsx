import './sass/components/ListeTechnologies.scss';
import TechnologieUtilisee from './TechnologieUtilisee';

export default function ListeTechnologies(props){

    return (
        <div className="ListeTechnologies">
            {props.technologies.map(uneTechnologie => <TechnologieUtilisee technologieLink={uneTechnologie.techLink} technologieNom={uneTechnologie.techNom}/>)}
        </div>
    );
}