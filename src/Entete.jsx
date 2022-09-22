import './sass/components/Entete.scss';
import Navigation from './Navigation';

export default function Entete(props){
    return (
        <header className="Entete">
            <div className="contactLinks">
            </div>
            <Navigation/>
            <div></div>
        </header>
    );
}