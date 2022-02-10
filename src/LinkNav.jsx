import './sass/components/LinkNav.scss';

export default function LinkNav(props){
    return (
        <li className="LinkNav">
            <a href={props.lien}>{props.contenu}</a>
        </li>
    );
}