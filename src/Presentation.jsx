import './sass/components/Presentation.scss';

export default function Presentation(props){
    return (
        <section id="apropos" className="Presentation">
            <img src="images/autres/photo_profil.jpeg" alt="Photo de profil"/>
            <h1>Jérôme Trottier</h1>
            <h5>Amoureux de la technologie depuis mon enfance, c'est avec intérêt que je suis cette passion dans mes études. Que ce soit de la programmation web, jeu ou du design, j'aime avoir à relever des défis pour davantage agrandir mes connaissances sur ces sujets. Toujours entrain d'apprendre, toujours entrain de m'améliorer.
            </h5>
            <a href="JeromeTrottier_CV2021.pdf" download>Télécharger CV</a>
        </section>
    );
}