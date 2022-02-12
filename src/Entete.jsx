import './sass/components/Entete.scss';
import Navigation from './Navigation';

export default function Entete(props){
    return (
        <header className="Entete">
            <div className="contactLinks">
                
            </div>
            <img src="images/autres/photo_profil.jpeg" alt="Photo de profil"/>
            <h1>Jérôme Trottier</h1>
        </header>
    );
}