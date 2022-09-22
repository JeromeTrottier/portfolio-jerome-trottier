import './sass/components/LinkProjet.scss';

export default function LinkProjet(props){

    const handleClick = (e) => {
        e.preventDefault();
        if (props.link === "") {
            alert("Pas de lien attribué à ce projet!");
        }
        else {
            window.open(props.link, '_blank');
        }
    }

    return (
        <a onClick={handleClick} href="#" className="LinkProjet">
            {props.icone} 
            <p className="linkText">
                {props.contenu}
            </p>
        </a>
    );
}