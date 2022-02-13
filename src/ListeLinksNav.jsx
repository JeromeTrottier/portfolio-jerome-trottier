import LinkNav from './LinkNav';
import './sass/components/ListeLinksNav.scss';

export default function ListeLinksNav(props){
    return (
        <ul className="ListeLinksNav">
            <LinkNav lien="#apropos" contenu="À propos"/>
            <LinkNav lien="#portfolio" contenu="Portfolio"/>
            <LinkNav lien="#contact" contenu="Contact"/>
        </ul>
    );
}