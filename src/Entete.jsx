import './sass/components/Entete.scss';
import Navigation from './Navigation';
import MenuBurger from './MenuBurger';

export default function Entete(props){
    return (
        <header className="Entete">
            <div className="contactLinks"></div>
            <Navigation/>
            <div></div>
        </header>
    );
}