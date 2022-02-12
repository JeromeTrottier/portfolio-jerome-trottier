import LinkNav from './LinkNav';
import './sass/components/ListeLinksNav.scss';

export default function ListeLinksNav(props){
    return (
        <ul className="ListeLinksNav">
            <LinkNav lien="#" contenu="À propos"/>
            <LinkNav lien="#" contenu="Portfolio"/>
            <LinkNav lien="#" contenu="Contact"/>
        </ul>
    );
}