import './sass/components/TechnologieUtilisee.scss';

export default function TechnologieUtilisee(props){
    return (
        <a href={props.technologieLink} target="_blank" className="TechnologieUtilisee">
            {props.technologieNom}
        </a>
    );
}