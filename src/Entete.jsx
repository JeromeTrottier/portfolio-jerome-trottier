import './Entete.scss';

export default function Entete(props){
    return (
        <header className="Entete">
            <nav class="header__nav">
                <ul class="nav__liste">
                    <li class="liste__item"><a href="#">À propos de moi</a></li>
                    <li class="liste__item"><a href="#">Portfolio</a></li>
                    <li class="liste__item"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}