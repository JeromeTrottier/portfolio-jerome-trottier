import './sass/components/LinkProjet.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function LinkProjet(props){
    return (
        <a href={props.link} target="_blank" className="LinkProjet">
            {props.icone} 
            <p className="linkText">
                {props.contenu}
            </p>
        </a>
    );
}