import './sass/components/Presentation.scss';

export default function Presentation(props){
    return (
        <section id="apropos" className="Presentation">
            <img src="images/autres/photo_profil.jpeg" alt="Photo de profil"/>
            <h1>Jérôme Trottier</h1>
            <h4>Amateur de technologie depuis mon enfance, c'est avec intérêt que je suis cette passion dans mes études. Que ce soit de la programmation web, jeu ou du design, j'aime avoir à relever des défis pour davantage agrandir mes connaissances sur ces sujets. Toujours en train d'apprendre, toujours en train de m'améliorer.
            </h4>
            <a href="JeromeTrottier_CV2021.pdf" download>Télécharger CV</a>
        </section>
    );
}